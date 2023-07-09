import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { Provider } from 'react-redux';
import { store } from './hooks/store';
import tail from './styles/tailwind.css';
import sass from '~/styles/index.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tail },
  { rel: 'stylesheet', href: sass },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Provider>
      </body>
    </html>
  );
}
