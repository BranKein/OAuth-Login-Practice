import React, { useEffect, useState } from "react";
import "../styles/MainPage.scss";
import { useLocation } from "react-router-dom";

const OtherPageBody = ({ }) => {
  const [name, setName] = useState(useLocation().state.name);

  useEffect(() => {
    console.log(localStorage.getItem("googleTokenId"));
  })

  return (
    <>
      <div className="main-page-body-wrapper">
        <h1>
          Hi, {name}
        </h1>
      </div>
    </>
  );
}

const OtherPage = ({ }) => {
  return (
    <div className="main-page-wrapper">
      <OtherPageBody />
    </div>
  );
};

export default OtherPage;
