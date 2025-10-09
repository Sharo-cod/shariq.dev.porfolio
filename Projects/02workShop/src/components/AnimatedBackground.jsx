import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AnimatedBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0a0a0a, 1);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(30, 30, 90, 90);
    const material = new THREE.MeshPhongMaterial({
      color: 0x111111,
      emissive: 0x06b6d4, // cyan glow
      emissiveIntensity: 0.4,
      side: THREE.DoubleSide,
      wireframe: false,
      flatShading: true,
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2.5;
    scene.add(plane);

    const dirLight = new THREE.DirectionalLight(0x00aaff, 0.8);
    dirLight.position.set(2, 4, 5);
    scene.add(dirLight);

    const ambient = new THREE.AmbientLight(0x0088ff, 0.3);
    scene.add(ambient);

    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.1);

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();
      const position = geometry.attributes.position;

      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        const z =
          Math.sin(x * 0.25 + time * 0.6) * 0.2 +
          Math.cos(y * 0.3 + time * 0.5) * 0.2;
        position.setZ(i, z);
      }

      position.needsUpdate = true;

      camera.position.x = Math.sin(time * 0.1) * 0.5;
      camera.position.y = Math.cos(time * 0.1) * 0.3;

      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden"
    />
  );
}
