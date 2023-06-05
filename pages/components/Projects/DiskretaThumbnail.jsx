import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function DiskretaThumbnail() {
    const animate = useAnimation()
    const { ref, inView } = useInView({ triggerOnce: true })

    useEffect(() => {
        animate.start(inView ? 'visible' : 'hidden')
    }, [animate, inView])

    const variants = {
        hidden: {
            scale: 0.9,
            opacity: 0.3
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 3 }
        },
    }

    return <motion.img {...{ variants, animate, ref }} src="/projects/diskreta.png" alt="Diskreta" />

}