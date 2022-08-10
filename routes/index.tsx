/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import LoginForm from "../islands/LoginForm.jsx";

export default function Home() {
  return (
    <Layout>
      
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              src="/logo.svg"
              height="100px"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
            <p>
              Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
              file, and refresh.
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
      <link
        rel="stylesheet"
        href={`https://static.andbounds.com/formvalidation.io/css/formValidation.min.css`}
      />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
      </Head>
      {children}
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      >
      </script>
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"
      >
      </script>
      <script
        type="text/javascript"
        src="https://static.andbounds.com/formvalidation.io/js/FormValidation.min.js"
      >
      </script>
      <script
        type="text/javascript"
        src="https://static.andbounds.com/formvalidation.io/js/plugins/Bootstrap5.min.js"
      >
      </script>
    </Fragment>
  )
}