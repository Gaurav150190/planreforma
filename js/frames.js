
var frames = new Vue({
    el: '#allFrames',
    created() {
        this.getFramesByGroup();
    },
    data: {
        framesRes: [
            { spec: 'RFPK83-U1', price: '$100', categoryId: 1, category: 'Plumber', bayType: 'Medium Bay' },
            { spec: 'RFPK104-U1', price: '$100', categoryId: 1, category: 'Plumber', bayType: 'Long Bay' },
            { spec: 'RFPK124-U1', price: '$100', categoryId: 1, category: 'Plumber', bayType: 'Extra Long Bay' },
            { spec: 'RFEK83-U1', price: '$100', categoryId: 2, category: 'Electrician', bayType: 'Medium Bay' },
            { spec: 'RFEK104-U1', price: '$100', categoryId: 2, category: 'Electrician', bayType: 'Long Bay' },
            { spec: 'RFEK124-U1', price: '$100', categoryId: 2, category: 'Electrician', bayType: 'Extra Long Bay' },
            { spec: 'RFTK83-U1', price: '$100', categoryId: 3, category: 'Trade', bayType: 'Medium Bay' },
            { spec: 'RFLK83-U1', price: '$100', categoryId: 4, category: 'Locksmith', bayType: 'Medium Bay' },
            { spec: 'RFSK104-U1', price: '$100', categoryId: 5, category: 'Service', bayType: 'Long Bay' }
        ],
        frames: null,

    },
    methods: {
        getFramesByGroup() {
            this.frames = _.groupBy(this.framesRes, frame => frame.category);
            console.log(this.frames);
        }
    }
})
