

var confirmPopup = new Vue({
    el: '#confirmPopup',
    data: {
        bindData: { message: '', title: '', btnLabel: '', isRack: false }
    },

    methods: {
        removeRack() {
            $('.delete-modal').css('display', 'none');
            this.bindData = { message: '', title: '', btnLabel: '', isRack: false };
            cart.removeRack(cart.lastRemoveRack.index, cart.lastRemoveRack.rack);
        },

        closePopup() {
            $('.delete-modal').css('display', 'none');
            this.bindData = { message: '', title: '', btnLabel: '', isRack: false };
        }

    }
});