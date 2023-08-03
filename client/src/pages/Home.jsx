import Page from "../components/Page";




const headContent = (
  <>
    <title>Affirmations</title>
    <meta name="description" content="This is the home page of Affirmations, a habit Tracking Application." />
  </>
);


export default function Home() {
  return (
    <Page isProtected={false} headContent={headContent} pageStyles={{
      backgroundImage: `url(/sign2.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div>Home</div>

    </Page>
  );
}



