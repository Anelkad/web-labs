import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbomDetailComponent } from './albom-detail/albom-detail.component';
import { AlbomPhotosComponent } from './albom-photos/albom-photos.component';
import { AlbomsComponent } from './alboms/alboms.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'alboms', component: AlbomsComponent},
  {path: 'alboms/:id', component: AlbomDetailComponent},
  {path: 'alboms/:id/photos', component: AlbomPhotosComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
