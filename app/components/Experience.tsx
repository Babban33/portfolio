"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { ChevronRight, X } from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"

const experiences = [
    {
        company: "BETiC GHRCE",
        title: "Junior Research Fellow",
        period: "Dec 2023 - Jun 2024",
        description: "Worked on both Hardware and Software as well as Researched on the project.",
        skills: ['Full Stack', 'AI/ML', 'IoT'],
        projects: [
        "Documented Code resulting in better understanding of everything by 50%",
        "Trained 5 AI models achieveing an average accuracy of 90%",
        "Delpoyed models as RestfulAPIs. Crafted a responsive frontend increasing user engagement by 80%"
        ],
        technologies: ['Python', 'Tensorflow', 'FastAPI', 'React', 'Pytorch', 'Docker'],
        colorhead : "from-blue-500 to-cyan-500",
        badge: "bg-blue-500"
    },
    {
        company: "Alhansat Solutions",
        title: "Software Developer Intern",
        period: "Sept 2023 - Oct 2023",
        description: "Crafted a Resume Builder feature for the company's website.",
        skills: ['Frontend', 'Design', 'Leadership'],
        projects: [
        "Led a team of 12 developers as well as taught version control and svelte",
        "Made open-spurce contibutions and managed the repository reducing conflicts by 70%",
        "Got Selected as top contributor from a pool of 200 developers"
        ],
        technologies: ['Svelte', 'Javascript', 'Tailwind CSS', 'Figma', 'Git', 'Github'],
        colorhead: "from-purple-500 to-pink-500",
        badge: "bg-purple-500"
    },
    {
        company: "Ineuron AI",
        title: "Software Developer Intern",
        period: "Mar 2023 - Jun 2023",
        description: "Trained and deployed a classification ML model using Python and Docker.",
        skills: ['AI/ML', 'Frontend', 'DevOps'],
        projects: [
        "Trained an XGBoost model with 95% accuracy on the test dataset",
        "Deployed the model as an endpoint using Flask and Jinja2Template",
        "Developed a simple frontend using HTML, CSS and Javascript to interact with model"
        ],
        technologies: ['Python', 'Scikit-learn', 'FastAPI', 'HTML', 'CSS', 'Docker', 'Azure'],
        colorhead: "from-orange-500 to-yellow-500",
        badge: "bg-orange-500"
    },
]

export default function Experience() {
    const [selectedExp, setSelectedExp] = useState<number | null>(null)
    const {theme} = useTheme();
    return (
        <section className="py-16 bg-muted/30" id="experience">
            <div className="container max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {experiences.map((experience, index) => (
                        <Card key={index} className={`overflow-hidden hover:shadow-lg ${theme === 'dark' ? 'hover:shadow-primary/25' : 'hover:shadow-primary/50'}`}>
                            <div className={`h-2 bg-gradient-to-r ${experience.colorhead}`} />
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{experience.company} | {experience.period}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {experience.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary" className={`bg-gradient-to-r ${experience.colorhead} rounded-full text-primary-foreground`}>
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-between"
                                    onClick={() => setSelectedExp(index)}
                                >
                                    <span>View Details</span>
                                    <ChevronRight
                                        size={20}
                                        className="transform transition-transform"
                                    />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {selectedExp !== null && (
                <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center max-h-screen justify-center p-4">
                    <div className="bg-card text-card-foreground rounded-lg shadow-lg max-w-4xl max-h-screen w-full">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-semibold">{experiences[selectedExp].title}</h3>
                                    <p className="text-sm text-muted-foreground">{experiences[selectedExp].company} | {experiences[selectedExp].period}</p>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setSelectedExp(null)}>
                                    <X size={24} />
                                </Button>
                            </div>
                            <ScrollArea className="max-h-[70vh] overflow-auto">
                                <p className="mb-6">{experiences[selectedExp].description}</p>
                                <h4 className="font-semibold mb-2 text-lg">Details:</h4>
                                <ul className="list-disc pl-5 space-y-2">
                                    {experiences[selectedExp].projects.map((project, index) => (
                                        <li key={index}>{project}</li>
                                    ))}
                                </ul>
                                <div className="grid grid-cols-2 gap-4 my-4">
                                    <div>
                                        <h6 className="font-semibold mb-2">Skills Used:</h6>
                                        <div className="flex flex-wrap gap-2">
                                        {experiences[selectedExp].skills.map((skill) =>(
                                            <Badge key={skill} variant="secondary" className="rounded-full">
                                                {skill}
                                            </Badge>
                                        ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="font-semibold mb-2">Technologies Used:</h6>
                                        <div className="flex flex-wrap gap-2">
                                        {experiences[selectedExp].technologies.map((tech) =>(
                                            <Badge key={tech} className="rounded-full">
                                                {tech}
                                            </Badge>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}