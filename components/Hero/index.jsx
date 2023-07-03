import cn from "classnames"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import GithubIcon from "./icons/GithubIcon"
import LinkedinIcon from "./icons/LinkedinIcon"
import StackOverflowIcon from "./icons/StackOverflowIcon.jsx"
import me from "./me.png"
import styles from "./styles.module.scss"

export default function Hero({ pageReady, setPageReady, mainRef }) {
    const [tint, setTint] = useState(0)
    const [blur, setBlur] = useState(0)
    // const [heroRef, setHeroRef] = useState()
    const heroRef = useRef()

    useEffect(() => {
        setInterval(() => {
            setTint(t => ++t % 360)
        }, 150)
    }, [])

    useEffect(() => {
        mainRef.current.addEventListener('scroll', () => {
            const [{ clientHeight }, { scrollTop }] = [heroRef.current, mainRef.current]
            const threshold = 0.8 * clientHeight
            const blur = scrollTop >= threshold ? 1 : scrollTop / threshold
            setBlur(8 * blur)
        })
    }, [])

    return <div id="intro" ref={heroRef} className={styles.hero} style={{ filter: `blur(${blur}px)` }}>
        <div className={cn(pageReady && "scale-in-center")}>
            <div className={styles.imgWrapper}>
                <div style={{ '--tint': tint }}>
                    <Image src={me} alt="Luis Antonio" priority onLoadingComplete={setPageReady} />
                </div>
            </div>
        </div>
        <div className={styles.headerText}>
            <div className={cn(pageReady && "slide-in-blurred-bottom")}>
                <h1> Hello. <br /> My name is Luis Antonio.</h1 >
                <h4>Full Stack Developer</h4>
            </div>
            <div className={cn(pageReady && styles.linksWrapper)}>
                <a style={{ animationDelay: '1s' }} rel="noreferrer" target="_blank" href="https://linkedin.com/in/luis-antonio-canettoli">
                    <LinkedinIcon />
                    <span>LinkedIn</span>
                </a>
                <a style={{ animationDelay: '1.25s' }} rel="noreferrer" target="_blank" href="https://github.com/luisanton-io">
                    <GithubIcon />
                    <span>Github</span>
                </a>
                <a style={{ animationDelay: '1.5s' }} rel="noreferrer" target="_blank" href="https://stackoverflow.com/users/11783958/luis-antonio-canettoli-ordo%c3%b1ez">
                    <StackOverflowIcon />
                    <span>Stack Overflow</span>
                </a>
            </div>
        </div>
    </div>
}