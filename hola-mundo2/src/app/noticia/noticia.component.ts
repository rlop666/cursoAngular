import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  public noticiaFull: boolean;
  public textoBoton: string;
  constructor() { }

  ngOnInit() {
    this.noticiaFull = false;
    this.textoBoton = 'mostrar más';
  }

  // tslint:disable-next-line:one-line
  cambiaVista(){
    this.noticiaFull = !this.noticiaFull;
    this.textoBoton = this.noticiaFull ? 'ocultar' : 'mostrar más';
  }
}
