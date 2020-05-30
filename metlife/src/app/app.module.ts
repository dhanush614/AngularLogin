import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserServiceService } from './service/user-service.service';
import { RequestServiceService } from './service/request-service.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthguardService } from './service/authguard.service';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
    UserFormComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent,
    EntryListComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService, RequestServiceService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
