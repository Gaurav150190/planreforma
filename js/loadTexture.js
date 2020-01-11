function loadContructionTexture(obj) {
    let loader = new THREE.TextureLoader();
    loader.load(obj.path, function (texture) {
        isMainObjGrp.traverse(function (child) {
            if (child.isMesh && child.name.indexOf(obj.name) > -1)
                child.traverse(function (innerChild) {
                    if (innerChild.material) {
                        let material;
                        if (Array.isArray(innerChild.material))
                            material = innerChild.material.find(t => t.name.indexOf(obj.name) > -1);
                        else
                            material = innerChild.material.name.indexOf(obj.name) > -1;
                        if (material) {
                            material.map = texture;
                            material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
                            material.map.repeat.set(0.01, 0.02);
                            material.needsUpdate = true;
                        }
                    }
                })
        });
    });
}
