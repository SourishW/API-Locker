import React, { useState } from "react";
import LicensingInfo from "./LicensingInfo";
import "./formformatting.scss";

const InitialServiceInfo = (props) => {
  const [profile, setProfile] = useState(props.firstInfo);
  const handleChange = ({ target }) => {
    const { name, value } = target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
    props.setFirstInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addLicensingPages = ({ target }) => {
    const { name, value } = target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (value !== "") {
      const pages = new Array(parseInt(value));

      for (let i = 0; i < value; i++) {
        pages[i] = i;
      }
      props.setPages(pages);
      let newInfo = {};
      for (let i = 0; i < value; i++) {
        newInfo[i] = {};
      }
      props.setLicensingInfo((prev) =>
        Object.keys(prev)
          .filter((key) => key < value)
          .reduce((obj, key) => {
            return Object.assign(obj, {
              [key]: prev[key],
            });
          }, {})
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSelect = ({ target }) => {
    const { name, value } = target;
    props.setNeedEndpoints(value === "yes");
  };

  return (
    <div className="initialServiceInfo">
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Describe your service:
      </h1>

      <form onSubmit={handleSubmit} className="initialServiceInfo__form">
        <div className="initialServiceInfo__form__item">
          <label
            htmlFor="serviceName"
            className="initialServiceInfo__form__item__label"
          >
            Service Name:
          </label>
          <input
            id="serviceName"
            className="initialServiceInfo__form__item__shortinput"
            value={profile.serviceName || ""}
            name="serviceName"
            type="text"
            placeholder="Name of service"
            onChange={handleChange}
          />
        </div>

        <div className="initialServiceInfo__form__item">
          <label
            htmlFor="serviceDescription"
            className="initialServiceInfo__form__item__label"
          >
            Service Description:
          </label>
          <textarea
            id="serviceDescription"
            className="initialServiceInfo__form__item__longinput"
            value={profile.serviceDescription || ""}
            name="serviceDescription"
            type="text"
            placeholder="Describe the service"
            onChange={handleChange}
          />
        </div>
        <div className="initialServiceInfo__form__item">
          <label
            htmlFor="relatedCodeBase"
            className="initialServiceInfo__form__item__label"
          >
            Related Code Repository Link:
          </label>
          <textarea
            id="relatedCodeBase"
            className="initialServiceInfo__form__item__longinput"
            value={profile.relatedCodeBase || ""}
            name="relatedCodeBase"
            type="text"
            placeholder="Optionally provide a link to a repository related to this service, in the next steps you will also be able to attach repositories related to individual API methods, if you wish."
            onChange={handleChange}
          />
        </div>

        <div className="initialServiceInfo__form__item">
          <label
            htmlFor="serviceGrouping"
            className="initialServiceInfo__form__item__label"
          >
            Service Grouping:
          </label>
          <input
            id="serviceGrouping"
            className="initialServiceInfo__form__item__shortinputdropdown"
            list="groups"
            value={profile.serviceGrouping || ""}
            name="serviceGrouping"
            type="text"
            placeholder="Select from a holistic group or create a new group"
            onChange={handleChange}
          />
          <datalist id="groups">
            <option>Volvo</option>
            <option>Saab</option>
            <option>Mercedes</option>
            <option>Audi</option>
          </datalist>
        </div>

        <div className="initialServiceInfo__form__item">
          <label
            htmlFor="serviceType"
            className="initialServiceInfo__form__item__label"
          >
            Service Type:
          </label>

          <input
            id="serviceType"
            className="initialServiceInfo__form__item__shortinputdropdown"
            list="typegroups"
            value={profile.serviceType || ""}
            name="serviceType"
            type="text"
            placeholder="Select from a service type or create a new one"
            onChange={handleChange}
          />
          <datalist id="typegroups">
            <option>Client API</option>
            <option>Internal API</option>
            <option>Database</option>
          </datalist>
        </div>

        <div className="initialServiceInfo__form__item">
          <label
            htmlFor="deploymentPlatform"
            className="initialServiceInfo__form__item__label"
          >
            Deployment Platform:
          </label>
          <input
            id="deploymentplatform"
            className="initialServiceInfo__form__item__shortinput"
            value={profile.deploymentPlatform || ""}
            name="deploymentPlatform"
            type="text"
            placeholder="IE on premises, Azure account #4566.. etc"
            onChange={handleChange}
          />
        </div>

        <div className="initialServiceInfo__form__item">
          <label
            htmlFor="numberOfLicenses"
            className="initialServiceInfo__form__item__label"
          >
            Number of Associated 3rd Party Licenses (Leave Blank if 0):
          </label>
          <input
            id="numberOfLicenses"
            className="initialServiceInfo__form__item__shortinput"
            value={profile.numberOfLicenses || ""}
            name="numberOfLicenses"
            type="number"
            placeholder="Your service may have proprietary software with licensing, track these licenses."
            onChange={addLicensingPages}
            onWheel={() => document.activeElement.blur()}
          />
        </div>

        {
          // ["Client API", "Internal API"].includes(profile.serviceType) &&
          <div className="initialServiceInfo__form__item">
            <label htmlFor="" className="initialServiceInfo__form__item__label">
              Would you like to document REST API Methods? (PUT, GET, etc...){" "}
            </label>

            <select
              // value={profile.likeREST || ""}
              name="likeREST"
              className="initialServiceInfo__form__item__input"
              onChange={handleSelect}
              defaultValue="yes"
            >
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
        }
      </form>
    </div>
  );
};

export default InitialServiceInfo;
