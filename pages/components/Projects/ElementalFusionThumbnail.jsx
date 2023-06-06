import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styles from "../../../styles/index.module.scss"

export default function ElementalFusionThumbnail() {
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

    return <motion.img className={styles.elementalFusionThumbnail} {...{ variants, animate, ref }} src="/projects/elemental-phoenix.webp" alt="Elemental Fusion" />

}