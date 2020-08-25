function setup() {
    noCanvas();
    // set all available video/audio devices to #videoSource
    attachVideoDevicesToSelect("#videoSource");
    attachAudioDevicesToSelect("#audioSource");
    var video_device = document.getElementById("videoSource");
    console.log(video_device);
    select("#videoSource").changed(changedVideoDevice);
}

function draw() {

}

function changedVideoDevice() {
    console.log('Device Id:', this.value());
}
