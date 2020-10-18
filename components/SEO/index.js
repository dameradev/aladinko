import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ children, location, description, title, image }) => {
  return (
    <Helmet titleTemplate={`%s`}>
      <html lang="en" />
      <title>{title}</title>
      {/* FAV ICONS */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, intial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={
          "Storitve čiščenje preprog, najnižje cene v Mariboru, brezplačni prevzem in dostava"
        }
      />
      {/* Open graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || "/logo.svg"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={"Aladinko čišenje preproge"}
        key="ogsitename"
      />
      <meta property="og:description" content={description} />
      {children}
    </Helmet>
  );
};

export default SEO;
