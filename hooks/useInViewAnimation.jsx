import { useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const defaultVariants = {
    hidden: {
        opacity: 0,
        translateY: 50
    },
    visible: {
        opacity: 1,
        translateY: 0,
        transition: { duration: 1 }
    },
}

export default function useInViewAnimation(variants = defaultVariants) {
    const { ref, inView } = useInView({ triggerOnce: true })

    const animate = useAnimation()

    useEffect(() => {
        animate.start(inView ? 'visible' : 'hidden')
    }, [animate, inView])

    return {
        ref,
        animate,
        variants,
        inView
    }
}