import styles from '../../styles/index.module.scss'
import { motion } from 'framer-motion'
import useInViewAnimation from '../hooks/useInViewAnimation'
export default function Copyright() {
    const animationProps = useInViewAnimation({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    })

    return <motion.div className={styles.footer} {...animationProps}>
        Copyright © {(new Date()).getFullYear()} luisanton.io - All rights reserved
    </motion.div>
}