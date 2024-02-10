import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
export default function FirstPost() {
  return (
    <Layout>
      <>
        <Head>
          <title>First post</title>
        </Head>
        <h2>
          <Link href="/">Back to Home</Link>
        </h2>
      </>
    </Layout>
  );
}
