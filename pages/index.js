import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
const ThankYou = dynamic(() => import("@/sections/ThankYou"))
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Shifra's Portfolio</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta content="Shifra's Portfolio" name="title" />
        <meta content="Shifra Isaacs professional portfolio" name="description" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta content="website" property="og:type" />
        <meta content="Shifra's Portfolio" property="og:title" />

        {/* <!-- Other Meta Tags --> */}
        <meta content="data, data science, data analytics, technical writing, shifra, isaacs, shifra isaacs" name="keywords" />
        <meta content="Shifra Isaacs" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* <!-- Favicon --> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
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
          <Footer />
          <div className="z-40">
            {/* tawk.to Chat System */}
            <ChatSystem />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
