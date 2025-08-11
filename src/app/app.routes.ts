import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing-page/landing.component';
import { authGuard } from './core/guards/auth.guard';
import { AuthCallbackComponent } from './core/services/authservice/AuthCallBack.component';
import {ApplicantPageComponent} from './pages/applicant-page/applicant-page/applicant-page.component';
import {CompanyPageComponent} from './pages/company-page/company-page/company-page.component';
import {
  ApplicantProfilePageComponent
} from './pages/applicant-page/applicant-profile-page/applicant-profile-page.component';
import {JobsPageComponent} from './pages/applicant-page/jobs-page/jobs-page.component';
import {CompanyProfileComponent} from './pages/company-page/company-profile/company-profile.component';
import {
  CandidateComponentComponent,
} from './pages/company-page/publish-component/candidate-component.component';
import {ChooseRoleComponent} from './shared/components/choose-role/choose-role.component';

export const routes: Routes = [
    {
      path: 'landing',
      component: LandingComponent
    },
    {
      path: 'auth-modal/callback',
      component: AuthCallbackComponent
    },
    {
      path: "applicant",
      component: ApplicantPageComponent,
      // canActivate: [],
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
          path: "profile", component: CompanyProfileComponent
        },
        {
          path: "candidates", component: CandidateComponentComponent
        },
      ]
    },
    {
      path: "choose",
      component: ChooseRoleComponent
    }
];
