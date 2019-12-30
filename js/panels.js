
var panel = new Vue({
    el: '#panelModal',
    created() {

        //this.filterVisiblePanels();
    },
    data: {
        orgPanelRes: [
            {
                spec: 'RPGK104-P1', price: '$2517.74', categoryId: 1, name: "GeneralKit–LongBays",
                category: 'General Kits', bayType: 'Long Bay', length: 2080, isShow: true, isDriver: true,
                isPassenger: true, dimension: '1040x1040'
            },
            {
                spec: 'RPBK83-P1', price: '$2313.80', categoryId: 2, name: "BuildersKit–MediumBays",
                category: 'Builder Kits', bayType: 'Medium Bay', length: 1660, isShow: true, isDriver: true,
                isPassenger: true, dimension: '830x830'
            },
            {
                spec: 'RPBK104-P1', price: '$2496.92', categoryId: 2, name: "BuildersKit–LongBays",
                category: 'Builder Kits', bayType: 'Long Bay', length: 2080, isShow: true, isDriver: true,
                isPassenger: true, dimension: '1040x1040'
            },
            {
                spec: 'RPCK83-P1', price: '$2276.08', categoryId: 3, name: "ContractorsKit–MediumBays",
                category: 'Contractors Kits', bayType: 'Medium Bay', length: 1660, isShow: true, isDriver: true,
                isPassenger: true, dimension: '830x830'
            },
            {
                spec: 'RPCK104-P1', price: '$2457.98', categoryId: 3, name: "ContractorsKit–LongBays",
                category: 'Contractors Kits', bayType: 'Long Bay', length: 2080, isShow: true, isDriver: true,
                isPassenger: true, dimension: '1040x1040'
            },
            {
                spec: 'RPTK104-P1', price: '$3416.34', categoryId: 4, name: "TechniciansKit–LongBays",
                category: 'Technician Kits', bayType: 'Long Bay', length: 2080, isShow: true, isDriver: true,
                isPassenger: true, dimension: '1040x1040'
            },
        ],
        panels: null,
        panelsLength: 0,
        panelsRes: []


    },
    beforeUpdate() {
        this.panels = Object.keys(this.panels)
            .filter(key => this.panels[key].filter(t => t.isShow == true).length > 0)
            .reduce((obj, key) => {
                obj[key] = this.panels[key];
                return obj;
            }, {});
            
        if (Object.keys(this.panels).length === 0 && this.panels.constructor === Object)
            $("#noPanels").show();
        else
            $("#noPanels").hide();
    },
    methods: {

        getPanelsByGroup() {
            this.panels = _.groupBy(this.panelsRes, panel => panel.category);
        },

        selectPanel(panel) {
            selectSide.driverSelect = selectSide.passengerSelect = false;
            Vue.lastSelectedModel = panel;
            imgZoom.type = 'panel';
            imgZoom.detail = { title: panel.bayType, desc: panel.spec, category: panel.category, imgPath: panel.name + '.jpg?v=' + new Date() };
            $('.imgzoom-modal').css('display', 'flex');
        },

        filterVisiblePanels() {
            this.panelsRes = Object.assign([], this.orgPanelRes);
            for (let index = 0; index < this.panelsRes.length; index++) {
                this.isPanelShow(vehicle.DriverLengthLeft, vehicle.PassengerLengthLeft, this.panelsRes[index]);
            }
            this.getPanelsByGroup();
        }
    }
})

