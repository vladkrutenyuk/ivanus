import * as THREE from "three";
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";

let hasBeenInited = false
let renderer: THREE.WebGLRenderer
let camera: THREE.PerspectiveCamera
let scene: THREE.Scene
let light: THREE.DirectionalLight
let grid: THREE.GridHelper
let plane: THREE.Mesh
let canvasContainer: HTMLElement
let resizeObserver: ResizeObserver

const init = async () => {
    if (hasBeenInited) {
        console.warn('Three Rendering has already been initialized!')
    }
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)
    const fogStart = 5
    const fogDist = 25
    scene.fog = new THREE.Fog(0xffffff, fogStart, fogStart + fogDist);

    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200) //TODO aspect
    camera.position.set(0, 4, 5)

    grid = new THREE.GridHelper(100, 60, 0xffffff, 0xffffff)

    light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(0, 1, 1)
    light.lookAt(0, 0, 0)
    light.castShadow = true
    light.shadow.mapSize.width = 2048
    light.shadow.mapSize.height = 2048
    light.shadow.camera.near = 0.5
    light.shadow.camera.far = 500

    const shadowCameraSize = 20
    light.shadow.camera.top = shadowCameraSize
    light.shadow.camera.bottom = -shadowCameraSize
    light.shadow.camera.left = -shadowCameraSize
    light.shadow.camera.right = shadowCameraSize

    plane = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100),
        new THREE.MeshStandardMaterial({color: 0xffffff}))
    plane.rotateX(THREE.MathUtils.degToRad(-90))
    plane.position.set(0, -0.5, -15)
    plane.receiveShadow = true

    scene.add(camera, grid, light, plane)
    hasBeenInited = true

    const womanFbx = '/models/woman/woman_fixed.fbx'
    const womanLayingAnimFbx = '/models/woman/woman@laying.fbx'
    const womanLegUpAnimFbx = '/models/woman/woman@legup.fbx'
    const fbxLoader = new FBXLoader()

    const women = async (animationFilePath: string) => {
        console.time('women')
        const model = await fbxLoader.loadAsync(womanFbx)
        model.castShadow = true
        model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshNormalMaterial()
                child.castShadow = true
            }
        })
        const mixer = new THREE.AnimationMixer(model)
        const animationModel = await fbxLoader.loadAsync(animationFilePath)
        const action = mixer.clipAction(animationModel.animations[0])
        action.play()

        model.scale.setScalar(6)

        mixer.update(0.1)
        console.timeEnd('women')
        scene.add(model)
        return model
    }

    const womenRight = await women(womanLegUpAnimFbx)
    womenRight.position.set(6.3,0 , -10)
    womenRight.scale.setScalar(5.5)
    womenRight.rotateY(15.1)
    renderer.render(scene, camera)

    const womenLeft = await women(womanLayingAnimFbx)
    womenLeft.position.set(-5, 0 , -8.5)
    womenLeft.scale.setZ(-6)
    womenLeft.rotateY(-160)
    renderer.render(scene, camera)
}

const update = () => {
    renderer.render(scene, camera)
}

const setSize = () => {
    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight)
    camera.aspect = canvasContainer.offsetWidth / canvasContainer.offsetHeight
    camera.updateProjectionMatrix()
    update()
}

const onScroll = () => {
    let t = THREE.MathUtils.clamp(window.scrollY / 899, 0, 1.3)
    const y = THREE.MathUtils.lerp(7, 2, t)
    camera.position.setY(y)
    const angle = THREE.MathUtils.lerp(-0.2, 0, t)
    camera.rotation.set(angle, 0, 0)
    update()
}

const mount = (canvasContainerRef: HTMLElement) => {
    if (!hasBeenInited) {
        threeRendering.init().then(update)
    }
    canvasContainer = canvasContainerRef
    canvasContainer.append(renderer.domElement)

    resizeObserver = new ResizeObserver(setSize)
    resizeObserver.observe(canvasContainer)
    setSize()

    window.addEventListener('scroll', onScroll)
    onScroll()
}

const unmount = () => {
    renderer.domElement.remove()

    resizeObserver.disconnect()

    window.removeEventListener('scroll', onScroll)
}

const threeRendering = {
    init,
    mount,
    unmount
}

export default threeRendering