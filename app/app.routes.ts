import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./components/notfound-component";
import {HomeComponent} from "./components/home-component";
import {MapComponent} from "./components/map-component";

export const allAppComponents = [NotFoundComponent, HomeComponent, MapComponent];

export const routes: Routes = [
	{path: "", component: HomeComponent},
	{path: "home", component: HomeComponent},
	{path: "**", component: NotFoundComponent}
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);