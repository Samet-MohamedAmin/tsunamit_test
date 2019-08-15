import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CoreModule { }
