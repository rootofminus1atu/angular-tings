import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as THREE from "three"

@Component({
  selector: 'app-canvas-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas-box.component.html',
  styleUrl: './canvas-box.component.css'
})
export class CanvasBoxComponent {
  ngOnInit() {
    this.boxAnimation()
  }

  boxAnimation() {
    const canvas = document.getElementById('canvas-box')
    const scene = new THREE.Scene()

    // creating 3 line materials (all have different colors)
    const xAxisMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const yAxisMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    const zAxisMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

    // creating the axes geometries
    const xAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(100, 0, 0)
    ])

    const yAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 100, 0),
    ])

    const zAxisGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 100),
    ])

    // finally the axes
    const xAxis = new THREE.Line(xAxisGeometry, xAxisMaterial)
    const yAxis = new THREE.Line(yAxisGeometry, yAxisMaterial)
    const zAxis = new THREE.Line(zAxisGeometry, zAxisMaterial)

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshPhongMaterial({ color: 0xff00ff })
    )

    scene.add(xAxis, yAxis, zAxis, cube);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(0, 1, 0); // Set light position
    scene.add(directionalLight);

    const canvasSizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    const camera = new THREE.PerspectiveCamera(
      75,
      canvasSizes.width / canvasSizes.height,
      0.001,
      1000
    )
    camera.position.set(150, 50, 150)
    camera.lookAt(0, 0, 0)
    scene.add(camera)

    if (!canvas) {
      return
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })
    renderer.setClearColor(0xe232222, 1)
    renderer.setSize(canvasSizes.width, canvasSizes.height)
    renderer.render(scene, camera)

    window.addEventListener('resize', () => {
      canvasSizes.width = window.innerWidth
      canvasSizes.height = window.innerHeight
      
      camera.aspect = canvasSizes.width / canvasSizes.height
      camera.updateProjectionMatrix()

      renderer.setSize(canvasSizes.width, canvasSizes. height)
      renderer.render(scene, camera)
    })

    const clock = new THREE.Clock()
    const animatedGeometry = () => {
      const elapsedTime = clock.getElapsedTime()

      cube.rotation.x = elapsedTime
      cube.rotation.y = elapsedTime
      cube.rotation.z = elapsedTime

      renderer.render(scene, camera)

      window.requestAnimationFrame(animatedGeometry)
    }

    animatedGeometry()
  }

  createThreeJsBox() {
    const canvas = document.getElementById('canvas-box')

    const scene = new THREE.Scene()

    /*
    const phongMaterial = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.common,
        THREE.UniformsLib.lights
      ]),
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
          float intensity = dot(vNormal, lightDir);
          gl_FragColor = vec4(intensity, intensity, intensity, 1.0);
        }
      `,
      lights: true
    });*/

    const material = new THREE.MeshToonMaterial()
    const m1 = new THREE.MeshPhongMaterial({ color: 0xff0000 }); // Red
    const m2 = new THREE.MeshPhongMaterial({ color: 0x00ff00 }); // Green

    const ambientLight = new THREE.AmbientLight(0xff55ff, 0.6)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xff00ff, 1)
    pointLight.position.x = 2
    pointLight.position.y = 2
    pointLight.position.z = 2
    scene.add(pointLight)

    const box = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 1.5, 1.5),
      m1
    )

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(5, 1.5, 16, 100),
      m2
    )

    scene.add(torus, box)

    const canvasSizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    const camera = new THREE.PerspectiveCamera(
      75,
      canvasSizes.width / canvasSizes.height,
      0.001,
      1000
    )
    camera.position.z = 30
    scene.add(camera)

    if (!canvas) {
      return
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })
    renderer.setClearColor(0xe232222, 1)
    renderer.setSize(canvasSizes.width, canvasSizes.height)
    renderer.render(scene, camera)

    window.addEventListener('resize', () => {
      canvasSizes.width = window.innerWidth
      canvasSizes.height = window.innerHeight
      
      camera.aspect = canvasSizes.width / canvasSizes.height
      camera.updateProjectionMatrix()

      renderer.setSize(canvasSizes.width, canvasSizes. height)
      renderer.render(scene, camera)
    })

    const clock = new THREE.Clock()
    const animatedGeometry = () => {
      const elapsedTime = clock.getElapsedTime()

      box.rotation.x = elapsedTime
      box.rotation.y = elapsedTime
      box.rotation.z = elapsedTime

      torus.rotation.x = - elapsedTime
      torus.rotation.y = - elapsedTime
      torus.rotation.z = - elapsedTime

      renderer.render(scene, camera)

      window.requestAnimationFrame(animatedGeometry)
    }

    animatedGeometry()
  }
}
