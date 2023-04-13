        /*Yohan Hernando González Gutiérrez - 6000615*/
        
        /*Metodo que crea la escena y color de la misma*/
        var scene = new THREE.Scene();
        scene.background = new THREE.Color(0xFFFFFF);

        /*Metodo que añade la camara a la escena*/
        var camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth/window.innerHeight
        );

        /*Parametros rotacion y posicion de la camara*/
        camera.position.z = 5.8;
        camera.rotation.x = -0.30;
        camera.rotation.y = 0.10;
        camera.position.x = 2.5;
        camera.position.y = 5;

        /*Creacion del render*/
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        /*Metodo que añade la geometria (cubo) y material a la escena*/
        var geometry = new THREE.BoxGeometry(2,2,2);
        var material = new THREE.MeshBasicMaterial({color: 0x67E7FE, wireframe: false});
        var cube = new THREE.Mesh(geometry, material)

        scene.add(cube);

        /*Metodo que añade la geometria (cubo) y material a la escena*/
        var geometry2 = new THREE.BoxGeometry(1,1,1);
        var material2 = new THREE.MeshBasicMaterial({color: 0xB0FE67, wireframe: false});
        var cube2 = new THREE.Mesh(geometry2, material2);

        scene.add(cube2);

        /*Metodo que añade la geometria (cubo) y material a la escena*/
        var geometry3 = new THREE.BoxGeometry(0.5,0.5,0.5);
        var material3 = new THREE.MeshBasicMaterial({color: 0xFF7A9E, wireframe: false});
        var cube3 = new THREE.Mesh(geometry3, material3);
        
        scene.add(cube3);

        /*Metodo que crea el plano cartesiano en la escena*/
        const axesHelper = new THREE.AxesHelper(10);
        scene.add( axesHelper );

        /*Metodo que crea la maya en la escena*/
        const size = 100;
        const divisions = 50;
        const gridHelper = new THREE.GridHelper( size, divisions );
        scene.add( gridHelper );

        /*Una funcion para ubicar las respectivas geometrias*/

        var setp=0
        function render() {
            setp += 0.05; 

            cube.position.x = (Math.sin(setp)+1)/2;
            cube.position.y = (Math.sin(setp)+1)/2;
            cube.position.z = (Math.sin(setp)+1)/2;

            cube2.position.x = (Math.sin(setp)+1)/2;
            cube2.position.y = ((Math.sin(setp)+1)*2.5)/2;
            cube2.position.z = (Math.sin(setp)+1)/2;

            cube3.position.x = (Math.sin(setp)+1)/2;
            cube3.position.y = ((Math.sin(setp)+1)*3.25)/2;
            cube3.position.z = (Math.sin(setp)+1)/2;
  
            renderer.render(scene, camera);

     setTimeout(()=>{requestAnimationFrame(render)}, 100);
  }
  requestAnimationFrame(render);

main();
