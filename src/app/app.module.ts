import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SpeakerModule } from './speaker/speaker.module';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {DropdownModule} from 'primeng/dropdown';
import { TokenIntercepterService } from './token-intercepter.service';
import {ListboxModule} from 'primeng/listbox';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,FormsModule, DropdownModule,BrowserAnimationsModule,
    AppRoutingModule, StudentModule, SpeakerModule, AdminModule, HttpClientModule, CoreModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenIntercepterService,
    multi:true
  }],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
