<script src="https://cdn.jsdelivr.net/npm/face-api.js"></script>
<script>
async function startCamera(videoId) {
    const video = document.getElementById(videoId);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
}

async function loadModels() {
    const url = "https://cdn.jsdelivr.net/npm/face-api.js/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(url);
    await faceapi.nets.faceLandmark68Net.loadFromUri(url);
    await faceapi.nets.faceRecognitionNet.loadFromUri(url);
}

async function captureDescriptor(videoId) {
    const video = document.getElementById(videoId);

    const detection = await faceapi
        .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptor();

    if (!detection) return null;
    return Array.from(detection.descriptor);
}

function distance(d1, d2) {
    let sum = 0;
    for (let i = 0; i < d1.length; i++) {
        sum += Math.pow(d1[i] - d2[i], 2);
    }
    return Math.sqrt(sum);
}
</script>