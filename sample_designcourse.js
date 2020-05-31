// Scene
var scene = new THREE.Scene();

// Camera
var FOV = 75;
var aspectRatio = window.innerWidth / window.innerHeight;
var nearPlane = 0.1;
var farPlane = 1000;
var camera = new THREE.PerspectiveCamera(
	FOV,
	aspectRatio,
	nearPlane,
	farPlane
);

// Renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });
// background color: Gray
renderer.setClearColor('#e5e5e5');
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var resizeRenderer = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);

	var newAspectRatio = window.innerWidth / window.innerHeight;
	camera.aspect = newAspectRatio;
};
window.addEventListener('resize', resizeRenderer);

// render the scene and the camera after everything is set.
renderer.render(scene, camera);
