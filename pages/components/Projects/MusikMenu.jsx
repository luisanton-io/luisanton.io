import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styles from "../../../styles/index.module.scss"
import LottieEq from "../LottieEq"

function MusikMenuThumbnail() {
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

function MusikMenuModalContent() {
    return <>
        <div className={styles.modalMediaWrapper}>
            <img src="/projects/diskreta.png" alt="Diskreta" />
        </div>
        <ul className={styles.links}>
            <li><a href="https://musik.menu">Live Product</a></li>
        </ul>
        <div style={{ display: 'flex' }}>
            <ul className={styles.features}>
                <li>elegant link-in-bio service</li>
                <li>seamlessly integrates with streaming platforms to help musicians create new music links with ease</li>
                <li>lets artists share with a single link their full catalog with all relevant external platform links</li>
                <li>fully typed</li>
            </ul>
            <div className={styles.stack}>
                <div className={styles.frontend}>
                    <h3>Frontend</h3>
                    <ul>
                        <li>React</li>
                        <li>Material UI</li>
                        <li>SCSS</li>
                        <li>Recoil</li>
                    </ul>
                </div>
                <div className={styles.backend}>
                    <h3>Backend</h3>
                    <ul>
                        <li>Node JS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default {
    name: "Musik Menu",
    description: "A sleek link-in-bio service for musicians.",
    ModalContent: MusikMenuModalContent,
    Thumbnail: MusikMenuThumbnail
}