import { Component } from '@angular/core';
import * as THREE from "three"

@Component({
  selector: 'app-cube-v2',
  standalone: true,
  imports: [],
  templateUrl: './cube-v2.component.html',
  styleUrl: './cube-v2.component.css'
})
export class CubeV2Component {
  private scene!: THREE.Scene
  private camera!: THREE.PerspectiveCamera
  private renderer!: THREE.WebGLRenderer
  private cube!: THREE.Mesh
  private box!: THREE.Object3D

  ngOnInit() {
    this.setupScene()
    // this.setupCube()
    this.setupBox()
  }

  setupScene() {
    const canvas = document.getElementById('canvas-v2');
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
    console.log("rendering")
    this.render()
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  setupBox() {
    const textureLoader = new THREE.TextureLoader();
    const textureURL = 'assets/pope.png';

    const _ = textureLoader.load(textureURL, (texture) => {
        console.log('Texture loaded successfully:', texture);
        this.renderBox(texture);
    }, undefined, (error) => {
        console.error('Error loading texture:', error);
    });
  }

  renderBox(texture: THREE.Texture) {
    this.box = new THREE.Object3D()

    const boxSize = { 
      width: 20, 
      height: 20, 
      depth: 20 
    }

    const material = new THREE.MeshPhongMaterial({ color: 0xffffff, side: THREE.DoubleSide });

    const planeGeometries = [
      new THREE.PlaneGeometry(boxSize.width, boxSize.height), // front
      new THREE.PlaneGeometry(boxSize.width, boxSize.height), // back
      new THREE.PlaneGeometry(boxSize.depth, boxSize.height), // right
      new THREE.PlaneGeometry(boxSize.depth, boxSize.height), // left
      new THREE.PlaneGeometry(boxSize.width, boxSize.depth), // top
      new THREE.PlaneGeometry(boxSize.width, boxSize.depth), // bottom
    ];

    const planes = planeGeometries.map(geometry => new THREE.Mesh(geometry, material));

    planes[0].position.set(0, 0, boxSize.depth / 1); // front
    planes[1].position.set(0, 0, -boxSize.depth / 2); // back
    planes[2].position.set(boxSize.width / 2, 0, 0); // right
    planes[2].rotation.y = Math.PI / 2; // rotate right plane to be perpendicular to front/back
    planes[3].position.set(-boxSize.width / 2, 0, 0); // left
    planes[3].rotation.y = -Math.PI / 2; // rotate left plane to be perpendicular to front/back
    planes[4].position.set(0, boxSize.height / 2, 0); // top
    planes[4].rotation.x = -Math.PI / 2; // rotate top plane to be perpendicular to front/back
    planes[5].position.set(0, -boxSize.height / 2, 0); // bottom
    planes[5].rotation.x = Math.PI / 2; // rotate bottom plane to be perpendicular to front/back

    planes.forEach(plane => this.box.add(plane));

    this.scene.add(this.box);
    this.render()
  }


  setupCube() {
    const textureLoader = new THREE.TextureLoader();
    const textureURL = 'assets/pope.png';

    const _ = textureLoader.load(textureURL, (texture) => {
        console.log('Texture loaded successfully:', texture);
        this.renderCube(texture);
    }, undefined, (error) => {
        console.error('Error loading texture:', error);
    });
  }

  renderCube(texture: THREE.Texture) {
    const materials = [
      new THREE.MeshBasicMaterial({ map: texture }), // Right face
      new THREE.MeshBasicMaterial({ map: texture }), // Left face
      new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Top face
      new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Bottom face
      new THREE.MeshBasicMaterial({ map: texture }), // Front face with PNG texture
      new THREE.MeshBasicMaterial({ map: texture })  // Back face
    ];

    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(20, 20, 20),
      materials
    );
    this.cube.position.set(0, 0, 0);
    this.scene.add(this.cube);

    this.render();
  }

  animateRotate() {
    // const radians = Math.PI / 8
    // const quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), radians)
    // this.cube.quaternion.multiplyQuaternions(quaternion, this.cube.quaternion)
    // const duration = 1000

    const radians = Math.PI / 4
    const duration = 1  // for THREE.Clock() this is seconds

    const startQuaternion = this.cube.quaternion.clone()
    const targetQuaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), radians)
    const clock = new THREE.Clock()

    const animateFrame = () => {
      const elapsed = clock.getElapsedTime()
      const progress = Math.min(elapsed / duration, 1)
      console.log('animating, progress:', progress)
      const interpolateQuaternion = new THREE.Quaternion().slerp(targetQuaternion, progress)

      const newQuaternion = new THREE.Quaternion().multiplyQuaternions(startQuaternion, interpolateQuaternion)

      this.cube.setRotationFromQuaternion(newQuaternion)

      this.render()

      if (progress < 1) {
        requestAnimationFrame(animateFrame)
      } else {
        console.log("done")
      }

      // this.render()
    }

    animateFrame()
  }

  animate() {
    const initialY = this.cube.position.y;
    const targetY = initialY + 50;
    const duration = 1000; // milliseconds
    const start = performance.now();

    const animateFrame = (timestamp: number) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const newY = initialY + (targetY - initialY) * progress;
      this.cube.position.setY(newY);

      this.render()

      if (progress < 1) {
        requestAnimationFrame(animateFrame);
      }
    };

    requestAnimationFrame(animateFrame);
  }
}
