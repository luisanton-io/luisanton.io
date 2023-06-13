import Image from "next/image"
import { useEffect, useState } from "react"
import me from "./me.png"
import styles from "./styles.module.scss"

export default function Hero() {
    const [tint, setTint] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setTint(t => ++t % 360)
        }, 150)
    }, [])

    return <div className={styles.hero}>
        <div className="scale-in-center">
            <div className={styles.imgWrapper}>
                <div style={{ '--tint': tint }}>
                    <Image src={me} alt="Luis Antonio" />
                </div>
            </div>
        </div>
        <div className={styles.headerText}>
            <div className="slide-in-blurred-bottom">
                <h1> Hello. <br /> My name is Luis Antonio.</h1 >
                <h4>Full Stack Developer</h4>
            </div>
            <div className={styles.linksWrapper}>
                <a style={{ animationDelay: '1s' }} rel="noreferrer" target="_blank" href="https://linkedin.com/in/luis-antonio-canettoli">
                    <Image alt="Linked In" src="/linkedin.png" width={84} height={21} />
                    <span>LinkedIn</span>
                </a>
                <a style={{ animationDelay: '1.25s' }} rel="noreferrer" target="_blank" href="https://github.com/luisanton-io">
                    <Image alt="github" src="/github.svg" width={20} height={20} />
                    <span>Github</span>
                    <Image alt="github" src="/github.png" width={75} height={31} />
                </a>
                <a style={{ animationDelay: '1.5s' }} rel="noreferrer" target="_blank" href="https://stackoverflow.com/users/11783958/luis-antonio-canettoli-ordo%c3%b1ez">
                    <Image alt="Stack Overflow" src="/stack-overflow.svg" width={155} height={30} style={{ marginBottom: '0.4em' }} />
                    <span>Stack Overflow</span>
                </a>
            </div>
        </div>
    </div>
}