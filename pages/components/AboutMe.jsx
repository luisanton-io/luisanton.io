import styles from "../../styles/index.module.scss"
import useInViewAnimation from "../hooks/useInViewAnimation"
import { motion } from 'framer-motion'

export default function AboutMe() {

    const animationProps = useInViewAnimation()

    return <div className={styles.aboutMe}>
        <h2>about:me</h2>
        <motion.div {...animationProps}>
            <p>Wrote my first lines of code in a cold 2007 autumn evening on a Windows 3.11 terminal. I’ve then been working in and out the IT since 2013.</p>
            <p>I like to come up with creative solutions for my clients’ needs in many fields: despite my focus being on web development,
                my experiences range vastly from iOS development to system administration, from UX design to video/audio content production.
            </p>
            <p>About my most recent experiences, until 2022 I have tutored and taught in the Full Stack Course at <a href="https://strive.school">Epicode Global</a>, in which we introduced the MERN Stack to our students.
            </p>
            <p>Between 2022 and 2023, I was hired by <a href="https://reasonlabs.com">ReasonLabs</a> in the on-site Frontend team in Dubai, UAE.
            </p>
            <p>I have worked for people and companies in New York and Florida as well as worldwide: let’s chat together and I’ll tell you how I can help.</p>
        </motion.div>
    </div>
}