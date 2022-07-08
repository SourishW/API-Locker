import React from "react";
import AllServiceGroup from "./AllServiceComponents/AllServiceGroup";
import "./allservice.scss";

export default function AllServices(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "60px", color: "white" }}>
        Your Services:
      </h1>

      <div className="allservices">
        {Object.keys(props.groups).map((item, index) => (
          <div className="allservices__group">
            <h1>{item} Services</h1>
            <br />
            <AllServiceGroup group={props.groups[item]} />
          </div>
        ))}
        {JSON.stringify(props.groups, "", 2)}
      </div>
    </div>
  );
}
