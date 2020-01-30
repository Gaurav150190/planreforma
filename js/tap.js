function substituteTap(object) {
    let objDimension, calPosAgain;

    objDimension = getObj_DimensionByName('Plan_Reforma-47-re-griferia').dimension;
    object.position.y = objDimension.min.y;

    //reset object-position if y pivot point not at 0
    calPosAgain = new THREE.Box3().setFromObject(object);
    if ((calPosAgain.min.y > objDimension.min.y) || (calPosAgain.min.y < objDimension.min.y))
        object.position.y += calPosAgain.min.y - objDimension.min.y;
}