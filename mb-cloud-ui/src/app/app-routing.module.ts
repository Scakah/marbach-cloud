import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { FileServingComponent } from './components/file-serving/file-serving.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path: 'drinks', component: DrinkListComponent},
  {path: 'files', component: FileServingComponent  },
  {path: 'admin', component: AdminComponent},
  {path: '', redirectTo: '/drinklist', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
