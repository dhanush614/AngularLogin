import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { SuccessComponent } from './success/success.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthguardService } from './service/authguard.service';


const routes: Routes = [
  { path: 'users', component: EntryFormComponent, canActivate: [AuthguardService] },
  { path: 'requests', component: EntryListComponent, canActivate: [AuthguardService] },
  { path: 'adduser', component: UserFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthguardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
