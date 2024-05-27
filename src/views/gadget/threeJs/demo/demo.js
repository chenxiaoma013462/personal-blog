import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
export default class ThreeJsDemo {
  scene = THREE.Scene
  camera = THREE.PerspectiveCamera
  renderer = THREE.WebGLRenderer
  ambientLight = THREE.AmbientLight
  mesh = THREE.Mesh

  constructor() {
    this.init()
  }

  init = () => {
    // this.setStats()
    // this.setScene()
    this.setCamera()
    this.setRenderer()
    this.setCube()
    this.render()
  }
  // ·新建相机
  setCamera = () => {
    // 第二参数就是 长度和宽度比 默认采用浏览器  返回以像素为单位的窗口的内部宽度和高度
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.z = 10
  }
  // 设置渲染器
  setRenderer = () => {
    this.renderer = new THREE.WebGLRenderer()
    // 设置画布的大小
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    //这里 其实就是canvas 画布  renderer.domElement
    document.body.appendChild(this.renderer.domElement)
  }
  // 设置环境光
  setLight = () => {
    if (this.scene) {
      this.ambientLight = new THREE.AmbientLight(0xffffff) // 环境光
      this.scene.add(this.ambientLight)
    }
  }
  // 创建网络模型
  setCube = () => {
    const loader = new FontLoader()
    loader.load('/assets/fonts/helvetiker_regular.typeface.json', (res) => {
      if (this.scene) {
        const font = new TextGeometry('hello juejin', {
          font: res,
          size: 0.8,
          height: 0.1,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.1,
          bevelSize: 0.05,
          bevelSegments: 3
        })
        font.center()
        const material = new THREE.MeshNormalMaterial({
          flatShading: true,
          transparent: true,
          opacity: 0.9
        })
        this.mesh = new THREE.Mesh(font, material)
        this.mesh.position.set(0, 0, 0)
        this.scene.add(this.mesh)
      }
    })
  }
  // 渲染函数
  render = () => {
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera)
    }
  }
}
