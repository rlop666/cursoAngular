import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public valorParametro: string;
  constructor() { }

  ngOnInit() {
    this.valorParametro = 'Valor del parámetro';
  }

}
