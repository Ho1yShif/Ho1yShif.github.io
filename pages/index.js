import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@/layout/footer/Footer"), { ssr: false });
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"), { ssr: false });
const Projects = dynamic(() => import("@/sections/Projects"), { ssr: false });
const ThankYou = dynamic(() => import("@/sections/ThankYou"), { ssr: false });

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Shifra's Portfolio</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta content="Shifra's Portfolio" name="title" />
        <meta content="Shifra Isaacs – Explore the portfolio of Shifra Isaacs, an experienced data scientist, technical writer, and support engineer on a mission to make technology tools and career skills more accessible through education" name="description" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta content="website" property="og:type" />
        <meta content="Shifra's Portfolio" property="og:title" />

        {/* <!-- Other Meta Tags --> */}
        <meta content="data, data science, data analytics, technical writing, education, support, shifra, isaacs, shifra isaacs" name="keywords" />
        <meta content="Shifra Isaacs" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* <!-- Favicon --> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>

      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* Skills  */}
          <Skills />
          {/* Thank You Section */}
          <ThankYou />
          {/* Footer */}
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
