import React from "react";
import "../styles/MainPage.scss";
import GoogleLogin from "react-google-login";

const MainPageBody = ({
}) => {
  const onLoginGoogle = (result) => {
    console.log("google login success!");
    console.log(result);
  }
  
  return (
    <>
      <div className="main-page-body-wrapper">
        <GoogleLogin
          clientId=''
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
