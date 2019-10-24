import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno/aluno.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { AlunoInserirComponent } from './Aluno/aluno-inserir/aluno-inserir.component';


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
    path: 'disciplina',
    component: DisciplinaComponent
  },
  {
    path: 'matricula',
    component: MatriculaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
