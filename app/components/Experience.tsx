"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, X } from "lucide-react"
import { useState } from "react"

const experiences = [
    {
        company: "BETiC GHRCE",
        title: "Junior Research Fellow",
        period: "Dec 2023 - Jun 2024",
        description: "Worked on both Hardware and Software as well as Researched on the project.",
        skills: ['Frontend', 'Design', 'Performance'],
        projects: [
        "Documented Code resulting in better understanding of everything by 50%",
        "Trained 5 AI models achieveing an average accuracy of 90%",
        "Delpoyed models as RestfulAPIs. Crafted a responsive frontend increasing user engagement by 80%"
        ],
    },
    {
        company: "Alhansat Solutions",
        title: "Software Developer Intern",
        period: "Sept 2023 - Oct 2023",
        description: "Crafted a Resume Builder feature for the company's website.",
        skills: ['Frontend', 'Design', 'Performance'],
        projects: [
        "Led a team of 12 developers as well as taught version control and svelte",
        "Made open-spurce contibutions and managed the repository reducing conflicts by 70%",
        "Got Selected as top contributor from a pool of 200 developers"
        ]
    },
    {
        company: "Ineuron AI",
        title: "Software Developer Intern",
        period: "Mar 2023 - Jun 2023",
        description: "Trained and deployed a classification ML model using Python and Docker.",
        skills: ['Frontend', 'Design', 'Performance'],
        projects: [
        "Trained an XGBoost model with 95% accuracy on the test dataset",
        "Deployed the model as an endpoint using Flask and Jinja2Template",
        "Developed a simple frontend using HTML, CSS and Javascript to interact with model"
        ]
    },
]

export default function Experience() {
    const [selectedExp, setSelectedExp] = useState<number | null>(null)
    return (
        <section className="py-16 bg-muted/30" id="optional">
            <div className="container max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((experience, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{experience.company} | {experience.period}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {experience.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary">
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
                <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-card text-card-foreground rounded-lg shadow-lg max-w-4xl w-full">
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
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}