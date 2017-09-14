import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public imprResultado;
  public imprTonoClaro;
  public aProvincias;
  public provincia;
  public aChecks;

  constructor() { }

  ngOnInit() {
    this.imprResultado = false;
    this.imprTonoClaro = false;
    this.aProvincias = [{idProvincia: 1, nombre: 'A Coruña'},
                        {idProvincia: 2, nombre: 'Albacete'},
                        {idProvincia: 3, nombre: 'Almería'}];
    this.aChecks = [{valor: 'Imprimir resultado', selected: false},
                    {valor: 'Imprimir tonos claros', selected: false}];
  }

}
