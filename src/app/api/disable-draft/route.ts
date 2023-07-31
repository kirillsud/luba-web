import { draftMode } from 'next/headers';
import { client } from '../../../utils/apollo';

export async function GET(request: Request) {
  draftMode().disable();
  await client.resetStore();
  return new Response('Draft mode is disabled');
}
