
var cart = new Vue({
    el: '#cartModal',
    data: {
        carts: [],
        lastRemoveRack: { index: -1, rack: {} }

    },

    methods: {
        selectRack(rack) {
            Vue.lastSelectedModel = rack;
            imgZoom.type = 'cart';
            imgZoom.detail = { title: rack.bayType, desc: rack.spec, category: rack.category, imgPath: rack.name + '.jpg?v=' + new Date() };
            $('.imgzoom-modal').css('display', 'flex');
            imgZoom.isLoaded = false;
        },

        confirmRemovePopup(index, rack, event) {
            this.lastRemoveRack = { index: index, rack: rack };
            confirmPopup.bindData = { message: 'Do you wish to remove this rack?', title: 'Remove Rack', btnLabel: 'Remove', isRack: true };
            $('.delete-modal').css('display', 'flex');
            event.stopPropagation();
        },

        removeRack(index, rack) {
            this.carts.splice(index, 1);
            $(".cartCount").text(cart.carts.length);
            this.removeRackByName(rack);
            panel.filterVisiblePanels();
        },

        removeAllRacks() {
            this.carts = [];
            $(".cartCount").text(cart.carts.length);
            bindVehicleData.detail.driver = vehicle.DriverLengthLeft = vehicle.DriverTotalLength; //need to check condition for passenger rack also
            bindVehicleData.detail.passenger = vehicle.PassengerLengthLeft = vehicle.PassengerTotalLength;
            currentDRackGroup.children = [];
            currentPRackGroup.children = [];
            panel.filterVisiblePanels();
        }
    }

});