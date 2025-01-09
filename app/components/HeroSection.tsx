"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HomeSection() {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28"
        >
            <div className="absolute inset-0 bg-grid-small-white/[0.2] bg-grid-small-white/[0.2]" />
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-8">
                    <div className="relative z-10 max-w-2xl lg:max-w-none lg:flex-1">
                        <motion.h1 
                        className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        >
                        Hi, I&apos;m Chaitanya
                        </motion.h1>
                        <motion.p 
                        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        >
                        Full Stack Developer | AI Enthusiast | Problem Solver
                        </motion.p>
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
                    <div 
                        className="relative mt-8 lg:mt-0 lg:flex-1 flex justify-center lg:justify-start"
                    >
                        <div className="relative mx-auto w-full max-w-lg lg:max-w-none aspect-square">
                        <Image
                            src="/vercel.svg?height=600&width=600"
                            alt="Your Name"
                            fill
                            className="rounded-2xl bg-gray-50 object-cover dark:bg-gray-800"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}