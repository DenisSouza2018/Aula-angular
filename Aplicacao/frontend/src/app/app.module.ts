import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoConsultarComponent } from './Aluno/aluno-consultar/aluno-consultar.component';
import { AlunoDeletarComponent } from './Aluno/aluno-deletar/aluno-deletar.component';
import { AlunoInserirComponent } from './Aluno/aluno-inserir/aluno-inserir.component';
import { AlunoAlterarComponent } from './Aluno/aluno-alterar/aluno-alterar.component';
import { DisciplinaAlterarComponent } from './Disciplina/disciplina-alterar/disciplina-alterar.component';
import { DisciplinaConsultarComponent } from './Disciplina/disciplina-consultar/disciplina-consultar.component';
import { DisciplinaDeletarComponent } from './Disciplina/disciplina-deletar/disciplina-deletar.component';
import { DisciplinaInserirComponent } from './Disciplina/disciplina-inserir/disciplina-inserir.component';
import { MatriculaInserirComponent } from './Matricula/matricula-inserir/matricula-inserir.component';
import { MatriculaDeletarComponent } from './Matricula/matricula-deletar/matricula-deletar.component';
import { MatriculaConsultarComponent } from './Matricula/matricula-consultar/matricula-consultar.component';
import { MatriculaAlterarComponent } from './Matricula/matricula-alterar/matricula-alterar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatriculaComponent } from './matricula/matricula.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { AlunoComponent } from './aluno/aluno.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunoConsultarComponent,
    AlunoDeletarComponent,
    AlunoInserirComponent,
    AlunoAlterarComponent,
    DisciplinaAlterarComponent,
    DisciplinaConsultarComponent,
    DisciplinaDeletarComponent,
    DisciplinaInserirComponent,
    MatriculaInserirComponent,
    MatriculaDeletarComponent,
    MatriculaConsultarComponent,
    MatriculaAlterarComponent,
    MatriculaComponent,
    DisciplinaComponent,
    AlunoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
