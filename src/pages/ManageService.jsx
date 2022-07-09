import React from "react";
import "./manageservice.scss";

export default function ManageService(props) {
  return (
    <div className="manageservice">
      <div className="manageservice__primaryinfo">
        <div className="manageservice__primaryinfo__title">
          <h1>
            <span>Manage {"Google Service"}</span>
          </h1>
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
    </div>
  );
}
