
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
                let woodenObj;
                if (constrctnUnitsArr.obj105Grp.children.length == 0 && getObj_DimensionByName('Plan_Reforma-105-re-sanitarios').obj.visible == false)
                    return;
                else
                    if (constrctnUnitsArr.obj105Grp.children.length > 0)
                        woodenObj = constrctnUnitsArr.obj105Grp.children[0];
                    else
                        woodenObj = getObj_DimensionByName('Plan_Reforma-105-re-sanitarios').obj;
                substituteWoodenBox(woodenObj);
            }
            break;
        case 'Plan_Reforma-47-re-griferia': //tap
            if (type.toLowerCase() == 'substitute')
                substituteSinkTap(object, 'Plan_Reforma-47-re-griferia');
            else
                deleteObjects(constrctnUnitsArr.obj47Grp);
            break;

        case 'Plan_Reforma-54-re-sanitarios':   //bath
            if (type.toLowerCase() == 'substitute')
                substituteBath(name, object);
            else
                deleteObjects(constrctnUnitsArr.obj54Grp);
            break;
        case 'Plan_Reforma-49-re-griferia': //bath tap
            if (type.toLowerCase() == 'substitute')
                substituteBathTap(object, 'Plan_Reforma-49-re-griferia');
            else
                deleteObjects(constrctnUnitsArr.obj49Grp);
            break;
        case 'Plan_Reforma-103-re-sanitarios':  //shower screen for shower 
            if (type.toLowerCase() == 'substitute')
                substituteShowerScreen(name, object);
            else
                deleteObjects(constrctnUnitsArr.obj103Grp);
            break;
        case 'Plan_Reforma-104-re-sanitarios':  //shower screen for bath
            break;
        case 'Plan_Reforma-106-re-griferia':    //shower tap
            if (type.toLowerCase() == 'substitute')
                substituteShowerTap(object, 'Plan_Reforma-106-re-griferia');
            else
                deleteObjects(constrctnUnitsArr.obj106Grp);
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
        case 'Plan_Reforma-44-re-baldosa':  //wall tiles
            break;
        case 'Plan_Reforma-8-re-baldosa':   //floor tiles
            break;
        case 'Plan_Reforma-54-re-sanitarios':   //bath
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj54Grp);
            break;
        case 'Plan_Reforma-49-re-griferia': //bath tap
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj49Grp);
            break;
        case 'Plan_Reforma-103-re-sanitarios':  //shower screen for shower 
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj103Grp);
            break;
        case 'Plan_Reforma-104-re-sanitarios':  //shower screen for bath
            addRemoveUnitToGrp(object, constrctnUnitsArr.obj104Grp);
            break;
        case 'Plan_Reforma-106-re-griferia':    //shower tap
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

