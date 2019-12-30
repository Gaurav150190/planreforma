

var selectSide = new Vue({
    el: '#selectSide',
    data: {
        passengerSelect: false,
        driverSelect: false
    },
    methods: {

        closeDriverPopup() {
            this.driverSelect = this.passengerSelect = false;
            $('.driver-modal').css('display', 'none')
        },
        selectSide(isDriver) {
            if (isDriver) {
                if (vehicle.DriverLengthLeft >= Vue.lastSelectedModel.length) {
                    this.rackPosition = bindVehicleInfo.bindVehicleData.dSPosition;
                    this.rackScale.x = 1;
                }
                else {
                    this.driverSelect = this.passengerSelect = false;
                    confirmPopup.bindData = { message: 'Not enough space left on the driver(s) side', title: 'No Space Left' };
                    $('.delete-modal').css('display', 'flex');
                }
            }
            else {
                if (vehicle.PassengerLengthLeft >= Vue.lastSelectedModel.length) {
                    this.rackPosition = bindVehicleInfo.bindVehicleData.pSPosition;
                    this.rackScale.x = -1;
                }
                else {
                    this.driverSelect = this.passengerSelect = false;
                    confirmPopup.bindData = { message: 'Not enough space left on the passenger(s) side', title: 'No Space Left' };
                    $('.delete-modal').css('display', 'flex');
                }
            }
        },

        bindRack() {
            $('.app-loader').css('display', 'flex');


            $(".driver-modal,.imgzoom-modal").hide();
            $(".toggle-right-sidebar").click();
            if (this.driverSelect) {
                Vue.lastSelectedModel.type = "driver";
                bindVehicleData.detail.driver = vehicle.DriverLengthLeft -= Vue.lastSelectedModel.length;
                panel.filterVisiblePanels();

            }

            else {
                Vue.lastSelectedModel.type = "passenger";
                bindVehicleData.detail.passenger = vehicle.PassengerLengthLeft -= Vue.lastSelectedModel.length;
                panel.filterVisiblePanels();
            }

            cart.carts.push(Object.assign({}, Vue.lastSelectedModel));
            $(".cartCount").text(cart.carts.length);
            var self = this;
            setTimeout(function () {
                self.loadFbx("racks/panels", Vue.lastSelectedModel, null);
            }, 300);
        },
    }
});