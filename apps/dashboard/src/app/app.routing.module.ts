import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"; // CLI imports router

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot([{
    path: "docs",
    loadComponent: () =>
      import("./docs/docs.component").then((c) => c.HugoNxDocs)
  }])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
