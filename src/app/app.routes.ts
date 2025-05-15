import { Routes } from '@angular/router';
import { SwipComponent } from './pages/swip/swip.component';
import { LandingComponent } from './pages/landing/landing.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', component: LandingComponent },
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
