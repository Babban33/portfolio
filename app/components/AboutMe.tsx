import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function AboutMe() {
    return(
        <section className="bg-muted/50 py-20 sm:py-32">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"> About Me</h2>
                <div className="grid md:grid-cols-2 gap-8 px-4">
                    <div>
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
                                When I&apos;m not coding, you can find me contributing to open-source projects, writing technical blog posts, or mentoring aspiring developers.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}