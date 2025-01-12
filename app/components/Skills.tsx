"use client"
import { Button } from "@/components/ui/button";
import {motion} from "framer-motion";
import { Code, Server, Database, Cloud, Brain } from 'lucide-react'
import { useState } from "react";
import { siReact, siNextdotjs, siTailwindcss, siFigma, siJavascript, siTypescript, siHtml5, siCss3, siPython, siNodedotjs, siExpress, siFlask, siFastapi, siStreamlit, siDjango, siMongodb, siSupabase, siAppwrite } from 'simple-icons';

const skillCategories = [
    {
        name: "Frontend",
        icon: Code,
        skills: [
          { name: "React", icon: siReact },
          { name: "Next.js", icon: siNextdotjs },
          { name: "Tailwind CSS", icon: siTailwindcss },
          { name: "Figma", icon: siFigma },
          { name: "JavaScript", icon: siJavascript },
          { name: "TypeScript", icon: siTypescript },
          { name: "HTML", icon: siHtml5 },
          { name: "CSS", icon: siCss3 },
        ],
    },
    { 
        name: "Backend", 
        icon: Server,
        skills: [
            { name: "Python", icon: siPython },
            { name: "Next.js", icon: siNextdotjs },
            { name: "Node.js", icon: siNodedotjs },
            { name: "Express.js", icon: siExpress },
            { name: "Flask", icon: siFlask },
            { name: "FastAPI", icon: siFastapi },
            { name: "Streamlit", icon: siStreamlit },
            { name: "Django", icon: siDjango },
        ], 
    },
    { 
        name: "Databases",
        icon: Database, 
        skills: [
            { name: "Mongodb", icon: siMongodb },
            { name: "Supabase", icon: siSupabase },
            { name: "Appwrite", icon: siAppwrite },
        ],
    },
    { 
        name: "DevOps", 
        icon: Cloud,
        skills: [
            { name: "React", icon: siReact },
            { name: "Next.js", icon: siNextdotjs },
            { name: "Tailwind CSS", icon: siTailwindcss },
            { name: "Figma", icon: siFigma },
            { name: "JavaScript", icon: siJavascript },
            { name: "TypeScript", icon: siTypescript },
            { name: "HTML", icon: siHtml5 },
            { name: "CSS", icon: siCss3 },
        ],
    },
    { 
        name: "AI/ML", 
        icon: Brain,
        skills: [
            { name: "React", icon: siReact },
            { name: "Next.js", icon: siNextdotjs },
            { name: "Tailwind CSS", icon: siTailwindcss },
            { name: "Figma", icon: siFigma },
            { name: "JavaScript", icon: siJavascript },
            { name: "TypeScript", icon: siTypescript },
            { name: "HTML", icon: siHtml5 },
            { name: "CSS", icon: siCss3 },
        ],
    }
]

export default function Skills(){
    const [activeCategory, setActiveCategory] = useState("Frontend");
    return(
        <motion.section 
            className="py-16 sm:py-32 bg-muted/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="skills"
        >
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center items-center md:m-0 mx-2">
                    {skillCategories
                        .find((category) => category.name === activeCategory)
                        ?.skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-start p-6 transition-colors border-2 border-primary rounded-lg text-center"
                        >
                            <div className="mb-4 rounded-lg p-3 text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-8 w-8"
                                fill="currentColor"
                            >
                                <path d={skill.icon.path} />
                            </svg>
                            </div>
                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}