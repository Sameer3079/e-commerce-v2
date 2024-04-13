import { Routes } from '@angular/router';
import { CategoryPageComponent } from './pages/category-page/category-page.component';

export const routes: Routes = [
    {
        component: CategoryPageComponent,
        path: 'category/:categoryId',
        pathMatch: 'prefix'
    }
];
