import { useInView } from 'react-intersection-observer'
import styles from './styles.module.scss'
import useInViewAnimation from '../../hooks/useInViewAnimation'
import Copyright from '../Copyright'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Contacts() {

    const variants = i => {
        const k = ~(-i % 2) || 1
        return ({
            hidden: {
                opacity: 0,
                translateX: 20 * -k,
            },
            visible: {
                opacity: 1,
                translateX: 0,
                transition: { duration: 1, delay: i / 4 }
            },
        })
    }

    const animationProps = {
        email: useInViewAnimation(),
        linkedin: useInViewAnimation(variants(2)),
        github: useInViewAnimation(variants(3)),
        stackoverflow: useInViewAnimation(variants(4)),
    }

    return <div className={styles.contacts}>
        <h2>contacts</h2>

        <p>Feel free to contact me:</p>
        <div>
            <motion.a target="_blank" {...animationProps.email} href="mailto:hello@luisanton.io" style={{ width: 'calc(155px + 6ch)' }}>hello@luisanton.io</motion.a>
        </div>

        <h4 style={{ marginTop: '2em' }}>You can also find me on:</h4>

        <div>
            <motion.a target="_blank" {...animationProps.linkedin} href="https://linkedin.com/in/luis-antonio-canettoli">
                <Image alt="Linked In" src="/linkedin.png" width={84} height={21} />
            </motion.a>
            <motion.a target="_blank" {...animationProps.github} href="https://github.com/luisanton-io">
                {/* <img alt="github" src="/github.svg" style={{ width: '20px' }} /> */}
                <Image alt="github" src="/github.svg" width={20} height={20} />
                <Image alt="github" src="/github.png" width={75} height={31} />
            </motion.a>
            <motion.a target="_blank" {...animationProps.stackoverflow} href="https://stackoverflow.com/users/11783958/luis-antonio-canettoli-ordo%c3%b1ez">
                <Image alt="Stack Overflow" src="/stack-overflow.svg" width={155} height={30} style={{ marginBottom: '0.4em' }} />
            </motion.a>
        </div>

        <Copyright />
    </div>
}