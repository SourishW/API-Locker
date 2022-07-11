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

export async function getServiceInfoFromDrive(accessToken) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);
  headers.append("Content-Type", "application/json");

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.uploadFile + ".json:/content", options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}

export async function createCalendarEvents(accessToken, licensingInfo) {
  if (Object.keys(licensingInfo).length == 0) {
    return;
  } else {
    const licenseNumber = "0";
    let name = licensingInfo[licenseNumber]["licenseName"];
    let date = licensingInfo[licenseNumber]["expiryDate"];

    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);
    headers.append("Content-Type", "application/json");

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        subject: "License Reminder for " + name + " license",

        start: {
          dateTime: date + "T12:00:00",
          timeZone: "Pacific Standard Time",
        },
        end: {
          dateTime: date + "T14:00:00",
          timeZone: "Pacific Standard Time",
        },
      }),
    };

    return fetch(graphConfig.uploadFile + ".json:/content", options)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  }
}
