import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "react-oidc-context";
import App from "./App";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_zS0b7ZkYE",
  client_id: "5d2uqi9k49jcajrtfhoafn0iov",
  redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
  response_type: "code",
  scope: "phone openid email",
};
ReactDOM.render(
  <React.StrictMode>
    {/* <AuthProvider {...cognitoAuthConfig}> */}
      <App />
    {/* </AuthProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
