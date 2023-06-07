import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styles from "./styles.module.scss"
import Image from "next/image"
import icons from "./images"

const tech = [
    ["React", "https://reactjs.org/"],
    ["Bootstrap", "https://getbootstrap.com/"],
    ["SCSS", "https://sass-lang.com/"],
    ["Redux", "https://redux.js.org/"],
    ["Recoil", "https://recoiljs.org/"],
    ["Angular", "https://angular.io/"],
    ["Typescript", "https://www.typescriptlang.org/"],
    ["Node JS", "https://nodejs.org/"],
    ["Mongo DB", "https://www.mongodb.com/"],
    ["PostgreSQL", "https://www.postgresql.org/"],
    ["Solidity", "https://soliditylang.org/"],
    ["Hardhat", "https://hardhat.org/"],
]

export default function Tech() {

    const controls = useAnimation()
    const { ref, inView } = useInView({ triggerOnce: true })

    useEffect(() => {
        controls.start(inView ? 'visible' : 'hidden')
    }, [controls, inView])

    const variants = ({ delay }) => ({
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 1, delay } },
    })

    return (
        <div className={styles.tech}>
            <h2>tech i use</h2>

            <div ref={ref} className={styles.techWrapper} style={inView ? { height: '60vh' } : { height: 0 }}>
                {
                    tech.map(([name, url], i) => (
                        <motion.a
                            key={i}
                            href={url}
                            animate={controls}
                            variants={variants({ delay: i / tech.length })}
                            style={{
                                display: 'grid',
                                placeItems: 'center'
                            }}
                            target="_blank"
                        >
                            <Image src={icons[name]} alt={name} />
                            <span>{name}</span>
                        </motion.a>
                    ))
                }
            </div>
        </div>
    )
}