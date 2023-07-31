import { cookies, draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { client } from '../../../utils/apollo';

const DRAFT_SECRET_TOKEN = 'w5e4GVfRzT';

function setCookieSameSiteNone(cookieName: string) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(cookieName)!;
  cookies().set({
    name: cookieName,
    value: cookie?.value,
    httpOnly: true,
    path: '/',
    secure: true,
    sameSite: 'none',
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  if (secret !== DRAFT_SECRET_TOKEN || !slug) {
    return new Response('Invalid token', { status: 401 });
  }

  // const story = await loadStory(slug, undefined, true);
  // if (!story) {
  //   return new Response('Invalid slug', { status: 401 });
  // }

  draftMode().enable();
  await client.resetStore();

  // Workaround for blocked Set-Cookie header in iframe
  // because of SameSite=lax draft cookie
  // https://github.com/vercel/next.js/issues/49927
  setCookieSameSiteNone('__prerender_bypass');

  searchParams.delete('secret');
  searchParams.delete('slug');
  const searchString = searchParams.toString();

  const slugParts = slug.split('/');
  const component =
    slugParts.length > 2 ? slugParts[0].replace(/s#/, '') : 'page';

  switch (component) {
    case 'page':
      return redirect(`/${slug}?${searchString}`);
    case 'project':
      return redirect(`/projects/${slug}?${searchString}`);
    case 'portfolio':
      return redirect(`/portfolio/${slug}?${searchString}`);
    default:
      return new Response('Invalid component', { status: 401 });
  }
}
