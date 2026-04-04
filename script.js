// script.js - 3D Car Model

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 500, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 500);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Create car body
const carBodyGeometry = new THREE.BoxGeometry(2, 0.5, 4);
const carBodyMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const carBody = new THREE.Mesh(carBodyGeometry, carBodyMaterial);
carBody.position.y = 0.5;
scene.add(carBody);

// Create wheels
const wheelGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.2, 16);
const wheelMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });

const wheelPositions = [
    { x: -0.8, z: 1.2 },
    { x: 0.8, z: 1.2 },
    { x: -0.8, z: -1.2 },
    { x: 0.8, z: -1.2 }
];

wheelPositions.forEach(pos => {
    const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.position.set(pos.x, 0.3, pos.z);
    wheel.rotation.z = Math.PI / 2;
    scene.add(wheel);
});

// Position camera
camera.position.z = 5;
camera.position.y = 2;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    carBody.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / 500;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, 500);
});
