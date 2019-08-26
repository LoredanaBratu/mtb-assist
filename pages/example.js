import Link from "next/link";
import Layout from "../components/layout";

export default function Example() {
  return (
    <Layout>
      <div className="hello">
        <p>Hello everyone!</p>
        <style jsx>{`
      .hello {
        font-size: 32px;
        color: blue;
        text-align:center,
        transition: 100ms ease-in background;
        background: yellow;
      }
      .hello:hover{
        background:grey;
      }
    `}</style>
        <style global jsx>{`
          body {
            background: grey;
          }
        `}</style>
        <Link href="/post/[pid]" as="/post/abc">
          <a>First Try</a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>About</li>
        </ul>
        <div>
          <p>
            Click{" "}
            <Link href={{ pathname: "/index", query: { name: "Zeit}" } }}>
              <a>here</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
