import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { DonateComponent } from './donate/donate.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth-guard.service'

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'marketplace', component: MarketplaceComponent},
  { path: 'donate', component: DonateComponent},
  { path: 'albums/:id', component: AlbumDetailComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
