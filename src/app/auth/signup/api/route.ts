import register from './controllers/register'

export const dynamic = 'force-dynamic' //
export async function Post(request: Request) {
  // register(request)
  console.log('request', request)
  const res = await request.json()

  console.log('res', res)

  return new Response('Hello world')
}

export async function Get(request: Request) {
  return new Response('Hello world')
}
