import { ProfileData } from "../components/ProfileData";
import { callMsGraph, ensureServiceLockerDirectory } from "../graph";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);
  const [driveData, setDriveData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(response.accessToken).then((response) =>
            setGraphData(response)
          );
        });
      });

    instance
      .acquireTokenSilent(request)
      .then((response) => {
        ensureServiceLockerDirectory(response.accessToken).then((response) =>
          setDriveData(response)
        );
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          ensureServiceLockerDirectory(response.accessToken).then((response) =>
            ensureServiceLockerDirectory(response)
          );
        });
      });
  }

  return (
    <>
      <h5 className="card-title">Welcome {name}</h5>
      {graphData ? (
        <div>
          <ProfileData graphData={graphData} />
          {JSON.stringify(driveData, "", 2)}
          {JSON.stringify(graphData, "", 2)}
        </div>
      ) : (
        <Button variant="secondary" onClick={RequestProfileData}>
          Request Profile Information
        </Button>
      )}
    </>
  );
}
