import { Routes } from '@angular/router';
import {JobsComponent} from './pages/jobs-page/jobs.component';
import { LandingComponent } from './pages/landing-page/landing.component';
import { authGuard } from './core/guards/auth.guard';
import { AuthCallbackComponent } from './core/services/AuthCallBack.component';
import { MainComponent } from './pages/main-page/main.component';
import {ProfileComponent} from './pages/profile-page/profile.component';

export const routes: Routes = [
    { path: 'landing-page', component: LandingComponent },
    { path: 'auth-modal/callback', component: AuthCallbackComponent },
    { path: 'main',
      component: MainComponent,
      children: [
        {path: 'profile', component: ProfileComponent},
        {path: 'jobs', component: JobsComponent}

      ]

    }, //canActivate: [authGuard]},

];
