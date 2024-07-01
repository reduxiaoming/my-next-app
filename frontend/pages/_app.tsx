import React from 'react';
import App, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'; // 导入 Bootstrap 样式
import '../styles/globals.css'; // 导入全局样式

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>My Next.js App</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;