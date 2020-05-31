var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
var mesh;

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add icosahedron
var geometry = new THREE.SphereGeometry(24, 32, 32 );
THREE.ImageUtils.crossOrigin = true;
var textureLoader = new THREE.TextureLoader();
textureLoader.crossOrigin = true;
textureLoader.load('./images/이일우.jpg', function(texture) {
  texture.wrapS = texture.wrapT =   THREE.RepeatWrapping;
    texture.repeat.set( 2, 2 );
    var material = new THREE.MeshLambertMaterial( {map: texture} );
  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
  
  render();
});


camera.position.z = 100;

// so many lights
var light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 1, 0 );
scene.add( light );

var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.position.set( 0, -1, 0 );
scene.add( light );

var light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 1, 0, 0 );
scene.add( light );

var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.position.set( 0, 0, 1 );
scene.add( light );

var light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set( 0, 0, -1 );
scene.add( light );

var light = new THREE.DirectionalLight( 0xffffff, 0.5 );
light.position.set( -1, 0, 0 );
scene.add( light );


var render = function () {
  requestAnimationFrame( render );
  mesh.rotation.x += 0.01;
  renderer.render(scene, camera);
};
