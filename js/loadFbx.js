var isNewObjGrp = new THREE.Group();
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
function loadFbx(objPath, position, isModel, size) {
    let loader = getLoader(objPath);
    loader.load('content/model/' + objPath, function (object, text) {
        object.position.set(position.x, position.y, position.z);
        if (isModel) {
            object.rotation.x = -Math.PI / 2;
            scene.children[0].children[13].visible = false;
            isNewObjGrp.children = [];
            scene.remove(isNewObjGrp);

            let fakeBox = getFakeBox(size);
            let refBoxDimension = new THREE.Box3().setFromObject(fakeBox);
            setObjResizing(refBoxDimension, object);
            setObjPosition(refBoxDimension, object);
            isNewObjGrp.add(object);
            scene.add(isNewObjGrp);
        }
        else {
            scene.add(object);
        }
    });

}

function getFakeBox(size) {
    let temp_boxGeometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    let temp_material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(temp_boxGeometry, temp_material);
    cube.position.set(position.x, position.y, position.z);
    return cube;
}

function setObjResizing(refBoxDimension, currentObj) {
    let currentBoxDimension = new THREE.Box3().setFromObject(currentObj);
    currentObj.scale.set(
        refBoxDimension.getSize().x / currentBoxDimension.getSize().x,
        -refBoxDimension.getSize().z / currentBoxDimension.getSize().z,
        refBoxDimension.getSize().y / currentBoxDimension.getSize().y
    );
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