import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserServiceService } from './service/user-service.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthguardService } from './service/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
    UserFormComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
