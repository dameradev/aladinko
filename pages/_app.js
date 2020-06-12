import App, { Container } from "next/app";
// import { ApolloProvider } from 'react-apollo';
// import withData from '../lib/withData';
import Page from "../components/Page";
// import './styles/index.scss'

class MyApp extends App {
  static async getInitialProps({ Component, ctx, pathname }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.pathname = pathname;
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    );
  }
}

export default MyApp;

{
  /* <ApolloProvider client={apollo}> */
}
{
  /* </ApolloProvider> */
}
