import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

//import { ProgrammingTraining } from './components/programming-training.component/programming-training.component';
//import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
//import { EmptyComponent } from './components/util/empty/empty.component';
//import { VideoDetailsComponent } from './components/video-details/video-details.component';
//import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home'}
    ]

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
