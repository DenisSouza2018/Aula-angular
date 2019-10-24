import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisciplinaComponent } from './Disciplina/disciplina.component';
import { MatriculaComponent } from './Matricula/matricula.component';
import { AlunoInserirComponent } from './Aluno/aluno-inserir/aluno-inserir.component';
import { AlunoComponent } from './Aluno/aluno.component';
import { AlunoConsultarComponent } from './Aluno/aluno-consultar/aluno-consultar.component';
import { AlunoDeletarComponent } from './Aluno/aluno-deletar/aluno-deletar.component';
import { AlunoAlterarComponent } from './Aluno/aluno-alterar/aluno-alterar.component';
import { DisciplinaInserirComponent } from './Disciplina/disciplina-inserir/disciplina-inserir.component';
import { DisciplinaDeletarComponent } from './Disciplina/disciplina-deletar/disciplina-deletar.component';
import { DisciplinaConsultarComponent } from './Disciplina/disciplina-consultar/disciplina-consultar.component';
import { DisciplinaAlterarComponent } from './Disciplina/disciplina-alterar/disciplina-alterar.component';
import { MatriculaInserirComponent } from './Matricula/matricula-inserir/matricula-inserir.component';
import { MatriculaDeletarComponent } from './Matricula/matricula-deletar/matricula-deletar.component';
import { MatriculaAlterarComponent } from './Matricula/matricula-alterar/matricula-alterar.component';
import { MatriculaConsultarComponent } from './Matricula/matricula-consultar/matricula-consultar.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'aluno',
    component: AlunoComponent
  },
  {
    path: 'aluno/cadastro',
    component: AlunoInserirComponent
  },
  {
    path: 'aluno/consulta',
    component: AlunoConsultarComponent
  },
  {
    path: 'aluno/deletar',
    component: AlunoDeletarComponent
  },
  {
    path: 'aluno/alterar',
    component: AlunoAlterarComponent
  },
  {
    path: 'disciplina',
    component: DisciplinaComponent
  },
  {
    path: 'disciplina/cadastro',
    component: DisciplinaInserirComponent
  },
  {
    path: 'disciplina/deletar',
    component: DisciplinaDeletarComponent
  },
  {
    path: 'disciplina/consulta',
    component: DisciplinaConsultarComponent
  },
  {
    path: 'disciplina/alterar',
    component: DisciplinaAlterarComponent
  },
  {
    path: 'matricula',
    component: MatriculaComponent
  },
  {
    path: 'matricula/cadastrar',
    component: MatriculaInserirComponent
  },{
    path: 'matricula/deletar',
    component: MatriculaDeletarComponent
  },
  {
    path: 'matricula/alterar',
    component: MatriculaAlterarComponent
  },
  {
    path: 'matricula/consulta',
    component: MatriculaConsultarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
