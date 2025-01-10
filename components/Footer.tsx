import { Github, Linkedin } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full border-t">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                    <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                        <p className="text-center text-sm leading-loose md:text-left">
                            Built with 💖 by Chaianya Wankhede. The source code is available on{" "}
                            <Link
                                href="https://github.com/Babban33/portfolio"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium underline underline-offset-4"
                            >
                                GitHub
                            </Link>
                            .
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="https://github.com/Babban33" target="_blank" rel="noreferrer">
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href="https://linkedin.com/in/chaitanyasw/" target="_blank" rel="noreferrer">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}