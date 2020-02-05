function substituteWoodenBox(object) {
    let calPosAgain, refDimension;

    let objDimension = new THREE.Box3().setFromObject(object);
    if (constrctnUnitsArr.obj53Grp.children.length == 0 && getObj_DimensionByName('Plan_Reforma-53-re-sanitarios').obj.visible == false) {
        //set wooden box position on tap bottom
        let tapDimension = getObj_DimensionByName('Plan_Reforma-47-re-griferia').dimension;
        object.position.y = tapDimension.min.y - objDimension.getSize().y;
        refDimension = tapDimension;
    }
    else {
        //calculate sink position
        let sinkObjDimension;
        if (constrctnUnitsArr.obj53Grp.children.length > 0)
            sinkObjDimension = new THREE.Box3().setFromObject(constrctnUnitsArr.obj53Grp.children[0]);
        else
            sinkObjDimension = getObj_DimensionByName('Plan_Reforma-53-re-sanitarios').dimension;

        //set wooden box position from bottom of sink
        object.position.y = sinkObjDimension.min.y - objDimension.getSize().y;
        refDimension = sinkObjDimension;
    }
    //object reset-position if y pivot point not at 0
    calPosAgain = new THREE.Box3().setFromObject(object);
    if ((calPosAgain.max.y > refDimension.min.y) || (calPosAgain.max.y < refDimension.min.y))
        object.position.y += refDimension.min.y - calPosAgain.max.y;

    
}


