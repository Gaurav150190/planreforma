var reflectionCube;
scene = new THREE.Scene();
function loadCubemap() {

    var path = "cubemap/Park3Med/";
    var format = '.png';
    var urls = [
        path + 'front' + format, path + 'back' + format,
        path + 'top' + format, path + 'bottom' + format,
        path + 'left' + format, path + 'right' + format
    ];

    reflectionCube = new THREE.CubeTextureLoader().load(urls);
    reflectionCube.format = THREE.RGBFormat;
    //scene.background = reflectionCube;
}
loadCubemap();
