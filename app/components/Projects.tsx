import {motion} from 'framer-motion';

const projects = [
    {
      title: "Dental Docs",
      description: "Code documentation for the BIRAC Dental Project.",
      image: "/globe.svg?height=200&width=300",
      techStack: ["Docusaurus", "Nextjs", "React", "Tailwind CSS"],
      githubLink: "https://github.com/babban33/dental-docs",
      liveLink: "https://ai-task-manager.example.com",
    },
    {
      title: "Notewave",
      description: "A simple notes app with enhanced privacy and security.",
      image: "/globe.svg?height=200&width=300",
      techStack: ["Nextjs", "Typescript", "React", "Supabase"],
      githubLink: "https://github.com/babban33/note-wave",
      liveLink: "https://blockchain-voting.example.com",
    },
]

export default function Project(){
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            id="projects" 
            className="py-20 sm:py-32"
        >
            <div className="container mx-auto max-w-screen-xl">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
                >
                    Projects
                </motion.h2>
            </div>
        </motion.section>
    )
}