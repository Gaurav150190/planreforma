var constrctnUnitsArr = {
    obj47Grp: new THREE.Group(),
    obj49Grp: new THREE.Group(),
    obj51Grp: new THREE.Group(),
    obj53Grp: new THREE.Group(),
    obj54Grp: new THREE.Group(),
    obj94Grp: new THREE.Group(),
    obj103Grp: new THREE.Group(),
    obj104Grp: new THREE.Group(),
    obj105Grp: new THREE.Group(),
    obj106Grp: new THREE.Group()
}
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
function loadFbx(obj, position, isModel, refBox) {
    let loader = getLoader(obj.path);
    loader.load(obj.path, function (object, text) {
        object.traverse(function (child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
            if (child.type.toLowerCase().indexOf('spotlight') > -1) {
                child.visible = false;
            }
            if (child.type.toLowerCase().indexOf('pointlight') > -1) {
                child.intensity = 0.2;
                child.castShadow = false;
                console.log(child.name);
                if (child.name.toLowerCase().indexOf('luz_redonda_01_pr_3000_391434_light002') > -1)
                    child.intensity = 0.5;
                if (child.name.toLowerCase().indexOf('luz_redonda_01_pr_3000_391434_light') > -1)
                    child.castShadow = true;
            }
            if (isModel && child.material) {
                child.material.side = THREE.DoubleSide;
                child.castShadow = false;
            }
        });
        object.position.set(position.x, position.y, position.z);
        if (isModel) {
            object.rotation.x = -Math.PI / 2;

            resizeObject(refBox.getSize(), object);
            setObjPosition(refBox, object, obj.name);
            addObjToGroup(obj.name, object);
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
        substituteOrDeleteObj(obj.name, null, 'delete');
        return;
    }

    isReplaceItem.visible = false;
    let refBox = new THREE.Box3().setFromObject(isReplaceItem);
    loadFbx(obj, isReplaceItem.position, true, refBox);
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

function setObjPosition(refBoxDimension, object, refObjName) {
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
    //set y position
    substituteOrDeleteObj(refObjName, object, 'substitute');
}