import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SideBarComponent
  ]
})
export class CoreModule { }
