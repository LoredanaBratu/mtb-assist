import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

class Login extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Head>
            Login
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            ></link>
          </Head>

          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Email address"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </Layout>
    );
  }
}
export default Login;
