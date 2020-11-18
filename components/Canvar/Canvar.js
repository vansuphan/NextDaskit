import * as THREE from "three";
import {useState, useEffect, useRef} from "react";
import { add } from "date-fns";
// import ThreeUtils from "plugins/three/ThreeUtils";
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
// import {OBJExporter} from "three/examples/jsm/object"

export default function Canvar() {

    const canvarRef = useRef();
    let group, camera, scene, renderer,light;
    var mouseX = 0, mouseY = 0;
    var exportButton, floatingDiv;

    const [fov, setFov] = useState(75);
    const [aspect, setAspect] = useState();
    const [near, setNear] = useState(0.1);
    const [far, setFar]  = useState(10);

    useEffect(() => {
        if(window){
            scene = new THREE.Scene()
            group = new THREE.Group
            setAspect(window.innerWidth / window.innerHeight || 2)
            camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
            camera.position.set(0, 0, 400);
            renderer = new THREE.WebGLRenderer()
            light = new THREE.DirectionalLight(0xffffff);
            scene.add(light);
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement);

            const boxWidth = 1;
            const boxHeight = 1;
            const boxDepth = 1;
            // const geometry = new THREE.BoxBufferGeometry(boxWidth, boxHeight, boxDepth)
            // const material = new THREE.MeshBasicMaterial({
            //     color: 0x55efc4
            // })
            
            // const cube = new THREE.Mesh(geometry, material);

            // scene.add(cube);
           
            
			
		
            camera.position.z = 5;
            var animate = function () {
            // requestAnimationFrame( animate );
            // cube.rotation.x += 0.01;
            // cube.rotation.y += 0.01;
            renderer.render( scene, camera );
            };
            animate();
        }
    }, []);

    useEffect(()=>{
        if(canvarRef){
            addGeometry( 1 );
            canvarRef.current.addEventListener( 'click', onWindowClick, false );
            canvarRef.current.addEventListener( 'resize', onWindowResize, false );
            canvarRef.current.addEventListener( 'mousemove', onDocumentMouseMove, false );
            canvarRef.current.addEventListener( 'mouseover', onDocumentMouseMove, false );
            canvarRef.current.addEventListener( 'click', function () {
                addGeometry( 1 );
            } );
            const listChildren = Array.from(canvarRef.current.children).map((value, index)=>{
             
                // console.log(value.className);
                switch (value.className) {
                    case 'cube':
                        value.addEventListener( 'click', function () {

                            addGeometry( 2 );
            
                        } );
                        break;
                    case 'cylinder':
                        value.addEventListener( 'click', function () {
    
                            addGeometry( 3 );
                
                        } );
                        break;
                    case 'multiple':
                        value.addEventListener( 'click', function () {
    
                            addGeometry( 4 );
                
                        } );
                        break;
                    case 'transformed':
                        value.addEventListener( 'click', function () {
    
                            addGeometry( 5 );
                
                        } );
                        break;
                    default:
                        break;
                }

            })
            
        }
    },[canvarRef])

    function addGeometry( type ) {

        for ( var i = 0; i < scene.children.length; i ++ ) {

            var child = scene.children[ i ];

            if ( child.isMesh ) {

                child.geometry.dispose();
                scene.remove( child );
                i --;

            }

        }

        if ( type === 1 ) {

            var material = new THREE.MeshLambertMaterial( { color: 0x00cc00 } );
            var geometry = generateTriangleGeometry();

            scene.add( new THREE.Mesh( geometry, material ) );


        } else if ( type === 2 ) {

            var material = new THREE.MeshLambertMaterial( { color: 0x00cc00 } );
            var geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
            scene.add( new THREE.Mesh( geometry, material ) );

        } else if ( type === 3 ) {

            var material = new THREE.MeshLambertMaterial( { color: 0x00cc00 } );
            var geometry = new THREE.CylinderBufferGeometry( 50, 50, 100, 30, 1 );
            scene.add( new THREE.Mesh( geometry, material ) );

        } else if ( type === 4 || type === 5 ) {

            var material = new THREE.MeshLambertMaterial( { color: 0x00cc00 } );
            var geometry = generateTriangleGeometry();

            var mesh = new THREE.Mesh( geometry, material );
            mesh.position.x = - 200;
            scene.add( mesh );

            var geometry2 = new THREE.BoxBufferGeometry( 100, 100, 100 );
            var mesh2 = new THREE.Mesh( geometry2, material );
            scene.add( mesh2 );

            var geometry3 = new THREE.CylinderBufferGeometry( 50, 50, 100, 30, 1 );
            var mesh3 = new THREE.Mesh( geometry3, material );
            mesh3.position.x = 200;
            scene.add( mesh3 );

            if ( type === 5 ) {

                mesh.rotation.y = Math.PI / 4.0;
                mesh2.rotation.y = Math.PI / 4.0;
                mesh3.rotation.y = Math.PI / 4.0;

            }

        }

    }
    function generateTriangleGeometry() {

        var geometry = new THREE.BufferGeometry();
        var vertices = [];

        vertices.push( - 50, - 50, 0 );
        vertices.push( 50, - 50, 0 );
        vertices.push( 50, 50, 0 );

        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        geometry.computeVertexNormals();

        return geometry;

    }

    function onWindowClick( event ) {

        var needToClose = true;
        var target = event.target;

        while ( target !== null ) {

            if ( target === floatingDiv || target === exportButton ) {

                needToClose = false;
                break;

            }

            target = target.parentElement;

        }

        if ( needToClose ) {

            floatingDiv.style.display = 'none';

        }

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

    }

    function onDocumentMouseMove( event ) {

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        mouseX = ( event.clientX - windowHalfX ) / 2;
        mouseY = ( event.clientY - windowHalfY ) / 2;

    }
   
    return (
    <div ref={canvarRef} className={"containerCanvar"}>
        <a href="https://threejs.org" target="_blank" rel="noopener">three.js</a> webgl - exporter - obj<br /><br />
			<button className="triangle">triangle</button>
			<button className="cube">cube</button>
			<button className="cylinder">cylinder</button>
			<button className="multiple">multiple</button>
			<button className="transformed">transformed</button><br /><br />
    </div>
    )
}