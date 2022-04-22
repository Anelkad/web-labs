import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './companies/companies.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { VacanciesComponent } from './vacancies/vacancies.component'
import { AuthInterceptor } from './AuthIntercepter';



@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    VacanciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true}],

  bootstrap: [AppComponent]
})
export class AppModule { }
