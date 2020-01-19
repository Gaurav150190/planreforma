
function bindPosition(name, object) {
    let dimension, calPosAgain;
    switch (name) {
        case 'Plan_Reforma-105-re-sanitarios':
            dimension = getObjDimensionByName(name);
            object.position.y = dimension.max.y;
            //set re-position if y pivot point not at 0
            calPosAgain = new THREE.Box3().setFromObject(object);
            if ((calPosAgain.max.y > dimension.max.y) || (calPosAgain.max.y < dimension.max.y))
                object.position.y += dimension.max.y - calPosAgain.max.y;
            break;
        case 'Plan_Reforma-94-re-sanitarios':
        case 'Plan_Reforma-51-re-sanitarios':
            dimension = getObjDimensionByName(name);
            object.position.y = dimension.min.y;
            //set re-position if y pivot point not at 0
            calPosAgain = new THREE.Box3().setFromObject(object);
            if ((calPosAgain.min.y > dimension.min.y) || (calPosAgain.min.y < dimension.min.y))
                object.position.y += dimension.min.y - calPosAgain.min.y;
            break;
        case 'Plan_Reforma-53-re-sanitarios':
            let tapDimension;
            dimension = getObjDimensionByName(name);
            object.position.y = dimension.min.y;
            //set re-position if y pivot point not at 0
            calPosAgain = new THREE.Box3().setFromObject(object);
            if ((calPosAgain.min.y > dimension.min.y) || (calPosAgain.min.y < dimension.min.y))
                object.position.y += dimension.min.y - calPosAgain.min.y;

            calPosAgain = new THREE.Box3().setFromObject(object);
            if (constrctnUnitsArr.obj47Grp.children.length > 0)
                tapDimension = new THREE.Box3().setFromObject(constrctnUnitsArr.obj47Grp.children[0]);
            else
                tapDimension = getObjDimensionByName('Plan_Reforma-47-re-griferia');

            if (calPosAgain.max.y > tapDimension.min.y) {
                object.position.y -= calPosAgain.max.y - tapDimension.min.y;
            }
            break;
        case 'Plan_Reforma-47-re-griferia':
            dimension = getObjDimensionByName('Plan_Reforma-53-re-sanitarios');
            object.position.y = dimension.max.y;
            if (constrctnUnitsArr.obj47Grp.children.length > 0) {
                dimension = new THREE.Box3().setFromObject(constrctnUnitsArr.obj47Grp.children[0]);
                object.position.y = dimension.min.y;
            }
            //set re-position if y pivot point not at 0
            calPosAgain = new THREE.Box3().setFromObject(object);
            if ((calPosAgain.min.y > dimension.max.y) || (calPosAgain.min.y < dimension.max.y))
                object.position.y += dimension.max.y - calPosAgain.min.y;
            break;
        case 'Plan_Reforma-44-re-baldosa':
            break;
        case 'Plan_Reforma-8-re-baldosa':
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

function getObjDimensionByName(name) {
    let isReplaceItem = isMainObjGrp.children[0].children.find(elem => elem.name.indexOf(name) > -1);
    return new THREE.Box3().setFromObject(isReplaceItem);
}

function addObjToGroup(name, object) {
    switch (name) {
        case 'Plan_Reforma-94-re-sanitarios':
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj94Grp);
            break;
        case 'Plan_Reforma-51-re-sanitarios':
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj51Grp);
            break;
        case 'Plan_Reforma-105-re-sanitarios':
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj105Grp);
            break;
        case 'Plan_Reforma-53-re-sanitarios':
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj53Grp);
            break;
        case 'Plan_Reforma-47-re-griferia':
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