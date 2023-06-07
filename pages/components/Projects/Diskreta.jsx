import { motion } from "framer-motion"
import useInViewAnimation from "../../hooks/useInViewAnimation"
import styles from "./styles.module.scss"
import Image from "next/image"
import diskretaGif from "./assets/diskreta.gif"

function DiskretaThumbnail() {

    const animationProps = useInViewAnimation({
        hidden: {
            scale: 0.9,
            opacity: 0.3
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 3 }
        },
    })

    return (
        <motion.img
            className={styles.diskretaThumbnail}
            src="/projects/diskreta.png"
            alt="Diskreta"
            {...animationProps}
        />
    )

}

function DiskretaModalContent() {
    return <>
        <div className={styles.modalContentWrapper}>

            <Image src={diskretaGif} alt="Diskreta" />

            <div className={styles.textWrapper}>
                <h1>Diskreta</h1>
                <ul className={styles.links}>
                    <li><a target="_blank" rel="noreferrer" href="https://diskreta.vercel.app">Live Version </a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/luisanton-io/fe-diskreta">Frontend Repo</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/luisanton-io/be-diskreta">Backend Repo</a></li>
                </ul>
                <div className={styles.stack}>
                    <div className={styles.frontend}>
                        <h3>Frontend</h3>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
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
                            <li>Socket.io</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.features}>
                    <h4>Anonymous Chat System</h4>
                    <ul>
                        <li>An open source, anonymous, end-to-end encrypted chat system.</li>
                        <li>Supports real-time text, images, read receipts, and reactions.</li>
                        <li>Ensures privacy and security for seamless communication.</li>
                    </ul>
                    <h4>Same-Device Password Recovery System</h4>
                    <ul>
                        <li>Utilizes <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/q/72047474/11783958">deterministically generated</a> RSA keys, inspired by crypto wallet recovery systems.</li>
                        <li>Lets users recover passwords securely on the same device.</li>
                    </ul>
                    <h4>Enhanced Data Security</h4>
                    <ul>
                        <li>Protects users' data by never leaving their device.</li>
                        <li>Applies military-grade AES-256 encryption for utmost security.</li>
                    </ul>
                    <h4>Minimal Server-Side Functionality</h4>
                    <ul>
                        <li>Messages are encrypted end-to-end, i.e. the server is not able to decipher the contents</li>
                        <li>Handles JWT-based authentication to ensure secure access.</li>
                        <li>Manages message enqueueing, dequeuing, and dispatching.</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default {
    name: "Diskreta",
    description: "An anonymous E2E encrypted chat system.",
    Thumbnail: DiskretaThumbnail,
    ModalContent: DiskretaModalContent
}
