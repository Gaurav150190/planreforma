function substituteToilet(name, object) {
    let dimension, calPosAgain;

    dimension = getObj_DimensionByName(name).dimension;
    object.position.y = dimension.min.y;
    //set re-position if y pivot point not at 0
    calPosAgain = new THREE.Box3().setFromObject(object);
    if ((calPosAgain.min.y > dimension.min.y) || (calPosAgain.min.y < dimension.min.y))
        object.position.y += dimension.min.y - calPosAgain.min.y;

    camera.position.set(-28.92737219729685, 13.59973409898459, -77.82415521671935);
}

function substituteBath(name, object) {
    let dimension, calPosAgain;

    dimension = getObj_DimensionByName(name).dimension;
    object.position.y = dimension.min.y;
    //set re-position if y pivot point not at 0
    calPosAgain = new THREE.Box3().setFromObject(object);
    if ((calPosAgain.min.y > dimension.min.y) || (calPosAgain.min.y < dimension.min.y))
        object.position.y += dimension.min.y - calPosAgain.min.y;

    camera.position.set(-28.92737219729685, 13.59973409898459, -77.82415521671935);
}

function substituteShowerScreen(name, object) {
    let dimension, calPosAgain;

    dimension = getObj_DimensionByName(name).dimension;
    object.position.y = dimension.min.y;
    //set re-position if y pivot point not at 0
    calPosAgain = new THREE.Box3().setFromObject(object);
    if ((calPosAgain.min.y > dimension.min.y) || (calPosAgain.min.y < dimension.min.y))
        object.position.y += dimension.min.y - calPosAgain.min.y;

    camera.position.set(-28.92737219729685, 13.59973409898459, -77.82415521671935);
}