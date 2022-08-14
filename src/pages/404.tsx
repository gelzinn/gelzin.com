import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ErrorPage } from "~/styles/pages/404";

export default function Error() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>This page is not available • gelzin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ErrorPage>
        <img className="logo" src="../../logos/gelzin.svg" alt="gelzin" />
        <span>Oops!</span>
        <img src="../../404-error-woman.svg" alt="Woman on 404" />
        <p>The page is not available. Try again later or go back to home.</p>
        <a onClick={router.back}>Go back</a>
      </ErrorPage>
    </>
  );
}
