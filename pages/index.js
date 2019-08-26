import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import Layout from "../components/layout";

function Home() {
  return (
    <Layout>
      <div>
        <p>Hello...</p>
        <ul>
          <li>Home</li>
          <li>
            <Link href="/example">
              <a>About </a>
            </Link>
          </li>
        </ul>
        <button type="button" class="btn btn-dark">
          Dark
        </button>
      </div>
    </Layout>
  );
}

export default Home;
