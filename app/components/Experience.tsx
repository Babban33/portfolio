import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
      title: "Junior Research Fellow",
      company: "BETiC GHRCE",
      period: "Dec 2023 - Jun 2024",
      description: "Worked on both Hardware and Software as well as Researched on the project.",
      achievements: [
        "Documented Code resulting in better understanding of everything by 50%",
        "Trained 5 AI models achieveing an average accuracy of 90%",
        "Delpoyed models as RestfulAPIs. Crafted a responsive frontend increasing user engagement by 80%"
      ],
      technologies: ['React', 'Node.js', 'FastAPI', 'Pytorch', 'Tensorflow', 'Docker', 'Azure']
    },
    {
      title: "Software Developer Intern",
      company: "Alhansat Solutions",
      period: "Sept 2023 - Oct 2023",
      description: "Crafted a Resume Builder feature for the company's website.",
      achievements: [
        "Led a team of 12 developers as well as taught version control and svelte",
        "Made open-spurce contibutions and managed the repository reducing conflicts by 70%",
        "Got Selected as top contributor from a pool of 200 developers"
      ],
      technologies: ['Svelte', 'Javascript', 'Tailwindcss', 'Git', 'Github', 'Figma']
    },
    {
      title: "Sfotware Developer Intern",
      company: "Ineuron AI",
      period: "Mar 2023 - Jun 2023",
      description: "Trained and deployed a classification ML model using Python and Docker.",
      achievements: [
        "Trained an XGBoost model with 95% accuracy on the test dataset",
        "Deployed the model as an endpoint using Flask and Jinja2Template",
        "Developed a simple frontend using HTML, CSS and Javascript to interact with model"
      ],
      technologies: ['Python', 'Docker', 'Scikit-learn', 'Flask', 'Jinja2', 'HTML', 'CSS', 'Javascript']
    },
]

export default function Experience(){
    return(
        <section className="py-16 bg-muted/30">
            <div className="container max-w-screen-xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Experience</h2>
                <div className="space-y-8 px-4">
                    <div>
                        <Card className="overflow-hidden">
                            <CardHeader className="bg-muted">
                                <CardTitle className="flex items-center text-2xl">
                                <Briefcase className="mr-2" />
                                Junior Research Fellow
                                </CardTitle>
                                <CardDescription>BETiC GHRCE</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="flex items-center text-muted-foreground mb-4">
                                    <Calendar className="mr-2" />
                                    Dec 2023 - Jun 2024
                                </div>
                                <p className="mb-4">Did something</p>
                                <h4 className="font-semibold mb-2 flex items-center">
                                    <Trophy className="mr-2" />
                                    Key Achievements:
                                </h4>
                                <ul className="list-disc pl-5 space-y-1 mb-4">
                                    <li>
                                        Achievement 1
                                    </li>
                                    <li>
                                        Achievement 2
                                    </li>
                                    <li>
                                        Achievement 3
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary"> React</Badge>
                                    <Badge variant="secondary"> FastAPI</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}