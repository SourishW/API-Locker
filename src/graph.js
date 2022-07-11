import { graphConfig } from "./authConfig";

/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function getContacts(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.getContacts, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function ensureServiceLockerDirectory(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.getRecentFiles, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function uploadServiceInfoToDrive(accessToken, dataToSave) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);
  headers.append("Content-Type", "application/json");

  const options = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(dataToSave),
  };

  return fetch(
    graphConfig.uploadFile +
      dataToSave["primaryInformation"]["serviceName"].replaceAll(" ", "_") +
      ".json:/content",
    options
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
}
