var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
var devicePixelRatio = window.devicePixelRatio || 1;
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.background = new THREE.Color(0xffffff);
scene.add(cube);
//loadFbx();
camera.position.z = 12;
var ambient = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambient);
var directionLight1 = new THREE.DirectionalLight(0xffffff, 0.2);
//directionLight1.castShadow = true;
scene.add(directionLight1);
var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();