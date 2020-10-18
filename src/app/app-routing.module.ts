import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchBarComponent } from '@progress/kendo-angular-dropdowns';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path:'' , redirectTo:'add-employee', pathMatch:'full'
  },
  {
    path:'add-employee' , component:AddComponent
  },
  {
    path:'search-employee' , component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
