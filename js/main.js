
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);
var renderer = new THREE.WebGLRenderer(
    {
        antialias: true,
        preserveDrawingBuffer: true
    }
);
renderer.setSize(window.innerWidth, window.innerHeight);
var devicePixelRatio = window.devicePixelRatio || 1;
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
scene.background = new THREE.Color(0x000000);
loadFbx('toilet.fbx', { x: 0, y: -100, z: 0 });
camera.position.set(37.9, 7.6, -63.8);
var ambient = new THREE.AmbientLight(0xffffff, 0.7);
//scene.add(ambient);
var directionLight1 = new THREE.DirectionalLight(0xffffff, 0.3);
directionLight1.castShadow = true;
directionLight1.shadow.camera.top = 180;
directionLight1.shadow.camera.bottom = - 100;
directionLight1.shadow.camera.left = - 120;
directionLight1.shadow.camera.right = 120;
//scene.add(directionLight1);

var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();