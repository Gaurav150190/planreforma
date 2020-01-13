var isNewObjGrp = new THREE.Group();
var isMainObjGrp = new THREE.Group();
var isReplaceItem;
function getLoader(name) {
    let loader;
    let format = name.toLowerCase().split('.').pop();
    switch (format) {
        case 'fbx':
            loader = new THREE.FBXLoader();
            break;
        case '3ds':
            loader = new THREE.TDSLoader();
            break;
    }
    return loader;
}
function loadFbx(objPath, position, isModel, refBox) {
    let loader = getLoader(objPath);
    loader.load(objPath, function (object, text) {
        object.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                //child.receiveShadow = true;
            }
            if (child.type.toLowerCase().indexOf('light') > -1) {
                child.intensity = 0.8;
            }
            if (child.material) {
                child.material.side = THREE.DoubleSide;
            }
        });
        object.position.set(position.x, position.y, position.z);
        if (isModel) {
            object.rotation.x = -Math.PI / 2;
            isNewObjGrp.children = [];
            scene.remove(isNewObjGrp);
            resizeObject(refBox.getSize(), object);
            setObjPosition(refBox, object);
            isNewObjGrp.add(object);
            scene.add(isNewObjGrp);
        }
        else {
            isMainObjGrp.add(object);
            scene.add(isMainObjGrp);
        }
    }, undefined, function (error) {

        error = error;
    });

}

function loadConstructionModelByName(obj) {
    isReplaceItem = isMainObjGrp.children[0].children.find(elem => elem.name.indexOf(obj.name) > -1);
    if (obj.action.toLowerCase() == 'delete') {
        isReplaceItem.visible = false;
        return;
    }

    isReplaceItem.visible = false;
    let refBox = new THREE.Box3().setFromObject(isReplaceItem);
    loadFbx(obj.path, isReplaceItem.position, true, refBox);
}

function resizeObject(size, object) {
    let objSize = (new THREE.Box3().setFromObject(object)).getSize();
    if (size.x < size.z && objSize.x > objSize.z) {
        object.rotation.z = -Math.PI / 2;
        objSize = (new THREE.Box3().setFromObject(object)).getSize();

        if ((objSize.x > (size.x * 2.5))) {
            object.scale.setY(-0.1);
        }
        if ((objSize.x < (size.x / 2.5)))
            object.scale.setY(-objSize.x * 0.1);

        if ((objSize.y > (size.y * 2.5))) {
            object.scale.setZ(0.1);
        }
        if ((objSize.y < (size.y / 2.5)))
            object.scale.setZ(objSize.y * 0.1);

        if ((objSize.z > (size.z * 2.5))) {
            object.scale.setX(0.1);
        }
        if ((objSize.z < (size.z / 2.5)))
            object.scale.setX(objSize.z * 0.1);
    }
    else {
        if ((objSize.x > (size.x * 2.5))) {
            object.scale.setX(0.1);
        }
        if ((objSize.x < (size.x / 2.5)))
            object.scale.setX(objSize.x * 0.1);

        if ((objSize.y > (size.y * 2.5))) {
            object.scale.setY(-0.1);
        }
        if ((objSize.y < (size.y / 2.5)))
            object.scale.setY(-objSize.z * 0.1);

        if ((objSize.z > (size.z * 2.5))) {
            object.scale.setZ(0.1);
        }
        if ((objSize.z < (size.z / 2.5)))
            object.scale.setZ(objSize.y * 0.1);
    }
}

function setScale() {


}

function setObjPosition(refBoxDimension, object) {
    let currentBoxDimension = new THREE.Box3().setFromObject(object);
    object.position.x = (refBoxDimension.min.x + refBoxDimension.max.x) / 2;
    // if (currentBoxDimension.min.x > refBoxDimension.min.x) {
    //     object.position.x -= (currentBoxDimension.min.x - refBoxDimension.min.x);
    // }
    // else {
    //     object.position.x += refBoxDimension.min.x - currentBoxDimension.min.x;
    // }
    if (currentBoxDimension.max.z > refBoxDimension.max.z) {
        object.position.z -= (currentBoxDimension.max.z - refBoxDimension.max.z);
    }
    else {
        object.position.z += (refBoxDimension.max.z - currentBoxDimension.max.z);
    }
    if (currentBoxDimension.max.y < refBoxDimension.max.y) {
        object.position.y -= (refBoxDimension.max.y - (currentBoxDimension.max.y));
    }
    else {
        object.position.y += (refBoxDimension.max.y - (currentBoxDimension.max.y));
    }
}