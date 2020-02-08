function loadContructionTexture(obj) {
    let loader = new THREE.TextureLoader();
    loader.load(obj.path, function (texture) {
        isMainObjGrp.traverse(function (child) {
            if (child.isMesh && child.name.indexOf(obj.name) > -1)
                child.traverse(function (innerChild) {
                    let material;
                    if (innerChild.material) {
                        //let material = innerChild.material;
                        if (Array.isArray(innerChild.material))
                            material = innerChild.material.find(t => t.name.replace(/ /g, '_').replace(/\//g, '-').indexOf(obj.name) > -1);
                        else
                            material = innerChild.material;

                        //material = (innerChild.material.name.indexOf(obj.name) > -1) ? innerChild.material : false;
                        if (material) {
                            material.map = texture;
                            material.bumpScale = 0;
                            material.map.wrapS = material.map.wrapT = THREE.RepeatWrapping;
                            material.map.repeat.set(0.1, 0.2);
                            material.needsUpdate = true;
                        }
                        loadRenderedImage();
                    }
                })
        });
    });
}
