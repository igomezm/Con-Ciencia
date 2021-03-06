import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {  MatToolbarRow} from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ng-image-slider';
import { Routes, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { SemillerosComponent } from './semilleros/semilleros.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './profile/profile.component';
//import {MatSnackBar} from '@angular/material/snack-bar';
//import { ModelComponent } from './model/.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';



export const routes: Routes=[
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'semilleros', component: SemillerosComponent, pathMatch: 'full'},
  {path: 'user-edit', component: NameEditorComponent, pathMatch: 'full'}
  

]


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NameEditorComponent,
    WelcomeComponent,
    ProfileComponent,
    LoginComponent,
    SemillerosComponent
    //ModelComponent
  ],
  imports: [
    BrowserModule,
    //MatSnackBar,
    MatSnackBarModule,
    NgImageSliderModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatSelectModule,
    HttpClientModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule, 
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,   
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
