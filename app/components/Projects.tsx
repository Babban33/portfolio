"use client"

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import {motion} from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { siGithub } from 'simple-icons';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const projects = [
    {
      title: "Dental Docs",
      description: "Code documentation for the BIRAC Dental Project.",
      image: "/dental-docs.png?height=200&width=300",
      techStack: ["Docusaurus", "Nextjs", "React", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500",
      githubLink: "https://github.com/babban33/dental-docs",
      liveLink: "https://dental-docs.vercel.app",
    },
    {
      title: "Notewave",
      description: "Full Stack notes app with enhanced privacy and security.",
      image: "/notewave.png?height=200&width=300",
      techStack: ["Nextjs", "Typescript", "React", "Supabase"],
      color: "from-purple-500 to-pink-500",
      githubLink: "https://github.com/babban33/notewave",
      liveLink: "https://notewave-five.vercel.app",
    },
    {
        title: "Notewave",
        description: "Full Stack notes app with enhanced privacy and security.",
        image: "/globe.svg?height=200&width=300",
        techStack: ["Nextjs", "Typescript", "React", "Supabase"],
        color: "from-orange-500 to-yellow-500",
        githubLink: "https://github.com/babban33/note-wave",
        liveLink: "https://blockchain-voting.example.com",
    },
]

export default function Project(){
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="projects" 
            className="py-20 sm:py-32"
        >
            <div className="container mx-auto max-w-screen-xl">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
                >
                    Projects
                </motion.h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
                    {projects.map((project, index) => (
                        <motion.div
                        key={`project-${index}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className={`flex flex-col overflow-hidden h-full group shadow-lg dark:shadow-primary/25 shadow-primary/50`}>
                                <CardHeader className="p-0">
                                    <div className="relative overflow-hidden">
                                        <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button asChild variant="secondary" className="rounded-full">
                                            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                            View Project
                                            </Link>
                                        </Button>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow p-6">
                                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                    <CardDescription className="mb-4">{project.description}</CardDescription>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, techIndex) => (
                                        <Badge key={`tech-${index}-${techIndex}`} variant="secondary" className={`bg-gradient-to-r ${project.color} text-white`}>{tech}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between border-t pt-4">
                                    <Button asChild variant="ghost" size="sm" className="rounded-full">
                                        <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="mr-2 h-4 w-4 text-gradient"
                                            fill='currentColor'
                                        >
                                            <path d={siGithub.path} />
                                        </svg>
                                        GitHub
                                        </Link>
                                    </Button>
                                    <Button asChild variant="ghost" size="sm" className="rounded-full">
                                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live Demo
                                        </Link>
                                    </Button>
                                </CardFooter>
                                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}