

var imgZoom = new Vue({
    el: '#imgZoom',
    data: {
        type: '',
        detail: { title: '', desc: '', category: '', imgPath: '' },
        isLoaded: false
    },
    methods: {
        closeImagePopup() {
            $('.imgzoom-modal').css('display', 'none');
            //this.isLoaded = false;
        },
        select() {
            selectSide.driverSelect = selectSide.passengerSelect = false;
            if (this.type != 'van')
                $('.driver-modal').css('display', 'flex');
            // else {
            //     vehicle.loadVehicle();
            //     panel.filterVisiblePanels();
            // }
        },

        loaded() {
            this.isLoaded = true;
        }
    }

});