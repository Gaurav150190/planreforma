


var vehicle = new Vue({
    el: '#browseModal',
    created() {

        Vue.lastSelectedModel = this.vehicles[0];
        this.loadVehicle();
    },
    data: {
        vehicles: [
            {
                name: 'Toyota-Hi-Ace-SWB', folderName: 'Toyota_Hiece', desc: 'Toyota - Hi-Ace SWB',
                shadowMap: 'ShadowPlane-Alpha', driver: 2290, passenger: 1250, panelHeight: 1160, scale: 1,
                dSPosition: { x: -430, y: -600, z: 0 }, pSPosition: { x: 430, y: -600, z: -880 }
            }

        ],
        DriverTotalLength: 0,
        PassengerTotalLength: 0,
        PassengerLengthLeft: 0,
        DriverLengthLeft: 0
    },
    methods: {
        loadVehicle() {
            this.loadFbxWithShadowMap('model/planreforma');
        },

        selectVan(van) {
            if (imgZoom.detail.title != van.name) {
                Vue.lastSelectedModel = van;
                imgZoom.type = 'van';
                imgZoom.detail = { title: van.name, desc: van.desc, category: 'Van', imgPath: van.name + '.jpg' };
                imgZoom.isLoaded = false;
            }
            // $('.imgzoom-modal').css('display', 'flex');

            vehicle.loadVehicle();
            panel.filterVisiblePanels();


        },

        bindVehicleDetail() {
            bindVehicleData.detail.driver = Vue.lastSelectedModel.driver;
            bindVehicleData.detail.passenger = Vue.lastSelectedModel.passenger;
            bindVehicleData.detail.panelHeight = Vue.lastSelectedModel.panelHeight;
            bindVehicleData.detail.desc = Vue.lastSelectedModel.desc;
        }
    }
})

