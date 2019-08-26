import Head from "next/head";
import Link from "next/link";

function IndexPage() {
  return (
    <div>
      <Head>
        <title> Next Project</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.2, width=device-width"
          key="viewport"
        />
      </Head>
      <p>Helloooo</p>
    </div>
  );
}
export default IndexPage;
