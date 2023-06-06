import { useAnimation, motion } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styles from "../../../styles/index.module.scss"
import useInViewAnimation from "../../hooks/useInViewAnimation"

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
        <div className={styles.modalMediaWrapper}>
            <img src="/projects/diskreta.png" alt="Diskreta" />
        </div>
        <ul className={styles.links}>
            <li><a href="https://diskreta.vercel.app">Live Version </a></li>
            <li><a href="https://github.com/luisanton-io/fe-diskreta">Frontend Repo</a></li>
            <li><a href="https://github.com/luisanton-io/be-diskreta">Backend Repo</a></li>
        </ul>
        <div style={{ display: 'flex' }}>
            <ul className={styles.features}>
                <li>open source, anonymous, end-to-end encrypted chat system</li>
                <li>supports real-time text, images, read receipts, reactions</li>
                <li>same-device password recovery system, based on <a href="https://stackoverflow.com/q/72047474/11783958">deterministically generated RSA keys</a>, inspired by crypto wallets recovery systems</li>
                <li>users' data never leaves their device and gets military grade encrypted with AES-256</li>
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
        </div>
    </>
}

export default {
    name: "Diskreta",
    description: "An anonymous E2E encrypted chat system.",
    Thumbnail: DiskretaThumbnail,
    ModalContent: DiskretaModalContent
}
