export default async function register(request: Request) {
  console.log('request', request)
  const res = await request.json()

  console.log('res', res)

  return new Response('Hello world')
}
