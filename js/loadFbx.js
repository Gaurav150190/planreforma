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
function loadFbx(objPath, position, isModel) {
    let loader = getLoader(objPath);
    var self = this;
    loader.load('content/model/' + objPath, function (object, text) {
        object.position.set(position.x, position.y, position.z);
        if (isModel) {
            object.rotation.x = -Math.PI / 2;
            scene.children[0].children[13].visible = false;
            isNewObjGrp.children = [];
            scene.remove(isNewObjGrp);
            var refBoxDimension = new THREE.Box3().setFromObject(scene.children[0].children[13]);
            var tt01 = new THREE.Box3().setFromObject(object);
            //if (tt.getSize().x / tt01.getSize().x > 1 && tt.getSize().y / tt01.getSize().y > 1 && tt.getSize().z / tt01.getSize().z)
            object.scale.set(refBoxDimension.getSize().x / tt01.getSize().x, -refBoxDimension.getSize().z / tt01.getSize().z, refBoxDimension.getSize().y / tt01.getSize().y);
            // else
            //     object.scale.set(0.11, -0.11, 0.11);
            var currentBoxDimension = new THREE.Box3().setFromObject(object);
            setObjPosition(currentBoxDimension, refBoxDimension, object);
            isNewObjGrp.add(object);
            scene.add(isNewObjGrp);
        }
        else {
            scene.add(object);
        }
    });

}

function setObjResizing() {


}

function setObjPosition(currentBoxDimension, refBoxDimension, object) {
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