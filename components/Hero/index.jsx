import { useState, useEffect } from "react"
import styles from "./styles.module.scss"
import Image from "next/image"
import me from "./me.png"

export default function Hero() {
    const [tint, setTint] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setTint(t => ++t % 360)
        }, 150)
    }, [])

    return <div className={styles.hero} >
        <div className="scale-in-center">
            <div className={styles.imgWrapper}>
                <div style={{ '--tint': tint }}>
                    <Image src={me} alt="Luis Antonio" />
                </div>
            </div>
        </div>
        <div className="slide-in-blurred-bottom">
            <h1> Hello. < br /> My name is Luis Antonio.</h1 >
            <h4>Full Stack Developer</h4>
        </div>
    </div >
}