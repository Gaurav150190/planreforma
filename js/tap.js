function substituteTap(object, name) {
    let objDimension, calPosAgain;

    objDimension = getObj_DimensionByName(name).dimension;
    object.position.y = objDimension.min.y;

    //reset object-position if y pivot point not at 0
    calPosAgain = new THREE.Box3().setFromObject(object);
    if ((calPosAgain.min.y > objDimension.min.y) || (calPosAgain.min.y < objDimension.min.y))
        object.position.y += calPosAgain.min.y - objDimension.min.y;
}

function substituteSinkTap(object, name) {
    substituteTap(object, name);
    camera.position.set(-28.92737219729685, 13.59973409898459, -77.82415521671935);
}


function substituteBathTap(object, name) {
    substituteTap(object, name);
    camera.position.set(167.2810834691731, 2.5769831113801107, -20.783516486964096);
}

function substituteShowerTap(object, name) {
    substituteTap(object, name);
    camera.position.set(167.2810834691731, 2.5769831113801107, -20.783516486964096);
}