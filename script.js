const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const videoSourceBtn = document.getElementById('video-source');

// Click Select source Button to select media stream, pass to video element, then play
videoSourceBtn.addEventListener('click', async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log(`Error Here,Please correct mistake:`, error);
  }
});

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});
