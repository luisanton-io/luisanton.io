import { useRef, useState } from "react"
import styles from "../../../styles/index.module.scss"
import DiskretaThumbnail from "./DiskretaThumbnail"
import MusikMenuThumbnail from "./MusikMenuThumbnail"
import RecoilNexusThumbnail from "./RecoilNexusThumbnail"

const projects = [
    {
        name: "Diskreta",
        Description: function ({ openModal }) {
            return <>
                <p>An anonymous E2E encrypted chat system. <a style={{ display: 'block' }} onClick={openModal}>Read more.</a></p>
            </>
        },
        modalContent: <>
            <div className={styles.modalMediaWrapper}>
                <img src="/projects/diskreta.png" alt="Diskreta" />
            </div>
            <ul className={styles.links}>
                <li><a href="https://diskreta.vercel.app">Live Version </a></li>
                <li><a href="https://github.com/luisanton-io/fe-diskreta">Frontend Repo</a></li>
                <li><a href="https://github.com/luisanton-io/be-diskreta">Backend Repo</a></li>
            </ul>
            <div style={{ display: 'flex' }}>
                <ul className={styles.features}>
                    <li>open source, anonymous, end-to-end encrypted chat system</li>
                    <li>supports real-time text, images, read receipts, reactions</li>
                    <li>same-device password recovery system, based on <a href="https://stackoverflow.com/q/72047474/11783958">deterministically generated RSA keys</a>, inspired by crypto wallets recovery systems</li>
                    <li>users' data never leaves their device and gets military grade encrypted with AES-256</li>
                </ul>
                <div className={styles.stack}>
                    <div className={styles.frontend}>
                        <h3>Frontend</h3>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>SCSS</li>
                            <li>Recoil</li>
                        </ul>
                    </div>
                    <div className={styles.backend}>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>,
        Thumbnail: DiskretaThumbnail
    },
    {
        name: "Musik Menu",
        Description: function ({ openModal }) {
            return <>
                <p>A sleek link-in-bio service for musicians <a style={{ display: 'block' }} onClick={openModal}>Read more.</a></p>
            </>
        },
        modalContent: <>
            <div className={styles.modalMediaWrapper}>
                <img src="/projects/diskreta.png" alt="Diskreta" />
            </div>
            <ul className={styles.links}>
                <li><a href="https://musik.menu">Live Product</a></li>
            </ul>
            <div style={{ display: 'flex' }}>
                <ul className={styles.features}>
                    <li>open source, anonymous, end-to-end encrypted chat system</li>
                    <li>supports real-time text, images, read receipts, reactions</li>
                    <li>same-device password recovery system, based on <a href="https://stackoverflow.com/q/72047474/11783958">deterministically generated RSA keys</a>, inspired by crypto wallets recovery systems</li>
                    <li>users' data never leaves their device and gets military grade encrypted with AES-256</li>
                </ul>
                <div className={styles.stack}>
                    <div className={styles.frontend}>
                        <h3>Frontend</h3>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>SCSS</li>
                            <li>Recoil</li>
                        </ul>
                    </div>
                    <div className={styles.backend}>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>,
        Thumbnail: MusikMenuThumbnail
    },
    {
        name: "recoil-nexus",
        Description: function ({ openModal }) {
            return <>
                <p>A simple Typescript module to update Recoil atoms outside React components. <a style={{ display: 'block' }} onClick={openModal}>Read more.</a></p>
            </>
        },
        modalContent: <>
            <div className={styles.modalMediaWrapper}>
                <img src="/projects/diskreta.png" alt="Diskreta" />
            </div>
            <ul className={styles.links}>
                <li><a href="https://diskreta.vercel.app">Live Version </a></li>
                <li><a href="https://github.com/luisanton-io/fe-diskreta">Frontend Repo</a></li>
                <li><a href="https://github.com/luisanton-io/be-diskreta">Backend Repo</a></li>
            </ul>
            <div style={{ display: 'flex' }}>
                <ul className={styles.features}>
                    <li>open source, anonymous, end-to-end encrypted chat system</li>
                    <li>supports real-time text, images, read receipts, reactions</li>
                    <li>same-device password recovery system, based on <a href="https://stackoverflow.com/q/72047474/11783958">deterministically generated RSA keys</a>, inspired by crypto wallets recovery systems</li>
                    <li>users' data never leaves their device and gets military grade encrypted with AES-256</li>
                </ul>
                <div className={styles.stack}>
                    <div className={styles.frontend}>
                        <h3>Frontend</h3>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>SCSS</li>
                            <li>Recoil</li>
                        </ul>
                    </div>
                    <div className={styles.backend}>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node JS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Socket.io</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>,
        Thumbnail: RecoilNexusThumbnail
    }
]


export default function Projects() {

    const [modalContent, setModalContent] = useState(null)
    const dialogRef = useRef()

    const openModal = modalContent => () => {
        setModalContent(modalContent)
        dialogRef.current?.showModal()
    }

    return <>
        <div className={styles.projects}>
            <h2>projects</h2>
            <div className={styles.wrapper}>
                {/* <p>
                    While a significant portion of my past work is IP protected, here is a selection of personal projects.
                </p> */}
                {
                    projects.map(({ name, Description, modalContent, Thumbnail }, i) => (
                        <div key={i} className={styles.project}>

                            <div className={styles.imgWrapper}>
                                <Thumbnail />
                            </div>
                            <div className={styles.caption}>
                                <h3>{name}</h3>
                                <Description openModal={openModal(modalContent)} />
                            </div>
                        </div>
                    ))
                }

            </div>
        </div >
        <dialog ref={dialogRef}>
            <button className={styles.dialogClose} onClick={() => dialogRef.current.close()} />
            {modalContent}
        </dialog>
    </>
}