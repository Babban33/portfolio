import {motion} from 'framer-motion';
export default function Project(){
    return (
        <section id="projects" className="py-20 sm:py-32">
            <div className="container mx-auto max-w-screen-xl">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
                >
                    Projects
                </motion.h1>
            </div>
        </section>
    )
}