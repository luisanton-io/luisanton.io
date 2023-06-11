import styles from "./styles.module.scss"
import useInViewAnimation from "../../hooks/useInViewAnimation"
import { motion } from 'framer-motion'
import { isMobile } from 'react-device-detect'

export default function AboutMe() {

    const animationProps = useInViewAnimation(isMobile ? {} : undefined)

    return <div className={styles.aboutMe}>
        <h2>about:me</h2>
        <motion.div {...animationProps}>
            <p>Wrote my first lines of code in a cold 2007 autumn evening on a Windows 3.11 terminal. I have then started working in the IT industry in 2013.</p>
            <p>
                I like to come up with creative solutions for my clients’ needs in many fields: although my primary focus is web development,
                my experiences range widely from iOS development to system administration, from UX design to video/audio content production.
            </p>
            <p>
                Recently, I have been immersing myself in Solidity and exploring the exciting possibilities of Web3 technologies.
            </p>
            <p>Regarding my most latest experiences, up until 2022 I have tutored and taught in the Full Stack Course at <a href="https://strive.school" target="_blank" rel="noreferrer">Epicode Global</a>, during which we introduced students to the MERN Stack.
            </p>
            <p>Between 2022 and 2023, I was hired by <a href="https://reasonlabs.com" target="_blank" rel="noreferrer">ReasonLabs</a> as a member of the on-site Frontend team in Dubai, UAE.
            </p>
            <p>I have worked for individuals and organizations in New York and Florida as well as worldwide: let’s chat together and I’ll tell you how I can help.</p>
        </motion.div>
    </div>
}