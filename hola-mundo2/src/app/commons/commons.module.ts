import { PieComponent } from './pie/pie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezaComponent } from './cabeza/cabeza.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CabezaComponent, PieComponent],
  exports: [CabezaComponent, PieComponent]
})
export class CommonsModule { }
