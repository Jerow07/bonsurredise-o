import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

// Mouse position normalised to [-1, 1] relative to the viewport center,
// updated on window so the truck reacts from anywhere on the page.
const globalMouse = { x: 0, y: 0 }

if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    globalMouse.x = (e.clientX / window.innerWidth  - 0.5) * 2
    globalMouse.y = (e.clientY / window.innerHeight - 0.5) * 2
  }, { passive: true })
}

function TruckModel() {
  const { scene } = useGLTF('/truck.glb')
  const groupRef = useRef<THREE.Group>(null)
  const rotY = useRef(0)
  const rotX = useRef(0)

  useEffect(() => {
    // Auto-fit: measure bounding box and centre + scale the model
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)

    const maxDim = Math.max(size.x, size.y, size.z)
    const scale = 1.4 / maxDim
    scene.scale.setScalar(scale)
    scene.position.sub(center.multiplyScalar(scale))

    scene.traverse(child => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        mesh.castShadow = true
        mesh.receiveShadow = true
      }
    })
  }, [scene])

  useFrame(() => {
    if (!groupRef.current) return
    // Math.PI base keeps the front facing the camera at rest.
    // Mouse X steers the nose left/right; mouse Y tilts slightly up/down.
    const targetY = Math.PI + globalMouse.x * 0.65
    const targetX = -globalMouse.y * 0.18
    rotY.current += (targetY - rotY.current) * 0.15
    rotX.current += (targetX - rotX.current) * 0.15
    groupRef.current.rotation.y = rotY.current
    groupRef.current.rotation.x = rotX.current
  })

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  )
}

function CameraSetup() {
  const { camera } = useThree()
  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera
    cam.fov = 40
    cam.position.set(0, 0.2, 4.5)
    cam.lookAt(0, 0, 0)
    cam.updateProjectionMatrix()
  }, [camera])
  return null
}

export default function Truck3D() {
  return (
    <div
      className="w-full rounded-[12px] overflow-hidden"
      style={{ height: 460, background: 'var(--color-bg)' }}
    >
      <Canvas shadows dpr={[1, 1.5]} gl={{ antialias: true }}>
        <CameraSetup />
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 6, 4]} intensity={1.4} castShadow />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#7fb3e8" />
        <Suspense fallback={null}>
          <TruckModel />
          <ContactShadows position={[0, -1.1, 0]} opacity={0.45} scale={8} blur={2.5} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}

useGLTF.preload('/truck.glb')
