import React, { useState } from "react";
import { ImSpinner10 } from "react-icons/im";
import projectinfo from "./projectinfo";

const style = {
  display: "flex",
  width: "75%",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom : "5px",
  boxShadow: "0.5px 0.5px 4px",
  border: "0.5px solid gray",
  borderRadius: "12px",
  backgroundColor: "#dde7f0",
  cursor: "pointer",
  flexDirection: "column",
};

export default function Merge() {
  const [component, setComponent] = useState(null);
  const onClickHandler = (element) => {
    const com = (
      <React.Suspense fallback={<ImSpinner10 />}>
        {element.component}
      </React.Suspense>
    );
    setComponent(com);
  };
  const renderComponent = projectinfo.map((el, i) => {
    const {
      description: { Aim, Using, Learn, Default },
    } = el;
    return (
      <div style={style} key={i} onClick={() => onClickHandler(el)}>
        <h4 style={{ textAlign: "center", fontStyle : "italic", color: "GrayText" , fontWeight : "bolder" }}>{el.name}</h4>
        <div style={{ padding: "1px" , marginLeft : "5px" }}>
          <p>
            <b>Aim : </b>
            {Aim}
          </p>
          <p>
            <b>Used concepts : </b>
            {Using}
          </p>
          <p>
            <b>Understood : </b>
            {Learn}
          </p>
          <p>{Default}</p>
        </div>
      </div>
    );
  });
  return <>{  component  || renderComponent  }</>;
}
