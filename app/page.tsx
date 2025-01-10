"use client"

import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import { AnimatePresence } from "framer-motion";
import Project from "./components/Projects";
export default function Home(){
    return(
        <AnimatePresence mode="wait">
            <HeroSection key="home" />
            <AboutMe key="about" />
            <Experience key="experience"/>
            <Project key="projects"/>
        </AnimatePresence>
    )
}