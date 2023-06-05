import { useRef, useState } from "react"
import styles from "../../styles/index.module.scss"

const projects = [
    {
        name: "Diskreta",
        Description: function ({ openModal }) {
            return <>
                <p>An anonymous E2E encrypted chat system. <a style={{ display: 'block'}} onClick={openModal}>Read more.</a></p>
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
        image: "/projects/diskreta.png"
    },
    {
        name: "Musik Menu",
        Description: function ({ openModal }) {
            return <>
                <p>A sleek link-in-bio service for musicians <a style={{ display: 'block'}} onClick={openModal}>Read more.</a></p>
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
        image: "/projects/diskreta.png"
    },
    {
        name: "recoil-nexus",
        Description: function ({ openModal }) {
            return <>
                <p>A simple Typescript module to update Recoil atoms outside React components. <a style={{ display: 'block'}} onClick={openModal}>Read more.</a></p>
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
        image: "/projects/diskreta.png"
    },
    // {
    //     name: "Project 2",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     image: "https://via.placeholder.com/900x600"
    // },
    // {
    //     name: "Project 3",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     image: "https://via.placeholder.com/900x600"
    // },
    // {
    //     name: "Project 4",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     image: "https://via.placeholder.com/900x600"
    // }
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
                {
                    projects.map(({ name, Description, modalContent, image }, i) => (
                        <div key={i} className={styles.project}>

                            <div className={styles.imgWrapper}>
                                <img src={image} alt={name} />
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