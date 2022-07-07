import React, { useState } from "react";
import "./newservice.scss";
import InitialServiceInfo from "./NewServiceComponents/InitialServiceInfo";
import NeedEndpoints from "./NewServiceComponents/NeedEndpoints";
import Method from "./NewServiceComponents/Method";
import LicensingInfo from "./NewServiceComponents/LicensingInfo";

// props should include existing old license
const ChangeService = (props) => {
  const [firstInfo, setFirstInfo] = useState(props.firstInfo);
  const [pages, setPages] = useState(Object.keys(props.licensingInfo));
  const [licensingInfo, setLicensingInfo] = useState(props.licensingInfo);
  const [needEndpoints, setNeedEndpoints] = useState(true);
  const [endPoints, setEndPoints] = useState({
    connect: Object.keys(props.methodInfo["connect"]).length != 0,
    delete: Object.keys(props.methodInfo["delete"]).length != 0,
    get: Object.keys(props.methodInfo["get"]).length != 0,
    head: Object.keys(props.methodInfo["head"]).length != 0,
    options: Object.keys(props.methodInfo["options"]).length != 0,
    patch: Object.keys(props.methodInfo["patch"]).length != 0,
    post: Object.keys(props.methodInfo["post"]).length != 0,
    put: Object.keys(props.methodInfo["put"]).length != 0,
    trace: Object.keys(props.methodInfo["trace"]).length != 0,
  });

  const [methodInfo, setMethodInfo] = useState(props.methodInfo);

  return (
    <div>
      <div className="newservice">
        <InitialServiceInfo
          setFirstInfo={setFirstInfo}
          setPages={setPages}
          setNeedEndpoints={setNeedEndpoints}
          firstInfo={firstInfo}
          setLicensingInfo={setLicensingInfo}
        />
        {needEndpoints && (
          <NeedEndpoints setEndPoints={setEndPoints} endPoints={endPoints} />
        )}

        {pages.map((item, index) => (
          <LicensingInfo
            licenseNumber={index}
            setLicensingInfo={setLicensingInfo}
            licensingInfo={licensingInfo[parseInt(index)]}
          />
        ))}

        {Object.keys(endPoints).map(
          (item, index) =>
            endPoints[item] && (
              <Method
                methodName={String(item)}
                setMethodInfo={setMethodInfo}
                methodInfo={methodInfo[item]}
              />
            )
        )}
      </div>
      <div className="newservice__pagetraversal">
        <button className="newservice__pagetraversal__button">Submit</button>
      </div>

      {JSON.stringify(firstInfo, "", 2)}
      <br />
      <br />

      {JSON.stringify(licensingInfo, "", 2)}
      <br />
      <br />

      {JSON.stringify(methodInfo, "", 2)}
      <br />
      <br />
    </div>
  );
};
export default ChangeService;
