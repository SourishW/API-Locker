import React from "react";

export default function AllServiceGroup(props) {
  return (
    <div className="allservices__group__collective">
      <table className="allservices__group__collective__table">
        <tr className="allservices__group__collective__table__headers">
          <th>Service</th>
          <th>Type</th>
          <th>Cycle</th>
          <th>State</th>
          <th>Link</th>
        </tr>
        {Object.keys(props.group).map((item, index) => (
          <>
            <tr className="allservices__group__collective__table__row">
              <td>{props.group[item]["name"]}</td>
              <td>{props.group[item]["type"]}</td>
              <td>{props.group[item]["cycle"]}</td>
              <td>{props.group[item]["state"]}</td>
              <td>
                <button>
                  <a href={props.group[item]["link"]}>Manage</a>
                </button>
              </td>
            </tr>
          </>
        ))}
      </table>
      {/* {Object.keys(props.group).map((item, index) => (
      ))} */}
    </div>
  );
}
