"use client"

import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import { AnimatePresence } from "framer-motion";
export default function Home(){
    return(
        <AnimatePresence mode="wait">
            <HeroSection key="home" />
            <AboutMe key="about" />
            <Experience/>
        </AnimatePresence>
    )
}