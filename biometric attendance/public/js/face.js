<script src="https://cdn.jsdelivr.net/npm/face-api.js"></script>
<script>
async function startCamera() {
  const video = document.getElementById("video");
  const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
  video.srcObject = stream;
}

async function loadModels() {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
  await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
  await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
}

async function captureFace() {
  const video = document.getElementById("video");
  const detection = await faceapi
    .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks()
    .withFaceDescriptor();

  return detection.descriptor;
}
</script>