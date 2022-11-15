import {Routes, RouterModule} from '@angular/router';
import { CollatzComponent } from './components/collatz/collatz.component';
import {ModuleWithProviders} from '@angular/core';
const appRoutes: Routes = [
    {path: "", component: CollatzComponent},
    {path: "collatz/:numero", component: CollatzComponent}
]
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);