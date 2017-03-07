import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home-component";
import {NotFoundComponent} from "./components/notfound-component";

export const allAppComponents = [HomeComponent, NotFoundComponent];

export const routes: Routes = [
	{path: "", component: HomeComponent},
	{path: "**", component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);