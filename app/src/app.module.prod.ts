import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { todoReducer } from "./reducers/reducers";

import { AirplaneModule } from "./airplane/airplane.module";

export const appRoutes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: "./hello-world/hello-world.module#HelloWorldModule"
  },
  {
    path: "todos",
    pathMatch: "full",
    loadChildren: "./todos/todos.module#TodosModule"
  },
  {
    path: "todos",
    pathMatch: "full",
    loadChildren: "./airplane/airplane.module#AirplaneModule"
  }
];

@NgModule({
  imports: [
    AppModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ todoReducer }),
    AirplaneModule
  ],
  bootstrap: [AppComponent]
})
export class AppModuleProd {}
