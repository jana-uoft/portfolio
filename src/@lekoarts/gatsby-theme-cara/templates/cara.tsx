import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero"
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects"
import About from "@lekoarts/gatsby-theme-cara/src/components/about"
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact"

const Cara = () => {
  const isMobile = window ? window.innerWidth <= 450 : false 
  return (
    <Layout>
      <Parallax pages={isMobile ? 7.2 : 5}>
        <Hero offset={0} />
        <Projects offset={isMobile ? 2.5 : 1} />
        <About offset={isMobile ? 5.8 : 3} />
        <Contact offset={isMobile ? 6.2 : 4} />
      </Parallax>
    </Layout>
  )
}

export default Cara