"use client"

import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import { AnimatePresence } from "framer-motion";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import ContactSection from "./components/Contact";
export default function Home(){
    return(
        <AnimatePresence mode="wait">
            <HeroSection key="home" />
            <AboutMe key="about" />
            <Experience key="experience"/>
            <Project key="projects"/>
            <Skills key="skills"/>
            <Publications key="publications"/>
            <ContactSection key="contsct"/>
        </AnimatePresence>
    )
}