import { CommonsModule } from './commons/commons.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { ListaComponent } from './lista/lista.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    NoticiaComponent,
    FormularioComponent,
    PadreComponent,
    HijoComponent,
    ListaComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
