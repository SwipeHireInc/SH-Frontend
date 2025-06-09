import { Routes } from '@angular/router';
import { SwipComponent } from './pages/swip/swip.component';
import { LandingComponent } from './pages/landing/landing.component';
import { authGuard } from './core/guards/auth.guard';
import { AuthCallbackComponent } from './core/services/AuthCallBack.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'auth/callback', component: AuthCallbackComponent },
    { path: 'main', component: MainComponent},
    {
        path: "app",
        canActivate: [authGuard],
        children: [
            {path: 'swip', component: SwipComponent}
            // {path: 'chat', component: ChatComponent},
            // {path: 'profile', component: ProfileComponent},
        ]

    }

];
