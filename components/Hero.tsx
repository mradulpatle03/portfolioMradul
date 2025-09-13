"use client";

import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

function GlowingSphere() {
  return (
    <Sphere args={[1, 64, 64]} scale={2.5}>
      <meshStandardMaterial
        color={"#8b5cf6"} // Purple
        emissive={"#a78bfa"} // Glow color
        emissiveIntensity={1.2}
        roughness={0.3}
        metalness={0.7}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-20">
      {/* === Background subtle glow === */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-80 -z-10" />

      {/* === Left: Text Content === */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Mradul
          </span>
        </h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-medium text-gray-300">
          MERN Stack Developer
        </h2>
        <p className="mt-6 max-w-xl text-gray-400">
          I design and build modern web applications with clean architecture,
          smooth animations, and interactive 3D experiences.
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="glass px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            View My Work
          </a>
        </div>
      </motion.div>

      {/* === Right: 3D Sphere === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex-1 flex items-center justify-center h-[400px] md:h-[500px] w-full"
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1.5} />
          <GlowingSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </motion.div>
    </section>
  );
}
