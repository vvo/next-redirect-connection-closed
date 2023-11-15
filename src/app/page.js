export default function Home() {
  return (
    <main>
      <h1>POST /api-redirect fails with 500</h1>
      <form action="/api" method="POST">
        <input type="submit" value="Submit" />
      </form>
      <h1>POST /api-reponse-redirect-307 fails with 500</h1>
      <form action="/api-response-redirect-307" method="POST">
        <input type="submit" value="Submit" />
      </form>
      <h1>POST /api-reponse-redirect works</h1>
      <form action="/api-response-redirect" method="POST">
        <input type="submit" value="Submit" />
      </form>
      <h1>POST /non-existent-path fails with 500 (should be 404)</h1>
      <form action="/non-existent-path" method="POST">
        <input type="submit" value="Submit" />
      </form>
      <p>
        POST + redirect we should do a 303 as it seems:
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303">
          https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303
        </a>
        . Otherwise POST + body are used on the redirect (the / page here) and
        will generate a 500. We may want a better error message too, along with
        fixing redirect().
      </p>
    </main>
  );
}
