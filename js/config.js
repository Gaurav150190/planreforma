var globalConfig = [
    {
        name: "Body_Cabin", // full body part
        material: new THREE.MeshStandardMaterial(),
        properties:
        {
            envMap: reflectionCube,
            metalness: 0.5,
            roughness: 0.4
        }

    },
    {
        name: "headlights",
        properties:
        {
            emissive: new THREE.Color(0xffffff),
            emissiveIntensity: 0.6,
            reflectivity: 0.3,
            envMap: reflectionCube
        }

    },
    {
        name: "Alloy", // all wheels
        material: new THREE.MeshStandardMaterial(),
        properties:
        {
            envMap: reflectionCube,
            roughness: 0.4,
            metalness: 1,
            color: new THREE.Color(0xffffff),
            specular: new THREE.Color(0xffffff),
            //combine: new THREE.MultiplyOperation,
            shininess: 100
        }

    },
    {
        name: "Grifo_bajo_01_PR_Grifo_bajo_01_PR_387341", // rack frame
        material: new THREE.MeshStandardMaterial(),
        properties:
        {
            envMap: reflectionCube,
            //envMapIntensity:0.4,
            roughness: 0.2,
            metalness: 0.7,
            color: new THREE.Color(0xc2c2c2),
            //combine: new THREE.MultiplyOperation,
            //shininess: 50
        }

    },
    {
        name: "Inodoro_01_PR_640_x_360_mm_386021", // rack frame
        material: new THREE.MeshStandardMaterial(),
        properties:
        {
            envMap: reflectionCube,
            envMapIntensity: 0.2,
            roughness: 0.1,
            metalness: 0.1,
            color: new THREE.Color(0xffffff),
            //combine: new THREE.MultiplyOperation,
            //shininess: 50
        }

    }
    ,
    {
        name: "Encimera_Profundidad_600_mm_386031", // rack frame
        material: new THREE.MeshStandardMaterial(),
        properties:
        {
            envMap: reflectionCube,
            envMapIntensity: 0.2,
            roughness: 0.1,
            metalness: 0.1,
            color: new THREE.Color(0xffffff),
            //combine: new THREE.MultiplyOperation,
            //shininess: 50
        }

    },
    {
        name: "Lavabo_01_PR_500x450_2_386023", // rack frame
        material: new THREE.MeshStandardMaterial(),
        properties:
        {
            envMap: reflectionCube,
            envMapIntensity: 0.2,
            roughness: 0.1,
            metalness: 0.1,
            color: new THREE.Color(0xffffff),
            //combine: new THREE.MultiplyOperation,
            //shininess: 50
        }

    },
    {
        name: "CargoFloor", // cargo floor
        properties:
        {
            envMap: reflectionCube,
            reflectivity: 0.05,
            color: new THREE.Color(0xffffff),
        }

    },
    {
        name: "RackFloor",
        properties:
        {
            envMap: reflectionCube,
            roughness: 0.8,
            color: new THREE.Color(0xffffff),
            specular: new THREE.Color(0xffffff),
            //combine: new THREE.MultiplyOperation,
            shininess: 50
        }

    },
    {
        name: "Yellow",
        material: new THREE.MeshPhysicalMaterial(),
        properties:
        {
            envMap: reflectionCube,
            reflectivity: 0.3,
        }

    },
    {
        name: "White",
        material: new THREE.MeshPhysicalMaterial(),
        properties:
        {
            envMap: reflectionCube,
            reflectivity: 0.3,
        }

    },
    {
        name: "Gray_Plastic",
        material: new THREE.MeshPhysicalMaterial(),
        properties:
        {
            envMap: reflectionCube,
            reflectivity: 0.3,
        }

    },
    {
        name: "RED_Plastic",
        material: new THREE.MeshPhysicalMaterial(),
        properties:
        {
            envMap: reflectionCube,
            reflectivity: 0.3
        }

    },
    {
        name: "Cream_Paint", // rack frame
        material: new THREE.MeshStandardMaterial(),
        properties:
        {
            envMap: reflectionCube,
            roughness: 0.15,
            metalness: 0.6
        }

    },
    {
        name: "Logo", // logo
        material: new THREE.MeshStandardMaterial(),
        properties:
        {
            envMap: reflectionCube,
            roughness: 0.3,
            //color: new THREE.Color(0xffffff),
            //specular: new THREE.Color(0xffffff),
            // combine: new THREE.MultiplyOperation,
            shininess: 100
        }

    },
    {
        name: "Rim", // all rims
        properties:
        {
            envMap: reflectionCube,
            roughness: 0.1,
            //color: new THREE.Color(0xffffff),
            //specular: new THREE.Color(0xffffff),
            // combine: new THREE.MultiplyOperation,
            shininess: 30
        }

    },
    {
        name: "Chrome", //front chrome
        material: new THREE.MeshStandardMaterial(),
        properties:
        {
            envMap: reflectionCube,
            roughness: 0.1,
        }

    },
    {
        name: "Bumper", // front mud guard
        material: new THREE.MeshPhysicalMaterial(),
        properties:
        {
            color: new THREE.Color(0x332f2f),
            envMap: reflectionCube,
            clearCoat: 0.5,
            reflectivity: 0.2
        }

    },
    {
        name: "Glass", // vehicle-window
        material: new THREE.MeshPhongMaterial(),
        properties:
        {
            envMap: reflectionCube,
            reflectivity: 1,
            transparent: true,
            opacity: 0.4
        }

    }

];