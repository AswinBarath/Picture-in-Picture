const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass the element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch (error) {
        // Catch error here
        console.log('oops, error here: ', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
})

//  On Load
selectMediaStream();