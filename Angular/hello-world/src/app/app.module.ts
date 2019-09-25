import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DetalhePessoaComponent } from './components/detalhe-pessoa/detalhe-pessoa.component';
import { ListaPessoaComponent } from './components/lista-pessoa/lista-pessoa.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    DetalhePessoaComponent,
    ListaPessoaComponent,
    ListaPessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
