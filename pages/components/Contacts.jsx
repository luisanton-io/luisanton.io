import { useInView } from 'react-intersection-observer'
import styles from '../../styles/index.module.scss'
import useInViewAnimation from '../hooks/useInViewAnimation'
import Copyright from './Copyright'
import { motion } from 'framer-motion'

export default function Contacts() {

    const variants = i => {
        const k = ~(-i % 2) || 1
        return ({
            hidden: {
                opacity: 0,
                translateX: 20 * -k,
                // translateY: 50
            },
            visible: {
                opacity: 1,
                translateX: 0,
                // translateY: 0,
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

    console.table(animationProps)

    const { ref, inView } = useInView()

    console.table({ inView })

    return <div className={styles.contacts} ref={ref}>
        <h2>contacts</h2>

        <p>Feel free to contact me:</p>
        <div>
            <motion.a {...animationProps.email} href="mailto:hello@luisanton.io" style={{ width: 'calc(155px + 6ch)' }}>hello@luisanton.io</motion.a>
        </div>

        <h4 style={{ marginTop: '2em' }}>You can also find me on:</h4>

        <div>
            <motion.a {...animationProps.linkedin} href="https://linkedin.com/in/luis-antonio-canettoli">
                <img alt="Linked In" src="/linkedin.png" />
            </motion.a>
            <motion.a {...animationProps.github} href="https://github.com/luisanton-io">
                <img alt="github" src="/github.svg" style={{ width: '20px' }} />
                <img alt="github" src="/github.png" style={{ width: '75px' }} />
            </motion.a>
            <motion.a {...animationProps.stackoverflow} href="https://stackoverflow.com/users/11783958/luis-antonio-canettoli-ordo%c3%b1ez">
                <img alt="Stack Overflow" src="/stack-overflow.svg" style={{ width: '155px', marginBottom: '0.4em' }} />
            </motion.a>
        </div>

        <Copyright />
    </div>
}