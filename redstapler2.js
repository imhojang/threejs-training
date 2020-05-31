var camera;
var renderer;
var scene;
var mesh;

function init() {

	scene = new THREE.Scene();
	scene.background = new THREE.Color('skyblue');
	// Camera
	var fov = 75;
	var aspectRatio = window.innerWidth / window.innerHeight;
	var near = 0.1;
	var far = 1000;
	camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);

	var canvas = document.querySelector('#c');
	renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
	// document.body.appendChild( renderer.domElement );
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;

		// camera.updateProjectMatrix() => camera.updateProjectionMatrix()
		camera.updateProjectionMatrix();
	});

	var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
	var material = new THREE.MeshStandardMaterial();
  material.color = new THREE.Color('lightgreen')

	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	var light = new THREE.DirectionalLight(0xffffff, 1, 1000);
	// position is based on x, y, z
	light.position.set(2, 0, 10);
	scene.add(light);

	camera.position.set(0, 0, 10);
	mesh.position.z = 5;
	mesh.rotation.x = 10;
	mesh.rotation.y = 5;

}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.z += 0.01;
  mesh.rotation.y += 0.01;
  mesh.rotation.x += 0.01;
  renderer.render(scene, camera);
}

init();
animate();