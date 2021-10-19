import "../styles/globals.css";
import Layout from "../components/layout/Layout";
const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
