function substituteSink(object) {
    let objDimension, calPosAgain;

    let tapDimension = getObj_DimensionByName('Plan_Reforma-47-re-griferia').dimension;

    //set position to bottom of tap
    objDimension = new THREE.Box3().setFromObject(object);
    object.position.y = tapDimension.min.y - objDimension.getSize().y;

    //object reset-position if y pivot point not at 0
    calPosAgain = new THREE.Box3().setFromObject(object);
    if ((calPosAgain.max.y > tapDimension.min.y) || (calPosAgain.max.y < tapDimension.min.y))
        object.position.y += tapDimension.min.y - calPosAgain.max.y;

    //reset wooden box position
    resetWoodenBoxPosition(object);
}

function resetWoodenBoxPosition(object) {
    let woodenObjDimension, woodenBox = getObj_DimensionByName('Plan_Reforma-105-re-sanitarios');
    if (constrctnUnitsArr.obj105Grp.children.length > 0 || woodenBox.obj.visible == true) {
        //reset wooden box position

        if (constrctnUnitsArr.obj105Grp.children.length > 0) {
            woodenBox = constrctnUnitsArr.obj105Grp.children[0];
            woodenObjDimension = new THREE.Box3().setFromObject(constrctnUnitsArr.obj105Grp.children[0]);
        }
        else
            woodenObjDimension = woodenBox.dimension;

        //reset wooden box-position if y pivot point not at 0
        let calSinkPosAgain = new THREE.Box3().setFromObject(object);
        if ((calSinkPosAgain.min.y > woodenObjDimension.max.y) || (calSinkPosAgain.min.y < woodenObjDimension.max.y))
            woodenBox.obj.position.y += calSinkPosAgain.min.y - woodenObjDimension.max.y;

        camera.position.set(-28.92737219729685, 13.59973409898459, -77.82415521671935);
    }
}