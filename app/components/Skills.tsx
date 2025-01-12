"use client"
import { Button } from "@/components/ui/button";
import {motion} from "framer-motion";
import { Code, Server, Database, Cloud, Brain } from 'lucide-react'
import { useState } from "react";

const skillCategories = [
  { name: "Frontend", icon: Code },
  { name: "Backend", icon: Server },
  { name: "Databases", icon: Database },
  { name: "DevOps", icon: Cloud },
  { name: "AI/ML", icon: Brain }
]

export default function Skills(){
    const [activeCategory, setActiveCategory] = useState("Frontend");
    return(
        <section className="py-16 sm:py-32 bg-muted/50">
            <div className="container max-w-screen-xl mx-auto">
                <motion.h2 
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Skills
                </motion.h2>

                {/* Catergory buttons */}
                <div className="flex flex-wrap justify-center mb-8 gap-4">
                    {skillCategories.map((category) => (
                        <Button
                            key={category.name}
                            variant={activeCategory === category.name ? "default" : "outline"}
                            onClick={() => setActiveCategory(category.name)}
                            className="flex items-center"
                        >
                            <category.icon className="mr-2" size={16} />
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}