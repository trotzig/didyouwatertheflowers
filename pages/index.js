import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import AppChrome from '../src/AppChrome';
import Button from '../src/Button';

export default function Home() {
  return (
    <AppChrome>
      <Head>
        <title>Welcome to Did you water the flowers?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <p className="title-intro">Welcome to</p>
          <h1 className="title">Did you water the flowers?</h1>
          <p className="description">
            An application to keep track of when flowers were last watered and
            by who.
          </p>
          <Link href="/signin">
            <a>
              <Button>Sign in</Button>
            </a>
          </Link>
        </div>
        <div>
          <img src="/flowers.jpg" />
          <p className="caption">
            Photo by{' '}
            <a href="https://unsplash.com/@jblesly?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Lesly Juarez
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/s/photos/pots-flowers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
              Unsplash
            </a>
          </p>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 100px 0;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          column-gap: 50px;
          align-items: center;
        }
        img {
          object-fit: contain;
          max-height: 500px;
          max-width: 100%;
        }
        .title-intro {
          font-size: 16px;
          font-style: italic;
          margin-bottom: 5px;
        }
        .title {
          margin-top: 0;
          font-weight: bold;
        }
        .caption {
          font-size: smaller;
          color: #ccc;
        }
        .caption a {
          color: inherit;
        }
      `}</style>
    </AppChrome>
  );
}
