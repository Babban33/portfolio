import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import {motion} from "framer-motion";
import { siCodingninjas, siGithub, siLeetcode, siWhatsapp } from "simple-icons";

export default function AboutMe() {
    return(
        <motion.section 
            className="bg-muted/50 py-20 sm:py-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="about"
        >
            <div className="container max-w-screen-xl mx-auto">
                <motion.h2 
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                > 
                    About Me
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-8 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                <BookOpen className="mr-2" /> My Story
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">
                                I&apos;m a passionate developer with expertise in building scalable web applications and exploring the frontiers of AI. With a strong foundation in computer science and a knack for problem-solving, I strive to create innovative solutions that make a difference.
                                </p>
                                <p>
                                When I&apos;m not coding, you can find me exploring the world, contributing to open-source projects, writing technical blog posts, or mentoring aspiring developers.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <div className="grid gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Code className="mr-2" /> Coding Profiles
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                <ul className="space-y-2">
                                    {[
                                        {name: "LeetCode", url: "https://leetcode.com/u/ChaitanyaWankhede/", logo: siLeetcode},
                                        {name: "Coding Ninjas", url: "https://www.naukri.com/code360/profile/53ed3b23-6983-4405-a897-fc0c1249eccb", logo: siCodingninjas}
                                    ].map((profile) => (
                                        <li key={profile.name}>
                                            <Link href={profile.url} target="_blank" rel="noreferrer" className="text-foreground hover:underline flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="w-6 h-6 mr-2"
                                                fill="currentColor"
                                            >
                                                <path d={profile.logo.path}/>
                                            </svg>
                                                {profile.name} Profile
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <MessageSquare className="mr-2" /> Social Links
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                <div className="flex justify-around">
                                    <Link href="" target="_blank" rel="noopener noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-foreground hover:text-primary transition-colors"
                                            fill="currentColor"
                                        >
                                            <path d={siWhatsapp.path} />
                                        </svg>
                                    </Link>
                                    <Link href="https://linkedin.com/in/chaitanyasw" target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="w-8 h-8 text-foreground hover:text-primary transition-colors" />
                                    </Link>
                                    <Link href="mailto:chaitanyawankhede705@gmail.com">
                                        <Mail className="w-8 h-8 text-foreground hover:text-primary transition-colors" />
                                    </Link>
                                    <Link href="https://wa.me/919359546005" target="_blank" rel="noopener noreferrer">
                                        <Phone className="w-8 h-8 text-foreground hover:text-primary transition-colors" />
                                    </Link>
                                    <Link href="https://github.com/Babban33" target="_blank" rel="noopener noreferrer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-foreground hover:text-primary transition-colors"
                                            fill="currentColor"
                                        >
                                            <path d={siGithub.path} />
                                        </svg>
                                    </Link>
                                </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}