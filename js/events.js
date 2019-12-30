
var events = new Vue({
    el: '#events',
    data: {
        vehicleInfo: {}
    },
    methods: {
        dollyIn() {
            controls.dollyIn(0.9);
        },

        dollyOut() {
            controls.dollyOut(0.9);
        },

        rotateUp() {
            controls.rotateUp(0.1);
        },

        rotateDown() {
            controls.rotateUp(-0.1);
        },

        rotateLeft() {
            controls.rotateLeft(0.1);
        },

        rotateRight() {
            controls.rotateLeft(-0.1);
        },

        requestFullScreen() {
            var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
                (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
                (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
                (document.msFullscreenElement && document.msFullscreenElement !== null);

            if (!isInFullScreen) {
                // Supports most browsers and their versions.
                var element = document.body; // Make the body go full screen.
                if (element.mozRequestFullScreen)
                    element.mozRequestFullScreen();
                else if (element.webkitRequestFullscreen)
                    element.webkitRequestFullscreen();
            }
            else {
                if (document.mozCancelFullScreen)
                    document.mozCancelFullScreen();
                else if (document.webkitExitFullscreen)
                    document.webkitExitFullscreen();
            }
        },

        autoRotate() {
            controls.autoRotateClock = !controls.autoRotateClock;
        },
        autoRotateClock() {
            controls.autoRotate = !controls.autoRotate;
        }
    }

});