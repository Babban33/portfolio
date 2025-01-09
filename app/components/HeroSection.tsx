import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {motion} from "framer-motion";

export default function HeroSection() {
    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
        >
            <div className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    Hi, I&apos;m Chaitanya
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600 dark:text-gray-300">
                    Full Stack Developer | AI Enthusiast | Problem Solver
                </p>
                <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-x-6">
                    <motion.div 
                        className="mt-6 sm:mt-8 md:mt-10 flex flex-row items-center gap-4 sm:gap-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        >
                        <Button asChild size="lg" className="w-full sm:w-auto rounded-full animate-pulse">
                            <Link href="#contact">
                                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="w-full sm:w-auto rounded-full">
                            <Link href="#about">Learn More</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}