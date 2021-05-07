import { HomeComponent } from './pages/home/home.component';

export default [
    { path: '', component: HomeComponent},
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
