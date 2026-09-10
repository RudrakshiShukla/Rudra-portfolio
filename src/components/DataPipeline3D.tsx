// // // // // import { Canvas } from '@react-three/fiber'
// // // // // import { Float, Text } from '@react-three/drei'
// // // // // import * as THREE from 'three'

// // // // // function PipelineNode({
// // // // //   position,
// // // // //   label,
// // // // //   subLabel,
// // // // // }: {
// // // // //   position: [number, number, number]
// // // // //   label: string
// // // // //   subLabel: string
// // // // // }) {
// // // // //   return (
// // // // //     <group position={position}>

// // // // //       <Float
// // // // //         speed={1.5}
// // // // //         rotationIntensity={0.15}
// // // // //         floatIntensity={0.25}
// // // // //       >

// // // // //         <mesh>
// // // // //           <boxGeometry args={[1.5, 0.8, 0.35]} />

// // // // //           <meshStandardMaterial
// // // // //             color="#111827"
// // // // //             metalness={0.8}
// // // // //             roughness={0.25}
// // // // //           />
// // // // //         </mesh>

// // // // //         <Text
// // // // //           position={[0, 0.08, 0.2]}
// // // // //           fontSize={0.18}
// // // // //           color="white"
// // // // //           anchorX="center"
// // // // //           anchorY="middle"
// // // // //         >
// // // // //           {label}
// // // // //         </Text>

// // // // //         <Text
// // // // //           position={[0, -0.18, 0.2]}
// // // // //           fontSize={0.09}
// // // // //           color="#777777"
// // // // //           anchorX="center"
// // // // //           anchorY="middle"
// // // // //         >
// // // // //           {subLabel}
// // // // //         </Text>

// // // // //       </Float>

// // // // //     </group>
// // // // //   )
// // // // // }

// // // // // function PipelineLine({
// // // // //   start,
// // // // //   end,
// // // // // }: {
// // // // //   start: [number, number, number]
// // // // //   end: [number, number, number]
// // // // // }) {
// // // // //   const points = [
// // // // //     new THREE.Vector3(...start),
// // // // //     new THREE.Vector3(...end),
// // // // //   ]

// // // // //   const geometry = new THREE.BufferGeometry().setFromPoints(points)

// // // // //   const material = new THREE.LineBasicMaterial({
// // // // //     color: '#555555',
// // // // //   })

// // // // //   const line = new THREE.Line(geometry, material)

// // // // //   return <primitive object={line} />
// // // // // }

// // // // // function DataFlow() {
// // // // //   const nodes = [
// // // // //     {
// // // // //       position: [-3.6, 0, 0] as [number, number, number],
// // // // //       label: 'SOURCES',
// // // // //       subLabel: 'Excel · SharePoint · SQL',
// // // // //     },
// // // // //     {
// // // // //       position: [-1.8, 0, 0] as [number, number, number],
// // // // //       label: 'ADF',
// // // // //       subLabel: 'ETL Pipeline',
// // // // //     },
// // // // //     {
// // // // //       position: [0, 0, 0] as [number, number, number],
// // // // //       label: 'AZURE SQL',
// // // // //       subLabel: 'Central Data',
// // // // //     },
// // // // //     {
// // // // //       position: [1.8, 0, 0] as [number, number, number],
// // // // //       label: 'TRANSFORM',
// // // // //       subLabel: 'Clean · Validate',
// // // // //     },
// // // // //     {
// // // // //       position: [3.6, 0, 0] as [number, number, number],
// // // // //       label: 'POWER BI',
// // // // //       subLabel: 'Insights',
// // // // //     },
// // // // //   ]

// // // // //   return (
// // // // //     <>
// // // // //       {nodes.map((node, index) => (
// // // // //         <PipelineNode
// // // // //           key={index}
// // // // //           position={node.position}
// // // // //           label={node.label}
// // // // //           subLabel={node.subLabel}
// // // // //         />
// // // // //       ))}

// // // // //       <PipelineLine
// // // // //         start={[-2.85, 0, 0]}
// // // // //         end={[-2.55, 0, 0]}
// // // // //       />

// // // // //       <PipelineLine
// // // // //         start={[-1.05, 0, 0]}
// // // // //         end={[-0.75, 0, 0]}
// // // // //       />

// // // // //       <PipelineLine
// // // // //         start={[0.75, 0, 0]}
// // // // //         end={[1.05, 0, 0]}
// // // // //       />

// // // // //       <PipelineLine
// // // // //         start={[2.55, 0, 0]}
// // // // //         end={[2.85, 0, 0]}
// // // // //       />
// // // // //     </>
// // // // //   )
// // // // // }

// // // // // export default function DataPipeline3D() {
// // // // //   return (
// // // // //     <div className="data-pipeline-3d">

// // // // //       <Canvas
// // // // //         camera={{
// // // // //           position: [0, 0, 8],
// // // // //           fov: 45,
// // // // //         }}
// // // // //       >

// // // // //         <ambientLight intensity={1.5} />

// // // // //         <directionalLight
// // // // //           position={[4, 4, 5]}
// // // // //           intensity={2}
// // // // //         />

// // // // //         <pointLight
// // // // //           position={[-4, 2, 3]}
// // // // //           intensity={2}
// // // // //         />

// // // // //         <DataFlow />

// // // // //       </Canvas>

// // // // //     </div>
// // // // //   )
// // // // // }

// // // // import { Canvas, useFrame } from '@react-three/fiber'
// // // // import { Float, Text } from '@react-three/drei'
// // // // import * as THREE from 'three'
// // // // import { useRef } from 'react'

// // // // type NodeProps = {
// // // //   position: [number, number, number]
// // // //   label: string
// // // //   subLabel: string
// // // // }

// // // // function PipelineNode({ position, label, subLabel }: NodeProps) {
// // // //   const groupRef = useRef<THREE.Group>(null)

// // // //   useFrame((state) => {
// // // //     if (!groupRef.current) return

// // // //     groupRef.current.rotation.y =
// // // //       Math.sin(state.clock.elapsedTime * 0.7 + position[0]) * 0.04
// // // //   })

// // // //   return (
// // // //     <Float
// // // //       speed={1.2}
// // // //       rotationIntensity={0.08}
// // // //       floatIntensity={0.18}
// // // //     >
// // // //       <group ref={groupRef} position={position}>

// // // //         {/* Main 3D block */}
// // // //         <mesh castShadow receiveShadow>
// // // //           <boxGeometry args={[1.45, 0.82, 0.45]} />

// // // //           <meshStandardMaterial
// // // //             color="#101827"
// // // //             metalness={0.9}
// // // //             roughness={0.18}
// // // //           />
// // // //         </mesh>

// // // //         {/* Glowing front panel */}
// // // //         <mesh position={[0, 0, 0.235]}>
// // // //           <planeGeometry args={[1.25, 0.62]} />

// // // //           <meshBasicMaterial
// // // //             color="#38bdf8"
// // // //             transparent
// // // //             opacity={0.045}
// // // //           />
// // // //         </mesh>

// // // //         <Text
// // // //           position={[0, 0.10, 0.27]}
// // // //           fontSize={0.16}
// // // //           color="#ffffff"
// // // //           anchorX="center"
// // // //           anchorY="middle"
// // // //         >
// // // //           {label}
// // // //         </Text>

// // // //         <Text
// // // //           position={[0, -0.16, 0.27]}
// // // //           fontSize={0.075}
// // // //           color="#94a3b8"
// // // //           anchorX="center"
// // // //           anchorY="middle"
// // // //         >
// // // //           {subLabel}
// // // //         </Text>

// // // //       </group>
// // // //     </Float>
// // // //   )
// // // // }

// // // // function PipelineConnection({
// // // //   start,
// // // //   end,
// // // // }: {
// // // //   start: [number, number, number]
// // // //   end: [number, number, number]
// // // // }) {
// // // //   const points = [
// // // //     new THREE.Vector3(...start),
// // // //     new THREE.Vector3(...end),
// // // //   ]

// // // //   const geometry = new THREE.BufferGeometry().setFromPoints(points)

// // // //   return (
// // // //     <primitive
// // // //       object={
// // // //         new THREE.Line(
// // // //           geometry,
// // // //           new THREE.LineBasicMaterial({
// // // //             color: '#38bdf8',
// // // //             transparent: true,
// // // //             opacity: 0.35,
// // // //           })
// // // //         )
// // // //       }
// // // //     />
// // // //   )
// // // // }

// // // // function DataParticle({
// // // //   startX,
// // // //   endX,
// // // //   y = 0,
// // // // }: {
// // // //   startX: number
// // // //   endX: number
// // // //   y?: number
// // // // }) {
// // // //   const meshRef = useRef<THREE.Mesh>(null)

// // // //   useFrame((state) => {
// // // //     if (!meshRef.current) return

// // // //     const time =
// // // //       (state.clock.elapsedTime * 0.7 + startX * 0.2) % 1

// // // //     meshRef.current.position.x =
// // // //       THREE.MathUtils.lerp(startX, endX, time)

// // // //     meshRef.current.position.y =
// // // //       y + Math.sin(time * Math.PI) * 0.08
// // // //   })

// // // //   return (
// // // //     <mesh ref={meshRef}>
// // // //       <sphereGeometry args={[0.055, 12, 12]} />

// // // //       <meshBasicMaterial color="#38bdf8" />
// // // //     </mesh>
// // // //   )
// // // // }

// // // // function DataFlow() {
// // // //   const nodes: NodeProps[] = [
// // // //     {
// // // //       position: [-3.6, 0, 0],
// // // //       label: 'SOURCES',
// // // //       subLabel: 'Excel · SharePoint · SQL',
// // // //     },
// // // //     {
// // // //       position: [-1.8, 0, 0],
// // // //       label: 'ADF',
// // // //       subLabel: 'ETL Pipeline',
// // // //     },
// // // //     {
// // // //       position: [0, 0, 0],
// // // //       label: 'AZURE SQL',
// // // //       subLabel: 'Central Data',
// // // //     },
// // // //     {
// // // //       position: [1.8, 0, 0],
// // // //       label: 'TRANSFORM',
// // // //       subLabel: 'Clean · Validate',
// // // //     },
// // // //     {
// // // //       position: [3.6, 0, 0],
// // // //       label: 'POWER BI',
// // // //       subLabel: 'Insights',
// // // //     },
// // // //   ]

// // // //   return (
// // // //     <>
// // // //       {nodes.map((node) => (
// // // //         <PipelineNode
// // // //           key={node.label}
// // // //           {...node}
// // // //         />
// // // //       ))}

// // // //       {/* Connections */}
// // // //       <PipelineConnection
// // // //         start={[-2.85, 0, 0]}
// // // //         end={[-2.55, 0, 0]}
// // // //       />

// // // //       <PipelineConnection
// // // //         start={[-1.05, 0, 0]}
// // // //         end={[-0.75, 0, 0]}
// // // //       />

// // // //       <PipelineConnection
// // // //         start={[0.75, 0, 0]}
// // // //         end={[1.05, 0, 0]}
// // // //       />

// // // //       <PipelineConnection
// // // //         start={[2.55, 0, 0]}
// // // //         end={[2.85, 0, 0]}
// // // //       />

// // // //       {/* Moving data */}
// // // //       <DataParticle
// // // //         startX={-2.85}
// // // //         endX={-2.55}
// // // //       />

// // // //       <DataParticle
// // // //         startX={-1.05}
// // // //         endX={-0.75}
// // // //       />

// // // //       <DataParticle
// // // //         startX={0.75}
// // // //         endX={1.05}
// // // //       />

// // // //       <DataParticle
// // // //         startX={2.55}
// // // //         endX={2.85}
// // // //       />
// // // //     </>
// // // //   )
// // // // }

// // // // export default function DataPipeline3D() {
// // // //   return (
// // // //     <div className="data-pipeline-3d">

// // // //       <Canvas
// // // //         shadows
// // // //         camera={{
// // // //           position: [0, 0, 8],
// // // //           fov: 42,
// // // //         }}
// // // //       >

// // // //         <ambientLight intensity={0.7} />

// // // //         <directionalLight
// // // //           position={[3, 5, 6]}
// // // //           intensity={2}
// // // //           castShadow
// // // //         />

// // // //         <pointLight
// // // //           position={[-4, 2, 4]}
// // // //           intensity={3}
// // // //           color="#38bdf8"
// // // //         />

// // // //         <pointLight
// // // //           position={[4, -2, 3]}
// // // //           intensity={2}
// // // //           color="#6366f1"
// // // //         />

// // // //         <DataFlow />

// // // //       </Canvas>

// // // //     </div>
// // // //   )
// // // // }

// // // // import { Canvas, useFrame } from '@react-three/fiber'
// // // // import { Float, Text } from '@react-three/drei'
// // // // import * as THREE from 'three'
// // // // import { useRef } from 'react'

// // // // type NodeProps = {
// // // //   position: [number, number, number]
// // // //   label: string
// // // //   subLabel: string
// // // //   accent: string
// // // // }

// // // // function PipelineNode({
// // // //   position,
// // // //   label,
// // // //   subLabel,
// // // //   accent,
// // // // }: NodeProps) {
// // // //   const groupRef = useRef<THREE.Group>(null)

// // // //   useFrame((state) => {
// // // //     if (!groupRef.current) return

// // // //     groupRef.current.rotation.y =
// // // //       Math.sin(state.clock.elapsedTime * 0.6 + position[0]) * 0.04
// // // //   })

// // // //   return (
// // // //     <Float
// // // //       speed={1}
// // // //       rotationIntensity={0.08}
// // // //       floatIntensity={0.15}
// // // //     >
// // // //       <group ref={groupRef} position={position}>

// // // //         {/* Main 3D body */}
// // // //         <mesh castShadow receiveShadow>
// // // //           <boxGeometry args={[1.45, 0.82, 0.5]} />

// // // //           <meshStandardMaterial
// // // //             color="#111b2e"
// // // //             metalness={0.85}
// // // //             roughness={0.2}
// // // //           />
// // // //         </mesh>

// // // //         {/* Accent frame */}
// // // //         <mesh position={[0, 0, 0.255]}>
// // // //           <planeGeometry args={[1.28, 0.64]} />

// // // //           <meshBasicMaterial
// // // //             color={accent}
// // // //             transparent
// // // //             opacity={0.10}
// // // //           />
// // // //         </mesh>

// // // //         {/* Small glowing indicator */}
// // // //         <mesh position={[-0.55, 0.25, 0.29]}>
// // // //           <sphereGeometry args={[0.045, 12, 12]} />

// // // //           <meshBasicMaterial color={accent} />
// // // //         </mesh>

// // // //         <Text
// // // //           position={[0, 0.10, 0.30]}
// // // //           fontSize={0.16}
// // // //           color="#f8fafc"
// // // //           anchorX="center"
// // // //           anchorY="middle"
// // // //         >
// // // //           {label}
// // // //         </Text>

// // // //         <Text
// // // //           position={[0, -0.16, 0.30]}
// // // //           fontSize={0.075}
// // // //           color="#9caec5"
// // // //           anchorX="center"
// // // //           anchorY="middle"
// // // //         >
// // // //           {subLabel}
// // // //         </Text>

// // // //       </group>
// // // //     </Float>
// // // //   )
// // // // }

// // // // function PipelineConnection({
// // // //   start,
// // // //   end,
// // // // }: {
// // // //   start: [number, number, number]
// // // //   end: [number, number, number]
// // // // }) {
// // // //   const points = [
// // // //     new THREE.Vector3(...start),
// // // //     new THREE.Vector3(...end),
// // // //   ]

// // // //   const geometry = new THREE.BufferGeometry().setFromPoints(points)

// // // //   const material = new THREE.LineBasicMaterial({
// // // //     color: '#4cc9f0',
// // // //     transparent: true,
// // // //     opacity: 0.55,
// // // //   })

// // // //   const line = new THREE.Line(geometry, material)

// // // //   return <primitive object={line} />
// // // // }

// // // // function DataParticle({
// // // //   startX,
// // // //   endX,
// // // // }: {
// // // //   startX: number
// // // //   endX: number
// // // // }) {
// // // //   const meshRef = useRef<THREE.Mesh>(null)

// // // //   useFrame((state) => {
// // // //     if (!meshRef.current) return

// // // //     const progress =
// // // //       (state.clock.elapsedTime * 0.65 + startX * 0.15) % 1

// // // //     meshRef.current.position.x =
// // // //       THREE.MathUtils.lerp(startX, endX, progress)

// // // //     meshRef.current.scale.setScalar(
// // // //       0.8 + Math.sin(progress * Math.PI) * 0.5
// // // //     )
// // // //   })

// // // //   return (
// // // //     <mesh ref={meshRef}>
// // // //       <sphereGeometry args={[0.065, 16, 16]} />

// // // //       <meshBasicMaterial color="#67e8f9" />
// // // //     </mesh>
// // // //   )
// // // // }

// // // // function DataFlow() {
// // // //   const nodes: NodeProps[] = [
// // // //     {
// // // //       position: [-3.6, 0, 0],
// // // //       label: 'SOURCES',
// // // //       subLabel: 'Excel · SharePoint · SQL',
// // // //       accent: '#38bdf8',
// // // //     },
// // // //     {
// // // //       position: [-1.8, 0, 0],
// // // //       label: 'ADF',
// // // //       subLabel: 'ETL Pipeline',
// // // //       accent: '#22d3ee',
// // // //     },
// // // //     {
// // // //       position: [0, 0, 0],
// // // //       label: 'AZURE SQL',
// // // //       subLabel: 'Central Data',
// // // //       accent: '#818cf8',
// // // //     },
// // // //     {
// // // //       position: [1.8, 0, 0],
// // // //       label: 'TRANSFORM',
// // // //       subLabel: 'Clean · Validate',
// // // //       accent: '#a78bfa',
// // // //     },
// // // //     {
// // // //       position: [3.6, 0, 0],
// // // //       label: 'POWER BI',
// // // //       subLabel: 'Insights',
// // // //       accent: '#38bdf8',
// // // //     },
// // // //   ]

// // // //   return (
// // // //     <>
// // // //       {nodes.map((node) => (
// // // //         <PipelineNode
// // // //           key={node.label}
// // // //           {...node}
// // // //         />
// // // //       ))}

// // // //       <PipelineConnection
// // // //         start={[-2.85, 0, 0]}
// // // //         end={[-2.55, 0, 0]}
// // // //       />

// // // //       <PipelineConnection
// // // //         start={[-1.05, 0, 0]}
// // // //         end={[-0.75, 0, 0]}
// // // //       />

// // // //       <PipelineConnection
// // // //         start={[0.75, 0, 0]}
// // // //         end={[1.05, 0, 0]}
// // // //       />

// // // //       <PipelineConnection
// // // //         start={[2.55, 0, 0]}
// // // //         end={[2.85, 0, 0]}
// // // //       />

// // // //       <DataParticle startX={-2.85} endX={-2.55} />
// // // //       <DataParticle startX={-1.05} endX={-0.75} />
// // // //       <DataParticle startX={0.75} endX={1.05} />
// // // //       <DataParticle startX={2.55} endX={2.85} />
// // // //     </>
// // // //   )
// // // // }

// // // // export default function DataPipeline3D() {
// // // //   return (
// // // //     <div className="data-pipeline-3d">

// // // //       <Canvas
// // // //         shadows
// // // //         camera={{
// // // //           position: [0, 0, 8],
// // // //           fov: 42,
// // // //         }}
// // // //       >

// // // //         <color attach="background" args={['#0b1220']} />

// // // //         <fog
// // // //           attach="fog"
// // // //           args={['#0b1220', 8, 15]}
// // // //         />

// // // //         <ambientLight intensity={0.8} />

// // // //         <directionalLight
// // // //           position={[3, 5, 6]}
// // // //           intensity={2}
// // // //           castShadow
// // // //         />

// // // //         <pointLight
// // // //           position={[-4, 2, 4]}
// // // //           intensity={4}
// // // //           color="#22d3ee"
// // // //         />

// // // //         <pointLight
// // // //           position={[4, -2, 3]}
// // // //           intensity={3}
// // // //           color="#8b5cf6"
// // // //         />

// // // //         <DataFlow />

// // // //       </Canvas>

// // // //     </div>
// // // //   )
// // // // }

// // // import { Canvas, useFrame } from '@react-three/fiber'
// // // import { Float, Text, OrbitControls } from '@react-three/drei'
// // // import * as THREE from 'three'
// // // import { useRef, useMemo } from 'react'

// // // type NodeProps = {
// // //   position: [number, number, number]
// // //   label: string
// // //   subLabel: string
// // //   accent: string
// // // }

// // // function PipelineNode({ position, label, subLabel, accent }: NodeProps) {
// // //   const groupRef = useRef<THREE.Group>(null)

// // //   useFrame((state) => {
// // //     if (!groupRef.current) return
// // //     groupRef.current.rotation.y =
// // //       Math.sin(state.clock.elapsedTime * 0.6 + position[0]) * 0.04
// // //   })

// // //   return (
// // //     <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
// // //       <group ref={groupRef} position={position}>
// // //         <mesh castShadow receiveShadow>
// // //           <boxGeometry args={[1.45, 0.82, 0.5]} />
// // //           <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.15} />
// // //         </mesh>

// // //         <mesh position={[0, 0, 0.255]}>
// // //           <planeGeometry args={[1.28, 0.64]} />
// // //           <meshBasicMaterial color={accent} transparent opacity={0.12} />
// // //         </mesh>

// // //         <mesh position={[-0.55, 0.25, 0.29]}>
// // //           <sphereGeometry args={[0.045, 12, 12]} />
// // //           <meshBasicMaterial color={accent} />
// // //         </mesh>

// // //         <Text position={[0, 0.10, 0.30]} fontSize={0.16} color="#f8fafc" anchorX="center" anchorY="middle">
// // //           {label}
// // //         </Text>
// // //         <Text position={[0, -0.16, 0.30]} fontSize={0.075} color="#94a3b8" anchorX="center" anchorY="middle">
// // //           {subLabel}
// // //         </Text>
// // //       </group>
// // //     </Float>
// // //   )
// // // }

// // // function PipelineConnection({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
// // //   const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)]
// // //   const geometry = new THREE.BufferGeometry().setFromPoints(points)
// // //   const material = new THREE.LineBasicMaterial({ color: '#38bdf8', transparent: true, opacity: 0.6 })
// // //   return <primitive object={new THREE.Line(geometry, material)} />
// // // }

// // // function DataParticle({ startX, endX }: { startX: number, endX: number }) {
// // //   const meshRef = useRef<THREE.Mesh>(null)

// // //   useFrame((state) => {
// // //     if (!meshRef.current) return
// // //     const progress = (state.clock.elapsedTime * 0.8 + startX * 0.15) % 1
// // //     meshRef.current.position.x = THREE.MathUtils.lerp(startX, endX, progress)
// // //     meshRef.current.scale.setScalar(0.8 + Math.sin(progress * Math.PI) * 0.5)
// // //   })

// // //   return (
// // //     <mesh ref={meshRef}>
// // //       <sphereGeometry args={[0.07, 16, 16]} />
// // //       <meshBasicMaterial color="#22d3ee" />
// // //     </mesh>
// // //   )
// // // }

// // // // 3D Background Floating Starfield/Data Dust
// // // function BackgroundParticles() {
// // //   const count = 300
// // //   const pointsRef = useRef<THREE.Points>(null)

// // //   const [positions, colors] = useMemo(() => {
// // //     const pos = new Float32Array(count * 3)
// // //     const col = new Float32Array(count * 3)
// // //     for (let i = 0; i < count * 3; i += 3) {
// // //       pos[i] = (Math.random() - 0.5) * 15
// // //       pos[i + 1] = (Math.random() - 0.5) * 10
// // //       pos[i + 2] = (Math.random() - 0.5) * 10

// // //       col[i] = 0.2
// // //       col[i + 1] = 0.7
// // //       col[i + 2] = 1.0
// // //     }
// // //     return [pos, col]
// // //   }, [])

// // //   useFrame((state) => {
// // //     if (!pointsRef.current) return
// // //     pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
// // //   })

// // //   return (
// // //     <points ref={pointsRef}>
// // //       <bufferGeometry>
// // //         <bufferAttribute attach="attributes-position" args={[positions, 3]} />
// // //         <bufferAttribute attach="attributes-color" args={[colors, 3]} />
// // //       </bufferGeometry>
// // //       <pointsMaterial size={0.04} vertexColors transparent opacity={0.6} />
// // //     </points>
// // //   )
// // // }

// // // function DataFlow() {
// // //   const nodes: NodeProps[] = [
// // //     { position: [-3.6, 0, 0], label: 'SOURCES', subLabel: 'Excel · SharePoint', accent: '#38bdf8' },
// // //     { position: [-1.8, 0, 0], label: 'ADF', subLabel: 'ETL Pipeline', accent: '#22d3ee' },
// // //     { position: [0, 0, 0], label: 'AZURE SQL', subLabel: 'Central Data', accent: '#818cf8' },
// // //     { position: [1.8, 0, 0], label: 'TRANSFORM', subLabel: 'Clean · Validate', accent: '#a78bfa' },
// // //     { position: [3.6, 0, 0], label: 'POWER BI', subLabel: 'Insights', accent: '#38bdf8' },
// // //   ]

// // //   return (
// // //     <>
// // //       <BackgroundParticles />
// // //       {nodes.map((node) => (
// // //         <PipelineNode key={node.label} {...node} />
// // //       ))}
// // //       <PipelineConnection start={[-2.85, 0, 0]} end={[-2.55, 0, 0]} />
// // //       <PipelineConnection start={[-1.05, 0, 0]} end={[-0.75, 0, 0]} />
// // //       <PipelineConnection start={[0.75, 0, 0]} end={[1.05, 0, 0]} />
// // //       <PipelineConnection start={[2.55, 0, 0]} end={[2.85, 0, 0]} />

// // //       <DataParticle startX={-2.85} endX={-2.55} />
// // //       <DataParticle startX={-1.05} endX={-0.75} />
// // //       <DataParticle startX={0.75} endX={1.05} />
// // //       <DataParticle startX={2.55} endX={2.85} />
// // //     </>
// // //   )
// // // }

// // // export default function DataPipeline3D() {
// // //   return (
// // //     <div className="data-pipeline-3d">
// // //       <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
// // //         <color attach="background" args={['#030712']} />
// // //         <fog attach="fog" args={['#030712', 8, 16]} />
        
// // //         <ambientLight intensity={1} />
// // //         <directionalLight position={[3, 5, 6]} intensity={2.5} castShadow />
// // //         <pointLight position={[-4, 2, 4]} intensity={5} color="#22d3ee" />
// // //         <pointLight position={[4, -2, 3]} intensity={4} color="#8b5cf6" />

// // //         <DataFlow />

// // //         {/* Adds buttery smooth interactive rotation via mouse */}
// // //         <OrbitControls 
// // //           enableZoom={false} 
// // //           enablePan={false} 
// // //           maxPolarAngle={Math.PI / 2 + 0.2} 
// // //           minPolarAngle={Math.PI / 2 - 0.2}
// // //           rotateSpeed={0.4}
// // //         />
// // //       </Canvas>
// // //     </div>
// // //   )
// // // }

// // import { Canvas, useFrame } from '@react-three/fiber'
// // import { Float, OrbitControls } from '@react-three/drei'
// // import * as THREE from 'three'
// // import { useRef, useMemo } from 'react'

// // // Full-screen floating data particles & grid network
// // function ImmersiveBackground() {
// //   const pointsRef = useRef<THREE.Points>(null)

// //   const [positions] = useMemo(() => {
// //     const count = 600
// //     const pos = new Float32Array(count * 3)
// //     for (let i = 0; i < count * 3; i += 3) {
// //       pos[i] = (Math.random() - 0.5) * 25
// //       pos[i + 1] = (Math.random() - 0.5) * 25
// //       pos[i + 2] = (Math.random() - 0.5) * 15
// //     }
// //     return [pos]
// //   }, [])

// //   useFrame((state) => {
// //     if (!pointsRef.current) return
// //     pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03
// //     pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
// //   })

// //   return (
// //     <group>
// //       <points ref={pointsRef}>
// //         <bufferGeometry>
// //           <bufferAttribute attach="attributes-position" args={[positions, 3]} />
// //         </bufferGeometry>
// //         <pointsMaterial size={0.06} color="#38bdf8" transparent opacity={0.7} />
// //       </points>
// //     </group>
// //   )
// // }

// // export default function DataPipeline3D() {
// //   return (
// //     <div style={{
// //       position: 'fixed',
// //       top: 0,
// //       left: 0,
// //       width: '100vw',
// //       height: '100vh',
// //       zIndex: -1,
// //       pointerEvents: 'none', // Taaki clicks content par easily ho sakein
// //       background: '#030712'
// //     }}>
// //       <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
// //         <color attach="background" args={['#030712']} />
// //         <ambientLight intensity={1.5} />
// //         <ImmersiveBackground />
// //       </Canvas>
// //     </div>
// //   )
// // }

// // import { Canvas, useFrame } from '@react-three/fiber'
// // import { Float, Stars, OrbitControls } from '@react-three/drei'
// // import * as THREE from 'three'
// // import { useRef, useMemo } from 'react'

// // function FloatingGeometries() {
// //   const groupRef = useRef(null)

// //   useFrame((state) => {
// //     if (!groupRef.current) return
// //     groupRef.current.rotation.y = state.clock.elapsedTime * 0.04
// //     groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05
// //   })

// //   return (
// //     <group ref={groupRef}>
// //       <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
// //         <mesh position={[-4, 2, -2]}>
// //           <boxGeometry args={[0.9, 0.9, 0.9]} />
// //           <meshStandardMaterial color="#0284c7" wireframe />
// //         </mesh>
// //       </Float>

// //       <Float speed={1.5} rotationIntensity={1} floatIntensity={1.2}>
// //         <mesh position={[4, -2, -3]}>
// //           <octahedronGeometry args={[1]} />
// //           <meshStandardMaterial color="#38bdf8" wireframe />
// //         </mesh>
// //       </Float>

// //       <Float speed={2.5} rotationIntensity={0.8} floatIntensity={2}>
// //         <mesh position={[3.5, 3, -4]}>
// //           <icosahedronGeometry args={[0.8]} />
// //           <meshStandardMaterial color="#818cf8" wireframe />
// //         </mesh>
// //       </Float>
// //     </group>
// //   )
// // }

// // function DataParticleField() {
// //   const pointsRef = useRef(null)
// //   const count = 700

// //   const [positions] = useMemo(() => {
// //     const pos = new Float32Array(count * 3)
// //     for (let i = 0; i < count * 3; i += 3) {
// //       pos[i] = (Math.random() - 0.5) * 30
// //       pos[i + 1] = (Math.random() - 0.5) * 30
// //       pos[i + 2] = (Math.random() - 0.5) * 20
// //     }
// //     return [pos]
// //   }, [])

// //   useFrame((state) => {
// //     if (!pointsRef.current) return
// //     pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
// //   })

// //   return (
// //     <points ref={pointsRef}>
// //       <bufferGeometry>
// //         <bufferAttribute attach="attributes-position" args={[positions, 3]} />
// //       </bufferGeometry>
// //       <pointsMaterial size={0.05} color="#38bdf8" transparent opacity={0.6} />
// //     </points>
// //   )
// // }

// // export default function DataPipeline3D() {
// //   return (
// //     <div style={{
// //       position: 'fixed',
// //       top: 0,
// //       left: 0,
// //       width: '100vw',
// //       height: '100vh',
// //       zIndex: -1,
// //       pointerEvents: 'none',
// //       background: '#030712'
// //     }}>
// //       <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
// //         <color attach="background" args={['#030712']} />
// //         <ambientLight intensity={1.5} />
// //         <directionalLight position={[5, 5, 5]} intensity={2} color="#38bdf8" />

// //         <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={1} />
// //         <DataParticleField />
// //         <FloatingGeometries />

// //         <OrbitControls 
// //           enableZoom={false} 
// //           enablePan={false} 
// //           autoRotate 
// //           autoRotateSpeed={0.5} 
// //         />
// //       </Canvas>
// //     </div>
// //   )
// // }

// // import { Canvas, useFrame } from '@react-three/fiber'
// // import { Float, Stars, OrbitControls } from '@react-three/drei'
// // import * as THREE from 'three'
// // import { useRef, useMemo } from 'react'

// // function FloatingGeometries() {
// //   const groupRef = useRef(null)

// //   useFrame((state) => {
// //     if (!groupRef.current) return
// //     groupRef.current.rotation.y = state.clock.elapsedTime * 0.04
// //     groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05
// //   })

// //   return (
// //     <group ref={groupRef}>
// //       <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
// //         <mesh position={[-4, 2, -2]}>
// //           <boxGeometry args={[0.9, 0.9, 0.9]} />
// //           <meshStandardMaterial color="#0284c7" wireframe />
// //         </mesh>
// //       </Float>

// //       <Float speed={1.5} rotationIntensity={1} floatIntensity={1.2}>
// //         <mesh position={[4, -2, -3]}>
// //           <octahedronGeometry args={[1]} />
// //           <meshStandardMaterial color="#38bdf8" wireframe />
// //         </mesh>
// //       </Float>

// //       <Float speed={2.5} rotationIntensity={0.8} floatIntensity={2}>
// //         <mesh position={[3.5, 3, -4]}>
// //           <icosahedronGeometry args={[0.8]} />
// //           <meshStandardMaterial color="#818cf8" wireframe />
// //         </mesh>
// //       </Float>
// //     </group>
// //   )
// // }

// // function DataParticleField() {
// //   const pointsRef = useRef(null)
// //   const count = 700

// //   const [positions] = useMemo(() => {
// //     const pos = new Float32Array(count * 3)
// //     for (let i = 0; i < count * 3; i += 3) {
// //       pos[i] = (Math.random() - 0.5) * 30
// //       pos[i + 1] = (Math.random() - 0.5) * 30
// //       pos[i + 2] = (Math.random() - 0.5) * 20
// //     }
// //     return [pos]
// //   }, [])

// //   useFrame((state) => {
// //     if (!pointsRef.current) return
// //     pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
// //   })

// //   return (
// //     <points ref={pointsRef}>
// //       <bufferGeometry>
// //         <bufferAttribute attach="attributes-position" args={[positions, 3]} />
// //       </bufferGeometry>
// //       <pointsMaterial size={0.05} color="#38bdf8" transparent opacity={0.6} />
// //     </points>
// //   )
// // }

// // export default function DataPipeline3D() {
// //   return (
// //     <div style={{
// //       position: 'fixed',
// //       top: 0,
// //       left: 0,
// //       width: '100vw',
// //       height: '100vh',
// //       zIndex: -1,
// //       pointerEvents: 'none',
// //       background: '#030712'
// //     }}>
// //       <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
// //         <color attach="background" args={['#030712']} />
// //         <ambientLight intensity={1.5} />
// //         <directionalLight position={[5, 5, 5]} intensity={2} color="#38bdf8" />

// //         <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={1} />
// //         <DataParticleField />
// //         <FloatingGeometries />

// //         <OrbitControls 
// //           enableZoom={false} 
// //           enablePan={false} 
// //           autoRotate 
// //           autoRotateSpeed={0.5} 
// //         />
// //       </Canvas>
// //     </div>
// //   )
// // }

// import { Canvas, useFrame } from '@react-three/fiber'
// import { Float, Stars, OrbitControls } from '@react-three/drei'
// import * as THREE from 'three'
// import { useRef, useMemo } from 'react'

// function FloatingGeometries() {
//   // Explicitly typing the ref as THREE.Group
//   const groupRef = useRef<THREE.Group>(null)

//   useFrame((state) => {
//     if (!groupRef.current) return
//     groupRef.current.rotation.y = state.clock.elapsedTime * 0.04
//     groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05
//   })

//   return (
//     <group ref={groupRef}>
//       <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
//         <mesh position={[-4, 2, -2]}>
//           <boxGeometry args={[0.9, 0.9, 0.9]} />
//           <meshStandardMaterial color="#0284c7" wireframe />
//         </mesh>
//       </Float>
//     </group>
//   )
// }

// function DataParticleField() {
//   // Explicitly typing the ref as THREE.Points
//   const pointsRef = useRef<THREE.Points>(null)
//   const count = 700

//   const [positions] = useMemo(() => {
//     const pos = new Float32Array(count * 3)
//     for (let i = 0; i < count * 3; i += 3) {
//       pos[i] = (Math.random() - 0.5) * 30
//       pos[i + 1] = (Math.random() - 0.5) * 30
//       pos[i + 2] = (Math.random() - 0.5) * 20
//     }
//     return [pos]
//   }, [])

//   useFrame((state) => {
//     if (!pointsRef.current) return
//     pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
//   })

//   return (
//     <points ref={pointsRef}>
//       <bufferGeometry>
//         <bufferAttribute attach="attributes-position" args={[positions, 3]} />
//       </bufferGeometry>
//       <pointsMaterial size={0.05} color="#38bdf8" transparent opacity={0.6} />
//     </points>
//   )
// }

// export default function DataPipeline3D() {
//   return (
//     <div style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100vw',
//       height: '100vh',
//       zIndex: -1,
//       pointerEvents: 'none',
//       background: '#030712'
//     }}>
//       <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
//         <color attach="background" args={['#030712']} />
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[5, 5, 5]} intensity={2} color="#38bdf8" />

//         <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={1} />
//         <DataParticleField />
//         <FloatingGeometries />

//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//       </Canvas>
//     </div>
//   )
// }
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useMemo } from 'react'

// Futuristic 3D Data Core / Network Grid in background
function DataCore() {
  const coreRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!coreRef.current) return
    coreRef.current.rotation.y = state.clock.elapsedTime * 0.05
    coreRef.current.rotation.z = state.clock.elapsedTime * 0.03
  })

  return (
    <group ref={coreRef} position={[2.5, 0, -2]}>
      {/* Outer Tech Ring */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#0284c7" emissive="#38bdf8" emissiveIntensity={0.8} transparent opacity={0.6} />
      </mesh>

      {/* Inner Rotating Globe / Icosahedron */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0284c7" emissiveIntensity={0.4} wireframe transparent opacity={0.5} />
        </mesh>
      </Float>

      {/* Core Center Pulse */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={1} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Rich Data Particle Field
function DataParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 700

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 25
      pos[i + 1] = (Math.random() - 0.5) * 25
      pos[i + 2] = (Math.random() - 0.5) * 15
    }
    return [pos]
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#0284c7" transparent opacity={0.7} />
    </points>
  )
}

export default function DataPipeline3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={['#f8fafc']} />
        
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />

        <DataParticleField />
        <DataCore />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>
    </div>
  )
}