function getImage() {

    var imgData = renderer.domElement.toDataURL('image/jpeg');
    var link = document.createElement('a');
    var tt = imgData.replace('image/jpeg', 'image/octet-stream');
    link.download = 'test.jpg';
    link.href = tt;
    link.click();
}
