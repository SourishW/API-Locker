import React, { useState } from "react";
import "./formformatting.scss";

const NeedEndpoints = (props) => {
  const [profile, setProfile] = useState(props.endPoints);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setProfile((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));

    props.setEndPoints((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };
  return (
    <div className="needEndpoints" style={{ width: "20px", minWidth: "20%" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Select the API Methods you wish to describe:
      </h1>
      <form action="" className="needEndpoints__form">
        <div className="needEndpoints__form__checkbox">
          <input
            className="needEndpoints__form__checkbox__input"
            type="checkbox"
            id="connect"
            name="connect"
            onChange={handleChange}
            defaultChecked={profile.connect}
          />
          <label for="connect"> CONNECT</label>
          <br />

          <input
            onChange={handleChange}
            className="needEndpoints__form__checkbox__input"
            type="checkbox"
            id="delete"
            name="delete"
            value={true}
            defaultChecked={profile.delete}
          />
          <label for="delete"> DELETE</label>
          <br />

          <input
            onChange={handleChange}
            className="needEndpoints__form__checkbox__input"
            type="checkbox"
            id="get"
            name="get"
            value={true}
            defaultChecked={profile.get}
          />
          <label for="get"> GET</label>
          <br />

          <input
            onChange={handleChange}
            className="needEndpoints__form__checkbox__input"
            type="checkbox"
            id="head"
            name="head"
            value={true}
            defaultChecked={profile.head}
          />
          <label for="head"> HEAD</label>
          <br />

          <input
            onChange={handleChange}
            className="needEndpoints__form__checkbox__input"
            type="checkbox"
            id="options"
            name="options"
            value={true}
            defaultChecked={profile.options}
          />
          <label for="options"> OPTIONS</label>
          <br />

          <input
            onChange={handleChange}
            className="needEndpoints__form__checkbox__input"
            type="checkbox"
            id="patch"
            name="patch"
            value={true}
            defaultChecked={profile.patch}
          />
          <label for="patch"> PATCH</label>
          <br />

          <input
            onChange={handleChange}
            className="needEndpoints__form__checkbox__input"
            type="checkbox"
            id="post"
            name="post"
            value={true}
            defaultChecked={profile.post}
          />
          <label for="post"> POST</label>
          <br />

          <input
            onChange={handleChange}
            className="needEndpoints__form__checkbox__input"
            type="checkbox"
            id="put"
            name="put"
            value={true}
            defaultChecked={profile.put}
          />
          <label for="put"> PUT</label>
          <br />

          <input
            onChange={handleChange}
            className="needEndpoints__form__checkbox__input"
            type="checkbox"
            id="trace"
            name="trace"
            value={true}
            defaultChecked={profile.trace}
          />
          <label for="trace"> TRACE</label>
          <br />
        </div>
      </form>
    </div>
  );
};
export default NeedEndpoints;
