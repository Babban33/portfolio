"use client"

import HeroSection from "./components/HeroSection";
import { AnimatePresence } from "framer-motion";
export default function Home(){
    return(
        <AnimatePresence mode="wait">
            <HeroSection />
        </AnimatePresence>
    )
}