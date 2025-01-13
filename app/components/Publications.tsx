"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink } from 'lucide-react'
import { useTheme } from "next-themes"

const publications = [
    {
        title: "Smart Web-based Application for Dental Disease Detection using AI",
        journal: "Patent",
        date: "January 2024",
    },
    {
        title: "Convex Hull Algorithm based Virtual Mouse",
        journal: "Grenze International Journal of Engineering and Technology",
        date: "January 2024",
    },
    {
        title: "An IoT-Enabled Smart Gardening System as a Novel Approach to Environmental Education",
        journal: "IEEE RESEM",
        date: "May, 2023",
    },
]

export default function Publications() {
    const { theme } = useTheme()

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            id="publications"
            className="py-16 bg-muted/30"
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Publications
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {publications.map((pub, index) => (
                        <Card
                            key={index}
                            className={`hover:shadow-lg transition-shadow duration-300 max-w-[30rem] ${
                                theme === "dark" ? "hover:shadow-primary/25" : "hover:shadow-primary/50"
                            }`}
                        >
                        <CardHeader>
                            <CardTitle className="text-xl">{pub.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">
                            {pub.journal} • {pub.date}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm mb-4">Description single line</p>
                            <Button asChild variant="outline" className="w-full">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                            </Button>
                        </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}