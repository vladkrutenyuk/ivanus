import { useEffect, useRef } from "react"
import styled from "styled-components"
import * as THREE from "three"
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader"

const Ivan3D = () => {
    const canvasContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        canvasContainerRef.current &&
            mount(canvasContainerRef.current)

        return unmount
    }, [])

    return (
        <CanvasContainer ref={canvasContainerRef} />
    )
}

export default Ivan3D

const CanvasContainer = styled.div`
    width: 500px;
    height: 400px;
`

const IVAN_MODEL_PATH = '/3dmodels/ivan_3.fbx'
const IVAN_TEXTURE_PATH = '/3dmodels/ivan_3_white.jpg'

const IVAN_SWING_ANIM_PATH = '/3dmodels/ivan_3@swing_dancing.fbx'
const IVAN_FLAIR_ANIM_PATH = '/3dmodels/ivan_3@flair.fbx'
const IVAN_MARTELO_ANIM_PATH = '/3dmodels/ivan_3@martelo.fbx'

let hasBeenInited = false
let renderer: THREE.WebGLRenderer
let camera: THREE.PerspectiveCamera
let scene: THREE.Scene
let clock: THREE.Clock
let mixer: THREE.AnimationMixer
let grid: THREE.GridHelper
let canvasContainer: HTMLElement
let resizeObserver: ResizeObserver
let animationFrameId: number

const updateRender = () => {
    renderer.render(scene, camera)
}

const init = async () => {
    if (hasBeenInited) {
        console.warn('Three Rendering has already been initialized!')
    }
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor( 0x000000, 0 )

    scene = new THREE.Scene()

    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200)
    camera.position.set(-0.1, 0.8, 2.5)
    camera.lookAt(0, 0.8, 0)

    grid = new THREE.GridHelper(2, 10, 0xaaa)

    scene.add(camera, grid)

    hasBeenInited = true

    clock = new THREE.Clock()
    const fbxLoader = new FBXLoader()
    const model = await fbxLoader.loadAsync(IVAN_MODEL_PATH)

    const textureLoader = new THREE.TextureLoader()
    const texture = await textureLoader.loadAsync(IVAN_TEXTURE_PATH)

    model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshBasicMaterial({
                map: texture
            })
        }
    })

    mixer = new THREE.AnimationMixer(model)
    const animationModel = await fbxLoader.loadAsync(IVAN_SWING_ANIM_PATH)
    const action = mixer.clipAction(animationModel.animations[0])
    action.play()

    scene.add(model)
}

const setSize = () => {
    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight)
    camera.aspect = canvasContainer.offsetWidth / canvasContainer.offsetHeight
    camera.updateProjectionMatrix()
    updateRender()
}

// const onScroll = () => {
//     let t = THREE.MathUtils.clamp(window.scrollY / 899, 0, 1.3)
//     const y = THREE.MathUtils.lerp(7, 2, t)
//     camera.position.setY(y)
//     const angle = THREE.MathUtils.lerp(-0.2, 0, t)
//     camera.rotation.set(angle, 0, 0)
//     updateRender()
// }

const animate = () => {
    animationFrameId = requestAnimationFrame( animate );
    mixer?.update(clock.getDelta())
    updateRender()
}

const mount = async (canvasContainerRef: HTMLElement) => {
    if (!hasBeenInited) {
        await init()
    }
    
    canvasContainer = canvasContainerRef
    canvasContainer.append(renderer.domElement)

    resizeObserver = new ResizeObserver(setSize)
    resizeObserver.observe(canvasContainer)
    setSize()
    animate()

    // window.addEventListener('scroll', onScroll)
    // onScroll()
}

const unmount = () => {
    renderer.domElement.remove()
    resizeObserver && resizeObserver.disconnect()
    cancelAnimationFrame(animationFrameId)

    // window.removeEventListener('scroll', onScroll)
}