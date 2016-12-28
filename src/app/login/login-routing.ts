import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TestLoginComponent }    from './test-login/test-login.component';

const loginRoutes: Routes = [
  { path: 'login', component: TestLoginComponent }
];

export const loginRouting: ModuleWithProviders = RouterModule.forChild(loginRoutes);
