var isNewObjGrp = new THREE.Group();
var isMainObjGrp = new THREE.Group();
function getLoader(name) {
    let loader;
    let format = name.split('.')[1];
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
    loader.load('content/model/' + objPath, function (object, text) {
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
    });

}

function loadConstructionModelByName(name) {
    let item = isMainObjGrp.children[0].children.find(elem => elem.name.indexOf(name) > -1);
    item.visible = false;
    let refBox = new THREE.Box3().setFromObject(item);
    let mappedObj = constructionUnits.find(elem => elem.name == name);
    item.position.y = -100;
    loadFbx(mappedObj.constructionModelName, item.position, true, refBox);
}

function resizeObject(size, object) {
    let objSize = (new THREE.Box3().setFromObject(object)).getSize();
    if (objSize.x > (size.x * 2.5)) {
        let sz = objSize.x / size.x;
        object.scale.set(1 / sz, -1 / sz, 1 / sz);
    }
    else if (objSize.x < (size.x / 2.5)) {
        let sz = size.x / objSize.x;
        object.scale.set(sz, -sz, sz);
    }
}

function setObjPosition(refBoxDimension, object) {
    let currentBoxDimension = new THREE.Box3().setFromObject(object);
    if (currentBoxDimension.min.x > refBoxDimension.min.x) {
        object.position.x -= (currentBoxDimension.min.x - refBoxDimension.min.x);
    }
    else {
        object.position.x += refBoxDimension.min.x - currentBoxDimension.min.x;
    }
    if (currentBoxDimension.max.z > refBoxDimension.max.z) {
        object.position.z -= (currentBoxDimension.max.z - refBoxDimension.max.z);
    }
    else {
        object.position.z += (refBoxDimension.max.z - currentBoxDimension.max.z);
    }
}