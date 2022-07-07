import React, { useState } from "react";
import "./formformatting.scss";

const Method = (props) => {
  const [profile, setProfile] = useState({});

  const updateAttribute = (object, name, value) => {
    const copyJect = object;
    copyJect[name] = value;
    return copyJect;
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
    props.setMethodInfo((prev) => ({
      ...prev,
      [props.methodName]: updateAttribute(prev[props.methodName], name, value),
      //   [props.methodName]: updateAttribute(prev[props.methodName], name, value),
    }));
  };

  return (
    <div className="method">
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Specify {props.methodName.toUpperCase()} Method
      </h1>

      <form className="method__form">
        <div className="method__form__item">
          <label
            htmlFor="rootEndPointAndPath"
            className="method__form__item__label"
          >
            Root Endpoint and Path Information
          </label>
          <textarea
            style={{ height: "200px" }}
            id="rootEndPointAndPath"
            className="method__form__item__longinput"
            value={profile.rootEndPointAndPath || ""}
            name="rootEndPointAndPath"
            type="text"
            placeholder="Fill in necessary query parameters."
            onChange={handleChange}
          />
        </div>

        <div className="method__form__item">
          <label
            htmlFor="queryParameters"
            className="method__form__item__label"
          >
            Query Parameters and Variables:
          </label>
          <textarea
            style={{ height: "600px" }}
            id="queryParameters"
            className="method__form__item__longinput"
            value={profile.queryParameters || ""}
            name="queryParameters"
            type="text"
            placeholder="Fill in necessary query parameters."
            onChange={handleChange}
          />
        </div>

        <div className="method__form__item">
          <label htmlFor="headers" className="method__form__item__label">
            Request Headers:
          </label>
          <textarea
            style={{ height: "600px" }}
            id="headers"
            className="method__form__item__longinput"
            value={profile.headers || ""}
            name="headers"
            type="text"
            placeholder="Fill in information about the request's headers."
            onChange={handleChange}
          />
        </div>

        <div className="method__form__item">
          <label htmlFor="body" className="method__form__item__label">
            Request Body:
          </label>
          <textarea
            style={{ height: "600px" }}
            id="body"
            className="method__form__item__longinput"
            value={profile.body || ""}
            name="body"
            type="text"
            placeholder="Fill in information about the request's body or data."
            onChange={handleChange}
          />
        </div>

        <div className="method__form__item">
          <label htmlFor="authentication" className="method__form__item__label">
            Request Authentication and Access:
          </label>
          <textarea
            style={{ height: "400px" }}
            id="authentication"
            className="method__form__item__longinput"
            value={profile.authentication || ""}
            name="authentication"
            type="text"
            placeholder="Fill in information about the request's authentication necessary or access."
            onChange={handleChange}
          />
        </div>

        <div className="method__form__item">
          <label htmlFor="sampleRequest" className="method__form__item__label">
            Sample Request:
          </label>
          <textarea
            style={{ height: "1000px" }}
            id="sampleRequest"
            className="method__form__item__longinput"
            value={profile.sampleRequest || ""}
            name="sampleRequest"
            type="text"
            placeholder="Provide an example of what a sample request would look like."
            onChange={handleChange}
          />
        </div>

        <div className="method__form__item">
          <label
            htmlFor="relatedCodeBase"
            className="method__form__item__label"
          >
            Version/Related Code Repository:
          </label>
          <input
            id="relatedCodeBase"
            className="method__form__item__shortinput"
            value={profile.relatedCodeBase || ""}
            name="relatedCodeBase"
            type="text"
            placeholder="Specify an optional link to a code repository."
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Method;
