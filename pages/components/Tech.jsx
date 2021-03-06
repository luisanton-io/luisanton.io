import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import styles from "../../styles/index.module.scss"

const tech = [
    ["HTML", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"],
    ["CSS", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
    ["Javascript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
    ["Bootstrap", "https://getbootstrap.com/"],
    ["React", "https://reactjs.org/"],
    ["Redux", "https://redux.js.org/"],
    ["Material UI", "https://mui.com"],
    ["Angular", "https://angular.io/"],
    ["Typescript", "https://www.typescriptlang.org/"],
    ["Node JS", "https://nodejs.org/"],
    ["Mongo DB", "https://www.mongodb.com/"],
    ["PostgreSQL", "https://www.postgresql.org/"],
]

export default function Tech() {

    const controls = useAnimation()
    const { ref, inView } = useInView()

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
                                placeItems: "center"
                            }}
                            target="_blank"
                        >
                            <img src={`/tech/${name}.png`} alt={name} />
                            <span>{name}</span>
                        </motion.a>
                    ))
                }
            </div>
        </div>
    )
}