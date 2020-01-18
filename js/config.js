
function bindPosition(name, object) {
    let dimension, objDimension;
    switch (name) {
        case 'Plan_Reforma-94-re-sanitarios':
            object.position.y = 0;
            break;
        case 'Plan_Reforma-105-re-sanitarios':
            dimension = getObjDimensionByName(name);
            objDimension = new THREE.Box3().setFromObject(object);
            object.position.y = dimension.max.y - objDimension.getSize().y;
            break;
        case 'Plan_Reforma-51-re-sanitarios':
        case 'Plan_Reforma-53-re-sanitarios':
            dimension = getObjDimensionByName(name);
            object.position.y = dimension.min.y;
            break;
        case 'Plan_Reforma-47-re-griferia':
            dimension = getObjDimensionByName('Plan_Reforma-53-re-sanitarios');
            if (constrctnUnitsArr.obj47Grp.children.length > 0)
                dimension = new THREE.Box3().setFromObject(constrctnUnitsArr.obj47Grp.children[0]);
            object.position.y = dimension.max.y;
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