import React from "react";

export default function SingleService(props) {
  return (
    <div className="allservices__group__collective__item">
      <h1>{props.service.name}</h1>
    </div>
  );
}
