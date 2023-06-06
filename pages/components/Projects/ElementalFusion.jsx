import { motion } from "framer-motion"
import styles from "./styles.module.scss"

import useInViewAnimation from "../../hooks/useInViewAnimation"

function ElementalFusionThumbnail() {
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
            {...animationProps}
            className={styles.elementalFusionThumbnail}
            src="/projects/elemental-phoenix.webp"
            alt="Elemental Fusion"
        />
    )

}

function ElementalFusionModalContent() {
    return <>
        <div className={styles.modalMediaWrapper}>
            <img src="/projects/diskreta.png" alt="Diskreta" />
        </div>
        <ul className={styles.links}>
            <li><a href="https://diskreta.vercel.app">Live Version </a></li>
            <li><a href="https://github.com/luisanton-io/fe-diskreta">Repository</a></li>
        </ul>
        <div style={{ display: 'flex' }}>
            <ul className={styles.features}>
                <li>deployed on Mumbai</li>
                <li>implemented ERC-1155 tokens: Fire Sprites, Aqua Delfin and Earth Golem can be minted once per minute</li>
                <li>Steam Serpent, Mud Titan, Lava Fiend and Elemental Phoenix can be minted without cooldown timer, but only burning other tokens</li>
                <li>mutation tested using Vertigo + SuMo</li>
                <li>contract is verified on PolygonScan</li>
            </ul>
            <div className={styles.stack}>
                <div className={styles.frontend}>
                    <h3>Frontend</h3>
                    <ul>
                        <li>React + NextJS</li>
                        <li>TailwindCSS</li>
                        <li>WalletConnect</li>
                    </ul>
                </div>
                <div className={styles.backend}>
                    <h3>Blockchain</h3>
                    <ul>
                        <li>Solidity 0.8+</li>
                        <li>Hardhat</li>
                        <li>Typescript</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default {
    name: "Elemental Fusion",
    description: "A simple WalletConnect demo with AI generated assets.",
    ModalContent: ElementalFusionModalContent,
    Thumbnail: ElementalFusionThumbnail
}