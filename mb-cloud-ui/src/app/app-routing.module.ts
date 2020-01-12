import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { FileServingComponent } from './components/file-serving/file-serving.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'drinklist', component: DrinkListComponent},
  {path: 'files', component: FileServingComponent  },
  {path: '', redirectTo: '/drinklist', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
