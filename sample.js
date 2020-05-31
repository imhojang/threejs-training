const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

// Camera
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// Renderer
const canvas = document.querySelector('#c');
var renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Scene
var scene = new THREE.Scene();

// Cube
const sideLeng = 3;
const boxWidth = sideLeng;
const boxHeight = sideLeng;
const boxDepth = sideLeng;

var geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

camera.position.z = 10;

function makeInstance(geometry, color, x) {
	var textureLoader = new THREE.TextureLoader();
	textureLoader.crossOrigin = true;

	var material = new THREE.MeshPhongMaterial({
		color: color,
		bumpMap: textureLoader.load(
			'https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/4268-bump.jpg'
		),
	});
	mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	return mesh;
}

const cubes = [makeInstance(geometry, 0x44aa88, 0)];

function render(time) {
	time *= 0.001; // convert time to seconds from milliseconds

	cubes.forEach((cube, ndx) => {
		const speed = 1 + ndx * 0.1;
		const rot = time * speed;
		cube.rotation.x = rot;
		cube.rotation.y = rot;
	});

	renderer.render(scene, camera);

	requestAnimationFrame(render);
}
requestAnimationFrame(render);

const color = 0xffffff;
const intensity = 1;
var light = new THREE.DirectionalLight(color, intensity);
light.position.set(1, 1, 3);
scene.add(light);
