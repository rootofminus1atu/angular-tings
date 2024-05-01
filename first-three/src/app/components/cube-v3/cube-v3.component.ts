import { Component } from '@angular/core';
import * as THREE from "three"


@Component({
  selector: 'app-cube-v3',
  standalone: true,
  imports: [],
  templateUrl: './cube-v3.component.html',
  styleUrl: './cube-v3.component.css'
})
export class CubeV3Component {
  private scene!: THREE.Scene
  private camera!: THREE.PerspectiveCamera
  private renderer!: THREE.WebGLRenderer
  private thing!: THREE.Object3D

  ngOnInit() {
    this.setupScene()
  }

  setupScene() {
    const canvas = document.getElementById('canvas-v3');
    this.scene = new THREE.Scene();

    const xAxisMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const yAxisMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const zAxisMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

    const xAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(100, 0, 0)
    ]);

    const yAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 100, 0),
    ]);

    const zAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 100),
    ]);

    const xAxis = new THREE.Line(xAxisGeometry, xAxisMaterial);
    const yAxis = new THREE.Line(yAxisGeometry, yAxisMaterial);
    const zAxis = new THREE.Line(zAxisGeometry, zAxisMaterial);

    this.scene.add(xAxis, yAxis, zAxis);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(0, 1, 0);
    this.scene.add(directionalLight);

    const canvasSizes = {
      width: 400,
      height: 400
    };

    this.camera = new THREE.PerspectiveCamera(
      75,
      canvasSizes.width / canvasSizes.height,
      0.001,
      1000
    );
    this.camera.position.set(40, 20, 40);
    this.camera.lookAt(0, 10, 0);
    this.scene.add(this.camera);

    if (!canvas) {
      return;
    }

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    this.renderer.setClearColor(0xe232222, 1);
    this.renderer.setSize(canvasSizes.width, canvasSizes.height);
    console.log("rendering setup")
    this.render()
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    console.log("animating")
  }

}
