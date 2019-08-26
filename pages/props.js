import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/layout";

class About extends Component {
  static async getInitialProps() {
    return { name: "Imanol" };
  }
  // constructor (){
  //     super()
  //     this.state={
  //         name:'Ana'
  //     }
  // }
  render() {
    return (
      <Layout>
        <div>
          <h1>About {this.props.name}</h1>
          <Link prefetchhref="/">
            <a>Return to home </a>
          </Link>
        </div>
      </Layout>
    );
  }
}
export default About;
