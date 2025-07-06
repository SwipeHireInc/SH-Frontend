import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing-page/landing.component';
import { authGuard } from './core/guards/auth.guard';
import { AuthCallbackComponent } from './core/services/AuthCallBack.component';
import {ApplicantPageComponent} from './pages/applicant-components/applicant-page/applicant-page.component';
import {CompanyPageComponent} from './pages/profile-page/company-page/company-page.component';
import {
  ApplicantProfilePageComponent
} from './pages/applicant-components/applicant-profile-page/applicant-profile-page.component';
import {JobsPageComponent} from './pages/applicant-components/jobs-page/jobs-page.component';

export const routes: Routes = [
    {
      path: 'landing-page',
      component: LandingComponent
    },
    {
      path: 'auth-modal/callback',
      component: AuthCallbackComponent
    },
    {
      path: "applicant",
      component: ApplicantPageComponent,
      canActivate: [],
      children: [
        {
          path: "profile",
          component: ApplicantProfilePageComponent
        },
        {
          path: "jobs",
          component: JobsPageComponent
        }
      ]
    },
    {
      path: "company",
      component: CompanyPageComponent,
      canActivate: [],
      children: [
        {
          path: "profile", component: CompanyPageComponent
        },


      ]
    }

];
