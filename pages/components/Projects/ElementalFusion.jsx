import { motion } from "framer-motion"
import styles from "./styles.module.scss"

import useInViewAnimation from "../../hooks/useInViewAnimation"
import elementalFusionGif from "./assets/elemental-fusion.gif"
import Image from "next/image"

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
        <div className={styles.modalContentWrapper}>

            <Image src={elementalFusionGif} alt="Diskreta" />

            <div className={styles.textWrapper}>
                <h1>Elemental Fusion</h1>
                <ul className={styles.links}>
                    <li><a target="_blank" rel="noreferrer" href="https://elemental-fusion.vercel.app">Live Version </a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/luisanton-io/elemental-fusion">Repo</a></li>
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
                <div className={styles.features}>
                    <h4>ERC-1155 Token Implementation</h4>
                    <ul>
                        <li>Implemented ERC-1155 tokens, including Fire Sprites, Aqua Delfin, and Earth Golem, with a minting rate of once per minute.</li>
                        <li>Created advanced token mechanics for Steam Serpent, Mud Titan, Lava Fiend, and Elemental Phoenix, allowing minting without cooldown timers by burning other tokens.</li>
                    </ul>
                    <h4>Mutation Testing and Verification</h4>
                    <ul>
                        <li>Thoroughly subjected the smart contract to mutation testing using Vertigo + SuMo, ensuring robustness and reliability.</li>
                        <li>Security vulnerabilities checked via Slither</li>
                        <li>Verified contract authenticity and transparency by having it <a target="_blank" rel="noreferrer" href="https://mumbai.polygonscan.com/address/0xA3f96e91fef535f2d2b83891658e99eBe7A1DBC7">verified on PolygonScan</a>.</li>
                    </ul>
                    <h4>Mumbai</h4>
                    <ul>
                        <li>Successfully deployed on the Mumbai test network.</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

function __ElementalFusionModalContent() {
    return <>
        <div className={styles.modalMediaWrapper}>
            <img src="/projects/diskreta.png" alt="Diskreta" />
        </div>
        <ul className={styles.links}>
            <li><a href="https://diskreta.vercel.app">Live Version </a></li>
            <li><a href="https://github.com/luisanton-io/fe-diskreta">Repo</a></li>
        </ul>
        <div style={{ display: 'flex' }}>
            <ul className={styles.features}>
                <li>deployed on Mumbai</li>
                <li>implemented ERC-1155 tokens: Fire Sprites, Aqua Delfin and Earth Golem can be minted once per minute</li>
                <li>Steam Serpent, Mud Titan, Lava Fiend and Elemental Phoenix can be minted without cooldown timer, but only burning other tokens</li>
                <li>mutation tested using Vertigo + SuMo</li>
                <li>contract is verified on PolygonScan</li>
            </ul>


        </div>
    </>
}

export default {
    name: "Elemental Fusion",
    description: "A simple WalletConnect demo with AI generated assets.",
    ModalContent: ElementalFusionModalContent,
    Thumbnail: ElementalFusionThumbnail
}