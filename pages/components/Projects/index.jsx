import { motion } from "framer-motion"
import { useRef, useState } from "react"
import useInViewAnimation from "../../hooks/useInViewAnimation"
import Diskreta from "./Diskreta"
import ElementalFusion from "./ElementalFusion"
import MusikMenu from "./MusikMenu"
import RecoilNexus from "./RecoilNexus"
import styles from "./styles.module.scss"

function Project({ name, description, Thumbnail, openModal, i }) {

    const k = ~(-i % 2) || 1

    const animationProps = useInViewAnimation({
        hidden: {
            translateX: 50 * -k,
            opacity: 0
        },
        visible: {
            translateX: 0,
            opacity: 1,
            transition: { duration: 1, delay: i / 4 }
        },
    })

    return (
        <div className={styles.project}>
            <div className={styles.imgWrapper}>
                <Thumbnail />
            </div>
            <motion.div className={styles.caption} {...animationProps}>
                <h3>{name}</h3>
                <p>{description} <a style={{ display: 'block' }} onClick={openModal}>Read more.</a></p>
            </motion.div>
        </div>
    )
}

export default function Projects({ recoilNexusDownloads }) {

    console.table({ recoilNexusDownloads })

    const [ModalContent, setModalContent] = useState(() => () => null)
    const [closing, setClosing] = useState(false)
    const dialogRef = useRef()

    const openModal = ModalContent => () => {
        setModalContent(() => ModalContent)
        dialogRef.current?.showModal()
    }

    const handleAnimationEnd = () => {
        if (closing) {
            dialogRef.current?.close()
            setClosing(false)
            setModalContent(() => () => null)
        }
    }

    return <>
        <div className={styles.projects}>
            <h2>projects</h2>
            <div className={styles.wrapper}>
                <p>
                    While a significant portion of my past work is protected IP, here is a selection of personal projects I have been working on.
                </p>
                {
                    [
                        Diskreta,
                        MusikMenu,
                        RecoilNexus,
                        ElementalFusion
                    ].map(({ ModalContent, ...props }, i) => <Project key={`prj-${i}`} openModal={openModal(ModalContent)} i={i} {...props} />)
                }

            </div>
        </div >
        <dialog ref={dialogRef} className={closing ? styles.closing : ""} onAnimationEnd={handleAnimationEnd}>
            <button className={styles.dialogClose} onClick={() => setClosing(true)} />
            <ModalContent />
        </dialog>
    </>
}