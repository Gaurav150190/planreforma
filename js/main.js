var rendererCount = 0, totalCount = 0;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000000);
var renderer = new THREE.WebGLRenderer(
    {
        antialias: true,
        preserveDrawingBuffer: true
    }
);
renderer.setSize(window.innerWidth, window.innerHeight);
var devicePixelRatio = window.devicePixelRatio || 1;
renderer.setPixelRatio(devicePixelRatio);
document.getElementById("abc").appendChild(renderer.domElement);
//document.body.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
scene.background = new THREE.Color(0xffffff);
loadFbx({ path: 'content/model/sampleFBX011.fbx' }, { x: 0, y: -100, z: 0 });
camera.position.set(-28.92737219729685, 13.59973409898459, -77.82415521671935);
var ambient = new THREE.AmbientLight(0xffffff, 0.7);
//scene.add(ambient);
var directionLight1 = new THREE.DirectionalLight(0xffffff, 0.3);
directionLight1.castShadow = true;
directionLight1.shadow.camera.top = 180;
directionLight1.shadow.camera.bottom = - 100;
directionLight1.shadow.camera.left = - 120;
directionLight1.shadow.camera.right = 120;
//scene.add(directionLight1);

var spotlight = new THREE.SpotLight(0xffffff);
//spotlight.castShadow = true;
spotlight.angle = 1.2;
spotlight.penumbra = 0.2;
spotlight.intensity = 0.3;
spotlight.position.set(61.72, 106.15, -1.823);

scene.add(spotlight);

var spotlight1 = new THREE.SpotLight(0xffffff);
spotlight1.angle = 1;
spotlight1.penumbra = 0.2;
spotlight1.intensity = 0.3;
spotlight1.position.set(-17.74, 106.15, -1.823);
//spotlight1.castShadow = true;
scene.add(spotlight1);

var spotlight2 = new THREE.SpotLight(0xffffff);
spotlight2.angle = 1;
spotlight2.penumbra = 0.2;
spotlight2.intensity = 0.3;
spotlight2.position.set(-97.60, 106.15, -1.823);
//spotlight2.castShadow = true;
scene.add(spotlight2);

var geometry = new THREE.PlaneBufferGeometry(119.99, 59.99, 1.904);
var verticalMirror = new THREE.Reflector(geometry, {
    clipBias: 0.003,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0x889999,
    recursion: 1
});
verticalMirror.position.set(-67.64, 50, 97.04);
verticalMirror.scale.z = -1;
scene.add(verticalMirror);


var animate = function () {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}
window.addEventListener('resize', onWindowResize, false);

function getData(arr) {
    rendererCount = 0;
    totalCount = arr.length;
    arr.forEach(t => {
        loadConstructionUnit(t.type, t.name, t.action, t.url);
    });
}
function loadConstructionUnit(type, name, action, url) {

    name = name.replace(/ /g, '_').replace(/\//g, '-');
    if (type.toLowerCase() == 'model') {
        loadConstructionModelByName({ name: name, path: url, action: action });
    }
    else if (type.toLowerCase() == 'texture') {
        loadContructionTexture({ name: name, path: url, action: action });
    }
}

function loadRenderedImage() {
    rendererCount++;
    if (rendererCount == totalCount) {
        setTimeout(function () {
            getImage();
        }, 100);
    }
}