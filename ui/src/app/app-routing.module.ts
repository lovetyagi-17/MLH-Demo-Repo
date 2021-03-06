import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserguradGuard } from "./services/usergurad.guard";


const routes: Routes = [
    
    {
      path: "login",
      loadChildren: () => 
      import("./login/login.module").then(m => m.LoginModule)
    },
    {
      path: "register",
      loadChildren: () =>
        import("./register/register.module").then(m => m.RegisterModule)
    },
    {
      path: "dashboard",
      loadChildren: () =>
        import("./main-page/main-page.module").then(m => m.MainPageModule)
    },
    {
      path: "home",
      loadChildren: () =>
        import("./home/home.module").then(m => m.HomeModule)
    },
    { path: "", 
      redirectTo: "home", 
      pathMatch: "full" 
    },
    {
      path: "**",
      loadChildren: () =>
        import("./notfound/notfound.module").then(m => m.NotfoundModule)
    }
    
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  