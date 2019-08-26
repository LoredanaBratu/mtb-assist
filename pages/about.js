import Link from "next/link";
import Layout from "../components/layout";

function About() {
  return (
    <Layout>
      <p>
        Click{" "}
        <Link href="/example" replace>
          <a>here</a>
        </Link>{" "}
        for more information
      </p>
    </Layout>
  );
}
export default About;
