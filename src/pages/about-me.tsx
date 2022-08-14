import Head from "next/head";
import BackArrow from "~/components/NavigationIcons/BackArrow";
import { Presentation } from "~/styles/pages/about-me";

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About me • gelzin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Presentation>
        <BackArrow />
        <div className="container">
          <div className="info">
            <span>Nice to meet you!</span>
            <h1>I&apos;m gelzin</h1>
            <p>
              I work as a Motion &amp; Graphic Designer, and I&apos;m also a
              developer.
            </p>
          </div>
          <img
            src="../../illustrations/breaking-barriers.svg"
            alt="Avatar breaking screen."
          />
        </div>
        <div className="bg">
          <img
            src="../../illustrations/breaking-barriers.svg"
            alt="Avatar breaking screen."
          />
        </div>
      </Presentation>
    </>
  );
}
