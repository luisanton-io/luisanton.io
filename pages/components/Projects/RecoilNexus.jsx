import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { TextureLoader } from 'three'
import styles from "./styles.module.scss"

function Box(props) {
    const ref = useRef()
    useFrame((state, delta) => {
        ref.current.rotation.x += delta / 4
        ref.current.rotation.y += delta / 4
        ref.current.rotation.z += delta / 4
        return
    })

    useThree(({ camera }) => {
        camera.position.set(0, 0, isMobile ? 3 : 1.75)
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

function RecoilNexusModalContent() {
    const [downloads, setDownloads] = useState(0)

    useEffect(() => {
        fetch("/api/nexus-downloads").then(r => r.json()).then(setDownloads)
    }, [])

    return <>
        <div className={styles.modalMediaWrapper}>
            <img src="/projects/diskreta.png" alt="Diskreta" />
        </div >
        <ul className={styles.links}>
            <li><a href="https://npmjs.com/package/recoil-nexus">NPM</a></li>
            <li><a href="https://github.com/luisanton-io/recoil-nexus">Github</a></li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ul className={styles.features}>
                <li>creates getters/setters to read and update Recoil atoms outside of React components</li>
                <li>actively maintained</li>
                <li>downloaded {!downloads ? <ScrambledNumbers /> : downloads.toLocaleString()} times in the last year</li>
            </ul>
        </div>
    </>
}


export default {
    name: "recoil-nexus",
    description: "A simple Typescript module to update Recoil atoms outside React components.",
    ModalContent: RecoilNexusModalContent,
    Thumbnail: RecoilNexusThumbnail
}