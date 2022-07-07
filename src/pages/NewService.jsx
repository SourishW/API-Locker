import React, { useState } from "react";
import "./newservice.scss";
import InitialServiceInfo from "./NewServiceComponents/InitialServiceInfo";
import NeedEndpoints from "./NewServiceComponents/NeedEndpoints";
import Method from "./NewServiceComponents/Method";
import LicensingInfo from "./NewServiceComponents/LicensingInfo";

const NewService = () => {
  const [firstInfo, setFirstInfo] = useState({});
  const [pages, setPages] = useState([]);
  const [licensingInfo, setLicensingInfo] = useState({});
  const [needEndpoints, setNeedEndpoints] = useState(true);
  const [endPoints, setEndPoints] = useState({
    connect: false,
    delete: false,
    get: false,
    head: false,
    options: false,
    patch: false,
    post: false,
    put: false,
    trace: false,
  });
  const [methodInfo, setMethodInfo] = useState({
    connect: {},
    delete: {},
    get: {},
    head: {},
    options: {},
    patch: {},
    post: {},
    put: {},
    trace: {},
  });
  const [formPage, setFormPage] = useState(0);

  const isLastPage = () => {
    let number =
      1 +
      (needEndpoints === true ? 1 : 0) +
      pages.length +
      Object.values(endPoints).filter((point) => {
        return point === true;
      }).length;
    return formPage === number - 1;
  };

  return (
    <div>
      <div className="newservice">
        {[
          <InitialServiceInfo
            setFirstInfo={setFirstInfo}
            setPages={setPages}
            setNeedEndpoints={setNeedEndpoints}
            firstInfo={firstInfo}
            setLicensingInfo={setLicensingInfo}
          />,

          needEndpoints && (
            <NeedEndpoints setEndPoints={setEndPoints} endPoints={endPoints} />
          ),
          ...pages.map((value, index) => (
            <LicensingInfo
              licenseNumber={index}
              setLicensingInfo={setLicensingInfo}
              licensingInfo={licensingInfo}
            />
          )),

          ...Object.keys(endPoints).map(
            (item, index) =>
              endPoints[item] && (
                <Method
                  methodName={String(item)}
                  setMethodInfo={setMethodInfo}
                />
              )
          ),
        ].filter((value) => value)}

        {/* {pages.concat(
          needEndpoints && <NeedEndpoints setEndPoints={setEndPoints} />
        )}

        {Object.keys(endPoints).map(
          (item, index) =>
            endPoints[item] && (
              <Method methodName={String(item)} setMethodInfo={setMethodInfo} />
            )
        )} */}
      </div>

      <div className="newservice__pagetraversal">
        {false && formPage !== 0 && (
          <button
            className="newservice__pagetraversal__button"
            onClick={() => {
              if (formPage !== 0) {
                setFormPage((prev) => prev - 1);
              }
            }}
          >
            Back
          </button>
        )}
        {
          // formPage !== arrayOfPages.filter((n) => n).length - 1 &&
          false && !isLastPage() && (
            <button
              className="newservice__pagetraversal__button"
              onClick={() => {
                if (!isLastPage()) {
                  setFormPage((prev) => prev + 1);
                }
              }}
            >
              Next
            </button>
          )
        }
        {
          // formPage === arrayOfPages.filter((n) => n).length - 1 &&
          isLastPage() && (
            <button className="newservice__pagetraversal__button">
              Submit
            </button>
          )
        }
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

export default NewService;
