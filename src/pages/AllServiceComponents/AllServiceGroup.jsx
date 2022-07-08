import React from "react";
import SingleService from "./SingleService";

export default function AllServiceGroup(props) {
  return (
    <div className="allservices__group__collective">
      {Object.keys(props.group).map((item, index) => (
        <SingleService service={props.group[item]} />
      ))}
    </div>
  );
}
