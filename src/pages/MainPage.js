import React from "react";
import "../styles/MainPage.scss";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";

const MainPageBody = ({
}) => {
  const history = useHistory();

  const onLoginGoogle = (result) => {
    console.log("google login success!");
    console.log(result);
    localStorage.setItem("googleTokenId", result.tokenId);
    console.log(result.tokenId);
    history.push("/other", {name: result.profileObj.name});
  }

  return (
    <>
      <div className="main-page-body-wrapper">
        <GoogleLogin
          clientId='651865709974-8bn4c6shrqq7hlgcuma30qbvprcmchka.apps.googleusercontent.com'
          render={(props) => (
            <button onClick={props.onClick}>Google Login</button>
          )}
          onSuccess={result => onLoginGoogle(result)}
          onFailure={result => console.log(result)}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </>
  );
}

const MainPage = ({
}) => {
  return (
    <div className="main-page-wrapper">
      <MainPageBody
      />
    </div>
  );
};

export default MainPage;
