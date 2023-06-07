import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { TextureLoader } from 'three'
import styles from "./styles.module.scss"
import recoilNexusGif from "./assets/recoil-nexus.gif"
import Image from 'next/image'

function Box(props) {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.x += delta / 4
        ref.current.rotation.y += delta / 4
        ref.current.rotation.z += delta / 4
        return
    })

    useThree(({ camera }) => {
        camera.position.set(0, 0, isMobile ? 2 : 1.75)
    });

    const texture = useLoader(TextureLoader, 'projects/npmjs-cube.png')

    return (
        <mesh {...props} ref={ref}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    )
}

function RecoilNexusThumbnail() {
    return (
        <Canvas style={{ minWidth: 140 }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
        </Canvas>
    )

}

function ScrambledNumbers() {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(Math.floor(Math.random() * 99999))
        }, 10)
        return () => clearInterval(interval)
    }, [])

    return number
}

function __RecoilNexusModalContent() {
    const [downloads, setDownloads] = useState(0)

    useEffect(() => {
        fetch("/api/nexus-downloads").then(r => r.json()).then(setDownloads)
    }, [])

    return <>
        <div className={styles.modalMediaWrapper}>
            <img src="/projects/diskreta.png" alt="Diskreta" />
        </div >

        <div style={{ display: 'flex', justifyContent: 'center' }}>

        </div>
    </>
}

function RecoilNexusModalContent() {
    const [downloads, setDownloads] = useState(0)

    useEffect(() => {
        fetch("/api/nexus-downloads").then(r => r.json()).then(setDownloads)
    }, [])

    return <>
        <div className={styles.modalContentWrapper}>

            <Image src={recoilNexusGif} alt="Recoil Nexus" />

            <div className={styles.textWrapper}>
                <h1>Recoil Nexus</h1>
                <ul className={styles.links}>
                    <li><a target="_blank" rel="noreferrer" href="https://npmjs.com/package/recoil-nexus">NPM</a></li>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/luisanton-io/recoil-nexus">Github</a></li>
                </ul>

                <div className={styles.features}>
                    <h4>Update Recoil from outside React</h4>
                    <ul>
                        <li>Enables reading and updating of Recoil atoms outside of React components</li>
                        <li>Actively maintained to ensure compatibility for the latest Recoil versions and support for users feature requests.</li>
                        <li>Downloaded {!downloads ? <ScrambledNumbers /> : downloads.toLocaleString()} times in the last year</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}


export default {
    name: "recoil-nexus",
    description: "A simple Typescript module to update Recoil atoms outside React components.",
    ModalContent: RecoilNexusModalContent,
    Thumbnail: RecoilNexusThumbnail
}