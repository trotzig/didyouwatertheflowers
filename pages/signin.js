import Head from 'next/head';
import React from 'react';

import AppChrome from '../src/AppChrome';
import Button from '../src/Button';
import Card from '../src/Card';

export default function SigninPage() {
  return (
    <AppChrome>
      <Head>
        <title>Sign in | Did you water the flowers?</title>
      </Head>

      <main>
        <div>
          <h1>Welcome back!</h1>
          <div className="card">
            <Card>
              <label>
                Username:
                <input type="text" name="username" />
              </label>
              <label>
                Password:
                <input type="password" name="username" />
              </label>
              <Button>
                Sign in
              </Button>
            </Card>
          </div>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 100px 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .card {
          width: 400px;
          max-width: 100%;
        }
        label {
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 10px;
          margin-bottom: 20px;
        }
      `}</style>
    </AppChrome>
  );
}
