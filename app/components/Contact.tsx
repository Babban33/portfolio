"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, } from 'lucide-react'
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
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                    Contact Me
                </h2>
                <div className="grid gap-8 md:grid-cols-2 px-4">
                    <div>
                        <Card>
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
                                />
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Textarea
                                    placeholder="Your Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="min-h-[100px]"
                                />
                                <Button type="submit" className="w-full rounded-full">
                                    <Send className="mr-2 h-4 w-4" /> Send Message
                                </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}