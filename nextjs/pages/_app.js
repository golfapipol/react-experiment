import React from 'react';
import App from 'next/app';
import Link from 'next/link'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <Link href="/repositories">Repositories</Link>
            </li>
            
          </ul>
        </nav>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
