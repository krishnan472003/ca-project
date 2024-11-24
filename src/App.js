// app.js

import { useAuth } from "react-oidc-context";

export default function App() {
  // const auth = useAuth();

  // const signoutRedireOut = () => {
  //   const clientId = "5d2uqi9k49jcajrtfhoafn0iov"; 
  //   const logoutUri = "<logout uri>";
  //   const cognitoDomain = "<user pool domain>";
  //   window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  // };

  // if (auth.isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (auth.error) {
  //   return <div>Encountering error... {auth.error.message}</div>;
  // }

  // if (auth.isAuthenticated) {
  //   return (
  //     <div>
  //       <pre> Hello: {auth.user?.profile.email} </pre>
  //       <pre> ID Token: {auth.user?.id_token} </pre>
  //       <pre> Access Token: {auth.user?.access_token} </pre>
  //       <pre> Refresh Token: {auth.user?.refresh_token} </pre>
        
  //       <button onClick={() => auth.removeUser()}>Sign out</button>
  //     </div>
  //   );
  // }

  return (
    <div>
    <>adsas</>
      {/* <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signoutRedireOut()}>Sign out</button> */}
    </div>
  );
}