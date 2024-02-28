import type { MetaFunction, LinksFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export const links: LinksFunction = () => {
  return [];
};

export default function Index() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-center bg-red-200">
      <h1 className="rounded-[0.25rem] p-8 text-4xl shadow-[8px_8px_2px_1px_beige]">Hello</h1>
    </main>
  );
}
