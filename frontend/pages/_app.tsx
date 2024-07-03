import React from 'react';
import App, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'; // 导入 Bootstrap 样式
import '../styles/globals.css'; // 导入全局样式

class MyApp extends App<AppProps> {
  // 获取初始属性
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  // 根据路由设置画面 ID
  getPageId(pathname: string): string {
    switch (pathname) {
      case '/insert':
        return '0001';
      case '/select':
        return '0002';
      default:
        return '0000'; // 默认画面 ID
    }
  }

  // 渲染组件
  render() {
    const { Component, pageProps } = this.props;
    const pageId = this.getPageId(this.props.router.pathname);

    return (
      <>
        <Head>
          <title>My Next.js App</title>
          <meta name="page-id" content={pageId} />
        </Head>
        <Component {...pageProps} />
        <footer className="text-center mt-5">
          <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        </footer>
      </>
    );
  }
}

export default MyApp;
