import React from 'react';
import Head from 'next/head';
import '../styles/Home.module.css';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Home Page</title>
    </Head>
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item"><a className="nav-link" href="/insert">Go to Insert</a></li>
          <li className="nav-item"><a className="nav-link" href="/select">Go to Select</a></li>
        </ul>
      </nav>
    </div>
  </>
);

export default Home;