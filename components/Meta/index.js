import Head from "next/head";

const Meta = (props) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/favicon.png" />

      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        // rel="stylesheet"
        rel="dns-prefetch"
      ></link>

      <title>Aladinko</title>
    </Head>
  );
};

export default Meta;
