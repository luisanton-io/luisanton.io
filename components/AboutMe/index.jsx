import styles from "./styles.module.scss"
import useInViewAnimation from "../../hooks/useInViewAnimation"
import { motion } from 'framer-motion'
import { isMobile } from 'react-device-detect'

export default function AboutMe() {

    const animationProps = useInViewAnimation(isMobile ? {} : undefined)

    return <div id="about-me" className={styles.aboutMe}>
        <h2>about:me</h2>
        <motion.div {...animationProps}>
            <p>
                Wrote my first lines of code in a cold 2007 autumn evening on a Windows 3.11 terminal.
                I have then started working in the IT industry in 2013.
            </p>
            <p>
                In my latest job I was hired by <a href="https://reasonlabs.com" target="_blank" rel="noreferrer">ReasonLabs</a> as
                a member of the on-site Frontend team in Dubai, where I have been working using
                the latest available frontend technologies and maintaining their Electron client for <a href="https://reasonlabs.com/platform/products/endpoint-protection">RAV Endpoint Protection</a>.
            </p>
            <p>
                Currently, I am freelancing as blockchain developer as well as teaching for the Full Stack Course
                at <a href="https://strive.school" target="_blank" rel="noreferrer">Epicode Global</a>,
                in which I am introducing students to a classic Web2 MERN Stack.
            </p>
            <p>
                I have worked for individuals and organizations in New York and Florida as well
                as worldwide: let’s chat together and I’ll tell you how I can help.
            </p>
        </motion.div>
    </div>
}
