import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const publication = [
    {
        title: "Convex Hull Algorithm based Virtual Mouse",
        journal: "Grenze International Journal of Engineering and Technology",
        date: "January 2024",
    },
    {
        title: "An IoT-Enabled Smart Gardening System as a Novel Approach to Environmental Education",
        journal: "IEEE RESEM",
        date: "May, 2023",
    },
]

export default function Publications(){
    return(
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            id="publications" 
            className="py-16 bg-muted/30"
        >
            <div className="container max-w-xl mx-auto">
                <motion.h2 
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Publications
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-6">
                    <Card className="w-full max-w-md">
                        <CardHeader>
                            <CardTitle className="text-xl">Title</CardTitle>
                            <p className="text-sm text-muted-foreground">Journal • Date</p>
                        </CardHeader>
                        <CardContent>
                        <p className="text-sm mb-4">Description single line</p>
                        <Button asChild variant="outline" className="w-full">
                            <a target="_blank" rel="noopener noreferrer">
                            Read Paper <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </motion.section>
    )
}