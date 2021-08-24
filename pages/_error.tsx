import { useRouter } from "next/router"

export function Custom404({ req }) {
  return null
}

Custom404.getInitialProps = ctx => {
  // We check for ctx.res to make sure we're on the server.
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/home' });
    ctx.res.end();
  }
  return { };
}

export default Custom404;