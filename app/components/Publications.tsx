import { motion } from "framer-motion";

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
            </div>
        </motion.section>
    )
}