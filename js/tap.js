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

}


function substituteBathTap(object, name) {
    substituteTap(object, name);

}

function substituteShowerTap(object, name) {
    substituteTap(object, name);

}