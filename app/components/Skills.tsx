import {motion} from "framer-motion";

export default function Skills(){
    return(
        <section className="py-16 sm:py-32 bg-muted/50">
            <div className="container max-w-screen-xl mx-auto">
                <motion.h2 
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Skills
                </motion.h2>
            </div>
        </section>
    )
}