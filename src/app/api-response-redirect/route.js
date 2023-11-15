export function POST(request) {
  return Response.redirect(`${request.nextUrl.origin}/?success=true`, 303);
}
