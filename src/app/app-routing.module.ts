import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatsComponent} from "../pages/cats/main";
import {DogsComponent} from "../pages/dogs/main";
import {MainComponent} from "../pages/main/main";

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "cats", component: CatsComponent},
  {path: "dogs", component: DogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
