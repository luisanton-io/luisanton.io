import { useRef, useState } from "react"
import styles from "../../../styles/index.module.scss"
import Diskreta from "./Diskreta"
import ElementalFusion from "./ElementalFusion"
import MusikMenu from "./MusikMenu"
import RecoilNexus from "./RecoilNexus"

function Description({ openModal, caption }) {
    return <p>{caption} <a style={{ display: 'block' }} onClick={openModal}>Read more.</a></p>
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
                    While a significant portion of my past work is IP protected, here is a selection of personal projects I have been working on.
                </p>
                {
                    [
                        Diskreta,
                        MusikMenu,
                        RecoilNexus,
                        ElementalFusion
                    ].map(({ name, description, ModalContent, Thumbnail }, i) => (
                        <div key={i} className={styles.project}>

                            <div className={styles.imgWrapper}>
                                <Thumbnail />
                            </div>
                            <div className={styles.caption}>
                                <h3>{name}</h3>
                                <Description openModal={openModal(ModalContent)} caption={description} />
                            </div>
                        </div>
                    ))
                }

            </div>
        </div >
        <dialog ref={dialogRef} className={closing ? styles.closing : ""} onAnimationEnd={handleAnimationEnd}>
            <button className={styles.dialogClose} onClick={() => setClosing(true)} />
            <ModalContent />
        </dialog>
    </>
}