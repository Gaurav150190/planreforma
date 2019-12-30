var currentDRackGroup = new THREE.Group();
var currentPRackGroup = new THREE.Group();
var combinedRackGroup = [];
var currentVehicle = null;
Vue.mixin({
    created() {

    },
    data() {
        return {
           

        }
    },
    methods: {
        loadFbx(path) {
            let loader = new THREE.FBXLoader();
            var self = this;
            loader.load('content/model/scene_Bathroom.fbx', function (object) {
                object.traverse(function (child) {
                    if (child.isMesh) {

                        //child.castShadow = true;
                        //child.receiveShadow = true;
                        let objConfig = globalConfig.find(t => t.name === child.name);
                        if (objConfig) {
                            let color = child.material.color;
                            let map = child.material.map;
                            child.material = objConfig.material ? objConfig.material : child.material;
                            child.material.color = color;
                            //child.material.map = map;
                            for (let [key, value] of Object.entries(objConfig.properties)) {
                                if (key === 'lightMap') {
                                    //children[i].geometry.faceVertexUvs[1] = children[i].geometry.faceVertexUvs[0];
                                    var loader = new THREE.TextureLoader();
                                    loader.load(value, function (texture) {
                                        //children[i].material[key] = texture;
                                    });
                                }
                                else
                                    child.material[key] = value;

                            }
                            //child.material.dispose();

                        }
                        

                    }
                });
                object.position.y = -100;
                scene.add(object);

            });
        },

        loadFbxWithShadowMap(path) {
            this.loadFbx(path);
        },
    }
})

