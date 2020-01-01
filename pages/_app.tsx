import App from 'next/app'
import Head from 'next/head';
import React, { Fragment } from 'react';

export default class RootApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render () {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    )
  }
};