import type { V2_MetaFunction, LinksFunction } from '@remix-run/node';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const links: LinksFunction = () => {
  return [];
};

export default function Index() {
  return <h1>Hello template</h1>;
}
