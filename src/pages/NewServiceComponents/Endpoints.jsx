import React, { useState } from "react";
import "./formformatting.scss";

const LicensingInfo = (props) => {
  const [profile, setProfile] = useState([]);

  const updateAttribute = (object, name, value) => {
    object[name] = value;
    return object;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
    props.setLicensingInfo((prev) => [
      ...prev.slice(0, props.licenseNumber),
      updateAttribute(profile, name, value),
      ...prev.slice(props.licenseNumber + 1),
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setFirstInfo(profile);
  };

  return (
    <div className="licensingInfo">
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Software License {props.licenseNumber + 1}:
      </h1>

      <form onSubmit={handleSubmit} className="licensingInfo__form">
        <div className="licensingInfo__form__item">
          <label
            htmlFor="licenseName"
            className="licensingInfo__form__item__label"
          >
            License Name (Product Name):
          </label>
          <input
            id="licenseName"
            className="licensingInfo__form__item__shortinput"
            value={profile.licenseName || ""}
            name="licenseName"
            type="text"
            placeholder="Name of 3rd party product or service"
            onChange={handleChange}
          />
        </div>

        <div className="licensingInfo__form__item">
          <label
            htmlFor="licenseDescription"
            className="licensingInfo__form__item__label"
          >
            License Description:
          </label>
          <textarea
            id="licenseDescription"
            className="licensingInfo__form__item__longinput"
            value={profile.licenseDescription || ""}
            name="licenseDescription"
            type="text"
            placeholder="Describe the purpose of the license in relation to the product offered."
            onChange={handleChange}
          />
        </div>

        <div className="licensingInfo__form__item">
          <label
            htmlFor="subscriptionType"
            className="licensingInfo__form__item__label"
          >
            Subscription Type:
          </label>
          <input
            id="subscriptionType"
            className="licensingInfo__form__item__shortinputdropdown"
            list="subscriptiontype"
            value={profile.subscriptionType || ""}
            name="subscriptionType"
            type="text"
            placeholder="Select from one time or recurring."
            onChange={handleChange}
          />
          <datalist id="subscriptiontype">
            <option>One time</option>
            <option>Recurring</option>
          </datalist>
        </div>

        <div className="licensingInfo__form__item">
          <label
            htmlFor="renewalConditions"
            className="licensingInfo__form__item__label"
          >
            Renewal Conditions:{" "}
          </label>

          <textarea
            id="renewalConditions"
            className="licensingInfo__form__item__shortinputdropdown"
            value={profile.renewalConditions || ""}
            name="renewalConditions"
            type="text"
            placeholder="Specify renewal conditions for necessary 3rd party software"
            onChange={handleChange}
          />
        </div>

        <div className="licensingInfo__form__item">
          <label
            htmlFor="renewalPortal"
            className="licensingInfo__form__item__label"
          >
            Renewal Portal:
          </label>
          <input
            id="renewalPortal"
            className="licensingInfo__form__item__shortinput"
            value={profile.renewalPortal || ""}
            name="renewalPortal"
            type="text"
            placeholder="Specify a link to the company's license page"
            onChange={handleChange}
          />
        </div>

        <div className="licensingInfo__form__item">
          <label
            htmlFor="expiryDate"
            className="licensingInfo__form__item__label"
          >
            Action/Expiry Date (we'll remind you to renew):
          </label>
          <input
            id="expiryDate"
            className="licensingInfo__form__item__shortinput"
            value={profile.expiryDate || ""}
            name="expiryDate"
            type="date"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default LicensingInfo;
