import { CerimoniaComponent } from './views/cerimonia/cerimonia.component';
import { HomeComponent } from './views/home/home.component';
import { BodyComponent } from './views/body/body.component';
import { ListaPresenteComponent } from './views/lista-presente/lista-presente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'lista-presente', component: ListaPresenteComponent
  },
  {
    path: 'cerimonia', component: CerimoniaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
