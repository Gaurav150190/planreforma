
function bindPosition(name, object) {
    let dimension, calPosAgain, objDimension, refDimension;
    switch (name) {
        case 'Plan_Reforma-105-re-sanitarios':  //wooden box
            objDimension = new THREE.Box3().setFromObject(object);
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
            break;
        case 'Plan_Reforma-94-re-sanitarios':   //shower plate
        case 'Plan_Reforma-51-re-sanitarios':   //toilet
            dimension = getObj_DimensionByName(name);
            object.position.y = dimension.min.y;
            //set re-position if y pivot point not at 0
            calPosAgain = new THREE.Box3().setFromObject(object);
            if ((calPosAgain.min.y > dimension.min.y) || (calPosAgain.min.y < dimension.min.y))
                object.position.y += dimension.min.y - calPosAgain.min.y;
            break;
        case 'Plan_Reforma-53-re-sanitarios':   //sink
            let tapDimension = getObj_DimensionByName('Plan_Reforma-47-re-griferia').dimension;
            objDimension = new THREE.Box3().setFromObject(object);
            object.position.y = tapDimension.min.y - objDimension.getSize().y;

            //object reset-position if y pivot point not at 0
            calPosAgain = new THREE.Box3().setFromObject(object);
            if ((calPosAgain.max.y > tapDimension.min.y) || (calPosAgain.max.y < tapDimension.min.y))
                object.position.y += tapDimension.min.y - calPosAgain.max.y;

            //reset wooden box position
            let woodenObjDimension, woodenBox = getObj_DimensionByName('Plan_Reforma-105-re-sanitarios');
            if (constrctnUnitsArr.obj105Grp.children.length > 0) {
                woodenBox = constrctnUnitsArr.obj105Grp.children[0];
                woodenObjDimension = new THREE.Box3().setFromObject(constrctnUnitsArr.obj105Grp.children[0]);
            }
            else
                woodenObjDimension = woodenBox.dimension;

            //object reset-position if y pivot point not at 0
            let calSinkPosAgain = new THREE.Box3().setFromObject(object);
            if ((calSinkPosAgain.min.y > woodenObjDimension.max.y) || (calSinkPosAgain.min.y < woodenObjDimension.max.y))
                woodenBox.obj.position.y += calSinkPosAgain.min.y - woodenObjDimension.max.y;

            break;
        case 'Plan_Reforma-47-re-griferia': //tap
            objDimension = getObj_DimensionByName('Plan_Reforma-47-re-griferia').dimension;
            object.position.y = objDimension.min.y;

            //reset object-position if y pivot point not at 0
            calPosAgain = new THREE.Box3().setFromObject(object);
            if ((calPosAgain.min.y > objDimension.min.y) || (calPosAgain.min.y < objDimension.min.y))
                object.position.y += calPosAgain.min.y - objDimension.min.y;
            break;
        case 'Plan_Reforma-44-re-baldosa':  //wall texture
            break;
        case 'Plan_Reforma-8-re-baldosa':   //floor texture
            break;
        case 'Plan_Reforma-54-re-sanitarios':
            break;
        case 'Plan_Reforma-49-re-griferia':
            break;
        case 'Plan_Reforma-103-re-sanitarios':
            break;
        case 'Plan_Reforma-104-re-sanitarios':
            break;
        case 'Plan_Reforma-106-re-griferia':
            break;
    }
}

function getObj_DimensionByName(name) {
    let isReplaceItem = isMainObjGrp.children[0].children.find(elem => elem.name.indexOf(name) > -1);
    return { obj: isReplaceItem, dimension: new THREE.Box3().setFromObject(isReplaceItem) };
}



function addObjToGroup(name, object) {
    switch (name) {
        case 'Plan_Reforma-94-re-sanitarios':   //shower plate
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj94Grp);
            break;
        case 'Plan_Reforma-51-re-sanitarios':   //toilet
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj51Grp);
            break;
        case 'Plan_Reforma-105-re-sanitarios':  //wooden box
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj105Grp);
            break;
        case 'Plan_Reforma-53-re-sanitarios':   //sink
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj53Grp);
            break;
        case 'Plan_Reforma-47-re-griferia': //tap
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj47Grp);
            break;
        case 'Plan_Reforma-44-re-baldosa':
            break;
        case 'Plan_Reforma-8-re-baldosa':
            break;
        case 'Plan_Reforma-54-re-sanitarios':
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj54Grp);
            break;
        case 'Plan_Reforma-49-re-griferia':
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj49Grp);
            break;
        case 'Plan_Reforma-103-re-sanitarios':
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj103Grp);
            break;
        case 'Plan_Reforma-104-re-sanitarios':
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj104Grp);
            break;
        case 'Plan_Reforma-106-re-griferia':
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj106Grp);
            break;
    }
}

function addRemoveUnitToGrp(unit, group) {
    group.children = [];
    scene.remove(group);
    group.add(unit);
    scene.add(group);
}