import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    HomeComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    HomeComponent
  ]
})
export class CoreModule { }
