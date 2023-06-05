import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styles from "../../../styles/index.module.scss"
import LottieEq from "../LottieEq"

export default function MusikMenuThumbnail() {
    const animate = useAnimation()
    const { ref, inView } = useInView({ triggerOnce: true })

    useEffect(() => {
        animate.start(inView ? 'visible' : 'hidden')
    }, [animate, inView])

    const variants = {
        hidden: {
            scale: 0.75,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1 }
        },
    }

    return <motion.div {...{ variants, ref, animate }} className={styles.musikMenuThumbnail}>
        {inView && <div className={styles.square}></div>}
        <LottieEq variant="white" speed={0.5} />
    </motion.div>
}