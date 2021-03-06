import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DeletaComponent } from './deleta/deleta.component';
import { CriaComponent } from './cria/cria.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AtualizaComponent } from './atualiza/atualiza.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DeletaComponent,
    CriaComponent,
    AtualizaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
