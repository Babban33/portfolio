"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send, } from 'lucide-react'
import {motion} from 'framer-motion'

export default function ContactSection() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ name, email, message })
        setName("")
        setEmail("")
        setMessage("")
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="contact" 
            className="py-20 sm:py-32 bg-muted/50"
        >
            <div className="container max-w-screen-xl mx-auto">
                <motion.h2 
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Contact Me
                </motion.h2>
                <div className="grid gap-8 md:grid-cols-2 px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card className={`shadow-lg dark:shadow-primary/25 shadow-primary/50`}>
                            <CardHeader>
                                <CardTitle>Get in Touch</CardTitle>
                                <CardDescription>Fill out the form and I&apos;ll get back to you as soon as possible.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                <Input
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    id="name"
                                    autoComplete="name"
                                />
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    id="email"
                                    autoComplete="email"
                                />
                                <Textarea
                                    placeholder="Your Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="min-h-[100px]"
                                    id="messagde"
                                />
                                <Button type="submit" className="w-full rounded-full">
                                    <Send className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card className={`shadow-lg dark:shadow-primary/25 shadow-primary/50`}>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4" />
                                    <a href="mailto:chaitanyawankhede705@gmail.com" className="hover:underline">chaitanyawankhede705@gmail.com</a>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="mr-2 h-4 w-4" />
                                    <a href="tel:+919359546005" className="hover:underline">+91 9359546005</a>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    <span>Bhandara, Maharashta, India</span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}