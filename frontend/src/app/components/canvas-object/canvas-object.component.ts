import { Component, OnInit } from '@angular/core';
import * as THREE from './three.module.js';

@Component({
  selector: 'app-canvas-object',
  template: '',
  styleUrls: ['./canvas-object.component.scss']
})
export class CanvasObjectComponent implements OnInit {

  constructor() { }

  private camera;
  private scene;
  private renderer;
  private geometry;
  private material;
  private mesh;

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    const width = 300;
    const height = 300;

    this.camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
    this.camera.position.z = 1;

    this.scene = new THREE.Scene();

    this.geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.scene.add( this.mesh );

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setSize( width, height );
    this.renderer.setAnimationLoop( this.animation.bind(this) );
    document.querySelector('app-canvas-object').appendChild( this.renderer.domElement );
  }

  animation(time: number): void {
    this.mesh.rotation.x = time / 2000;
    this.mesh.rotation.y = time / 1000;

    this.renderer.render( this.scene, this.camera );
  }

}





