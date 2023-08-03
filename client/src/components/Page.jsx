import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";

import Header from "./Header";
import Footer from "./Footer";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    paddingTop: "80px",
    flexGrow: "1",
  },
};

const defaultHeadContent = (
  <>
    <title>Affirmations</title>
    <meta
      name="description"
      content="This is the default description of my App."
    />
  </>
);

export default function Page({
  isProtected = false,
  headContent = defaultHeadContent,
  children,
  pageStyles = {}
}) {
  const { isAuthenticated } = useSelector(getUser());

  console.log(pageStyles);

  return (
    <>
      <Helmet>{headContent}</Helmet>
      <Header />
      <div style={{ ...styles.container, ...pageStyles}}>
        <main style={styles.main}>
          {isProtected && !isAuthenticated ? <div>Unauthorized</div> : children}
        </main>
        <Footer />
      </div>
    </>
  );
}
