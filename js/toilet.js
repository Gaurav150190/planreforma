function substituteToilet(name, object) {
    let dimension, calPosAgain;
    
    dimension = getObj_DimensionByName(name).dimension;
    object.position.y = dimension.min.y;
    //set re-position if y pivot point not at 0
    calPosAgain = new THREE.Box3().setFromObject(object);
    if ((calPosAgain.min.y > dimension.min.y) || (calPosAgain.min.y < dimension.min.y))
        object.position.y += dimension.min.y - calPosAgain.min.y;
}