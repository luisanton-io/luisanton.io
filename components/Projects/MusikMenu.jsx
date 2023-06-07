import { motion } from "framer-motion"
import useInViewAnimation from "../../hooks/useInViewAnimation"
import LottieEq from "./LottieEq"
import styles from "./styles.module.scss"
import musikMenuGif from "./assets/musik-menu.gif"
import Image from "next/image"

function MusikMenuThumbnail() {
    const { inView, ...animationProps } = useInViewAnimation({
        hidden: {
            scale: 0.75,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1 }
        },
    })

    return <motion.div {...animationProps} className={styles.musikMenuThumbnail}>
        {inView && <div className={styles.square}></div>}
        <LottieEq variant="white" speed={0.5} />
    </motion.div>
}

function MusikMenuModalContent() {
    return <>
        <div className={styles.modalContentWrapper}>

            <Image src={musikMenuGif} alt="Musik Menu" />

            <div className={styles.textWrapper}>
                <h1>Musik Menu</h1>
                <ul className={styles.links}>
                    <li><a target="_blank" rel="noreferrer" href="https://musik.menu">Home Page</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://musik.menu/lou-wyss">Lou Wyss</a></li>
                    {/* <li><a target="_blank" rel="noreferrer" href="https://musik.menu/gonzi">Gonzi</a></li> */}
                    {/* <li><a target="_blank" rel="noreferrer" href="https://musik.menu/luca-lee-josh">Luca Lee Josh</a></li> */}
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

                <div className={styles.features}>
                    <h4>An Elegant Link-in-Bio Service</h4>
                    <ul>
                        <li>Provides a visually appealing and user-friendly link-in-bio service.</li>
                        <li>Seamlessly integrates with streaming platforms for effortless music link creation.</li>
                        <li>Enables artists to share their complete catalog with all relevant external platform links using a single link.</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export const MusikMenu = {
    name: "Musik Menu",
    description: "A sleek link-in-bio service for musicians.",
    ModalContent: MusikMenuModalContent,
    Thumbnail: MusikMenuThumbnail
}
