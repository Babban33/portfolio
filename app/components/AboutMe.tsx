import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Code } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";

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
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Code className="mr-2" /> Coding Profiles
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                <ul className="space-y-2">
                                    {[
                                        { name: "LeetCode", url: "https://leetcode.com/yourusername", logo: "https://assets.leetcode.com/static_assets/public/images/LeetCode_logo_rvs.png" },
                                        { name: "Coding Ninjas", url: "https://www.codingninjas.com/codestudio/profile/yourusername", logo: "https://files.codingninjas.in/cn-logo-dark-9824.svg" }
                                    ].map((profile) => (
                                        <li key={profile.name}>
                                            <Link href={profile.url} target="_blank" rel="noreferrer" className="text-foreground hover:underline flex items-center">
                                            <Image src={profile.logo} alt={profile.name} width={24} height={24} className="w-6 h-6 mr-2" />
                                            {profile.name} Profile
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Award className="mr-2" /> Achievements
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-disc list-inside">
                                    <li>Achievement 1</li>
                                    <li>Achievement 2</li>
                                    <li>Achievement 3</li>
                                </ul>
                            </CardContent>
                        </Card>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}