import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { TextureLoader } from 'three'
import { isMobile } from 'react-device-detect'

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

export default function RecoilNexusThumbnail() {
    return <Canvas style={{ minWidth: 140 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
    </Canvas>
}