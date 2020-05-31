// Camera
var fov = 75;
var aspectRatio = window.innerWidth / window.innerHeight;
var near = 0.1;
var far = 1000;
var camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);

// Renderer
var canvas = document.querySelector('#c');
var renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#e5e5e5');

window.addEventListener('resize', () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;

	// camera.updateProjectMatrix() => camera.updateProjectionMatrix()
	camera.updateProjectionMatrix();
});

// Scene
var scene = new THREE.Scene();

/**
 * This is the end of the setup.
 * You will see a gray screen on web browser
 */

// creating a sphere
var radius = 1;
var widthSegments = 1;
var heightSegments = 1;

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var geometry = new THREE.BoxGeometry(
	radius,
	widthSegments,
	heightSegments
);
var material = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });

// geometry first, material second
var mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 2;
scene.add(mesh);

var geometry = new THREE.BoxGeometry(
	radius,
	widthSegments,
	heightSegments
);
var material = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });

// geometry first, material second
var mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);

meshX = -10;
for (var i = 0; i < 15; i++) {
	var mesh = new THREE.Mesh(geometry, material);
	mesh.position.x = (Math.random() - 0.5) * 10;
	mesh.position.y = (Math.random() - 0.5) * 10;
	mesh.position.z = (Math.random() - 0.5) * 10;
	scene.add(mesh);
	meshX += 1;
}

// mesh.position.x = -2;
// mesh.position.y = 2;
// mesh.position.z = -2;

// short-hand method for position
// mesh.position.set(-2,2,-2);

// rotate
// mesh.rotation.set(0,5,0);

// scale
// mesh.scale.set(1,2,1);

// add light

var light = new THREE.PointLight(0xffffff, 1, 1000);
// position is based on x, y, z
light.position.set(0, 0, 0);
scene.add(light);

var light = new THREE.PointLight(0xffffff, 2, 1000);
// position is based on x, y, z
light.position.set(0, 0, 25);
scene.add(light);

var render = function () {
	requestAnimationFrame(render);

	// adding 0.01 every time this renderer function is called (60FPS)
	// mesh.rotation.x += 0.01;

	renderer.render(scene, camera);
};

function onMouseMove(event) {
	event.preventDefault();

	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

	raycaster.setFromCamera(mouse, camera);

	var intersects = raycaster.intersectObjects(scene.children, true);

	for (var i = 0; i < intersects.length; i++)
		// intersects[i].object.material.color.set(0xff0000);
		this.tl = new TimelineMax();
	this.tl.to(intersects[i].object.scale, 1, {
		x: 2,
		ease: Expo.easeOut,
	});
	this.tl.to(intersects[i].object.scale, 0.5, {
		x: 0.5,
		ease: Expo.easeOut,
	});
	this.tl.to(intersects[i].object.position, 0.5, {
		x: 2,
		ease: Expo.easeOut,
	});
	this.tl.to(
		intersects[i].object.rotation,
		0.5,
		{ y: Math.PI * 0.5, ease: Expo.easeOut },
		'=-1.5'
	);
}

render();

window.addEventListener('mousemove', onMouseMove);
