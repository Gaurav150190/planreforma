﻿
function substituteOrDeleteObj(name, object, type) {
    switch (name) {
        case 'Plan_Reforma-105-re-sanitarios':  //wooden box
            if (type.toLowerCase() == 'substitute')
                substituteWoodenBox(object);
            else
                deleteObjects(constrctnUnitsArr.obj105Grp);
            break;
        case 'Plan_Reforma-94-re-sanitarios':   //shower plate
            if (type.toLowerCase() == 'substitute')
                substituteShowerPlate(name, object);
            else
                deleteObjects(constrctnUnitsArr.obj94Grp);
            break;
        case 'Plan_Reforma-51-re-sanitarios':   //toilet
            if (type.toLowerCase() == 'substitute')
                substituteToilet(name, object);
            else
                deleteObjects(constrctnUnitsArr.obj51Grp);
            break;
        case 'Plan_Reforma-53-re-sanitarios':   //sink
            if (type.toLowerCase() == 'substitute')
                substituteSink(object);
            else {
                deleteObjects(constrctnUnitsArr.obj53Grp);
                resetWoodenBoxPosition(object);
            }
            break;
        case 'Plan_Reforma-47-re-griferia': //tap
            if (type.toLowerCase() == 'substitute')
                substituteTap(object);
            else
                deleteTap();
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

function deleteObjects(group) {
    if (group.children.length > 0) {
        group.children = [];
        scene.remove(group);
    }
}

