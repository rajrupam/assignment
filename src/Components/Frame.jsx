import React, { useMemo } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Frame = ({
  width,
  height,
  depth = 0.2,
  horizontalSections,
  verticalSections,
  borderThickness,
  sectionThickness,
}) => {
  const frameGroup = useMemo(() => {
    const frame = new THREE.Group();

    const material = new THREE.MeshBasicMaterial({ color: "black" });
    const geometries = [
      new THREE.BoxGeometry(width + borderThickness, borderThickness, depth),
      new THREE.BoxGeometry(width + borderThickness, borderThickness, depth),
      new THREE.BoxGeometry(borderThickness, height, depth),
      new THREE.BoxGeometry(borderThickness, height, depth),
    ];

    const positions = [
      [0, height / 2, 0],
      [0, -height / 2, 0],
      [-width / 2, 0, 0],
      [width / 2, 0, 0],
    ];

    geometries.forEach((geometry, index) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...positions[index]);
      frame.add(mesh);
    });

    for (let i = 1; i < horizontalSections; i++) {
      const y = height / 2 - (i * height) / horizontalSections;
      const geometry = new THREE.BoxGeometry(width, sectionThickness, depth);
      const sectionMesh = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({ color: "gray" })
      );
      sectionMesh.position.set(0, y, 0);
      frame.add(sectionMesh);
    }

    for (let i = 1; i < verticalSections; i++) {
      const x = -width / 2 + (i * width) / verticalSections;
      const geometry = new THREE.BoxGeometry(sectionThickness, height, depth);
      const sectionMesh = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({ color: "gray" })
      );
      sectionMesh.position.set(x, 0, 0);
      frame.add(sectionMesh);
    }

    return frame;
  }, [
    width,
    height,
    horizontalSections,
    verticalSections,
    borderThickness,
    sectionThickness,
    depth,
  ]);

  return <primitive object={frameGroup} />;
};

export default Frame;
