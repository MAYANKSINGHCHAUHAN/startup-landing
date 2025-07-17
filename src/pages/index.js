import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Startup Landing Template</title>
        <meta
          name="description"
          content="Professional landing page for startups"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Startup. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
