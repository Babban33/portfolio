import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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