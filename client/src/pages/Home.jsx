import Page from "../components/Page";

const headContent = (
  <>
    <title>Affirmations</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Home() {
  return (
    <Page isProtected={false} headContent={headContent}>
      <div>Home</div>
    </Page>
  );
}
