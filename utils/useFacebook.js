import { useEffect, useState } from "react";

// const appId = process.env.REACT_APP_FACEBOOK_APP_ID || "dev_app_id";
const appId = 207395400191664;

const useFacebook = () => {
  const [fbSdkLoaded, setFbSdkLoaded] = useState(false);

  useEffect(
    () => {
      !fbSdkLoaded && setupFacebook();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    { fbSdkLoaded }
  );

  const setupFacebook = () => {
    if (document.getElementById("facebook-jssdk")) {
      setFbSdkLoaded(true);
      return;
    }
    setFbAsyncInit();
    loadSdkAsynchronously();
    createFbRoot();
  };

  const setFbAsyncInit = () => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId,
        autoLogAppEvents: true,
        xfbml: false,
        version: "v6.0",
      });
      console.log("jere");
      setFbSdkLoaded(true);
    };
  };

  const loadSdkAsynchronously = () => {
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = `https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v6.0&autoLogAppEvents=1`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  const createFbRoot = () => {
    let fbRoot = document.getElementById("fb-root");
    if (!fbRoot) {
      fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }
  };

  return {
    fbSdkLoaded: fbSdkLoaded ? fbSdkLoaded : null,
  };
};

export default useFacebook;
