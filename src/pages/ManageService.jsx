import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./manageservice.scss";

const previousVersions = {
  0: {
    versionName: "sample version name0",
    creationDate: "date",
    policyDocument: "link to download",
  },
  2: {
    versionName: "sample version name2",
    creationDate: "date",
    policyDocument: "link to download",
  },
  1: {
    versionName: "sample version name1",
    creationDate: "date",
    policyDocument: "link to download",
  },
};

export default function ManageService(props) {
  return (
    <div className="manageservice">
      <div className="manageservice__primaryinfo">
        <div className="manageservice__primaryinfo__title">
          <h1>
            <span>Manage Video Search</span>
          </h1>
        </div>

        <div className="manageservice__primaryinfo__serviceblob">
          <h2 className="manageservice__primaryinfo__serviceblob__item">
            Latest Version: V2
          </h2>

          <h2 className="manageservice__primaryinfo__serviceblob__item">
            Latest Version State: Production
          </h2>
          <h2 className="manageservice__primaryinfo__serviceblob__item">
            Type: Database
          </h2>
        </div>

        <div className="manageservice__primaryinfo__description">
          <div
            className="manageservice__primaryinfo__description__item"
            style={{ flexGrow: 2 }}
          >
            <h3>Latest Version Service Description:</h3>
            <p>
              <br />
              {"\n" +
                "This is a short description of the product.This  is a short description of the productThis is a short description of          the productThis is a short description of the productThis is a short description of the productThis is a short description of the product"}
            </p>
          </div>
          <div
            className="manageservice__primaryinfo__description__item"
            style={{ flexGrow: 1 }}
          >
            <h3>Service History Summary:</h3>
            <p>
              <br />
              {"\n" +
                "This is service has gone through " +
                "1" +
                " stages since creation, and is currently in stage " +
                "V3" +
                ". There are currently " +
                "2" +
                " issues that need to be addressed with the current stage."}
            </p>
          </div>
        </div>
      </div>

      <div className="manageservice__managementoptions">
        <div className="manageservice__managementoptions__item">
          <h2>Update State</h2>
          <select name="state" id="serviceState" defaultValue={"Test"}>
            <option value={null}>Select New Version</option>
            <option value="Dev">Dev</option>
            <option value="Test">Test</option>
            <option value="QA">QA</option>
            <option value="Prod">Prod</option>
          </select>
        </div>
        <div className="manageservice__managementoptions__item">
          <h2 style={{ marginBottom: "25px" }}>Publish New Version</h2>
          <a href="">New Version</a>
        </div>
        <div className="manageservice__managementoptions__item">
          <h2 style={{ marginBottom: "25px" }}>Download Policy JSON</h2>
          <a href="">Download</a>
        </div>
      </div>

      <div className="manageservice__previousversions__title">
        <h1>
          <span>Previous Versions Of Service</span>
        </h1>
      </div>
      <div className="manageservice__previousversions">
        <table className="manageservice__previousversions__table">
          <tr>
            <th>Version Name</th>
            <th>Creation Date</th>
            <th>Policy Document</th>
          </tr>
          {Object.keys(previousVersions)
            .sort(function (a, b) {
              return parseInt(a) > parseInt(b);
            })
            .reverse()
            .slice(1)
            .map((key, number) => (
              <tr>
                <td style={{ padding: "20px", marginBottom: "200px" }}>
                  {" "}
                  {previousVersions[key]["versionName"]}
                </td>
                <td> {previousVersions[key]["creationDate"]}</td>
                <td>
                  {" "}
                  <a href={previousVersions[key]["policyDocument"]}>
                    Link To Download
                  </a>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
}
