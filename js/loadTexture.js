function loadContructionTextureOrColor(name, type) {
    var item = isMainObjGrp.children[0].children.find(elem => elem.name.indexOf(name) > -1);
    if (type.toLowerCase() == 'color') {
        item.material.color = new THREE.Color(0xffffff);
    }
    else if (type.toLowerCase() == 'texture') {
        let loader = new THREE.TextureLoader();
        loader.load('', function (texture) {
            item.map = texture;
        });
    }

}