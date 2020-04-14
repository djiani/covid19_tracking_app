import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../component/header/header.component';
import { SideNavComponent } from '../component/side-nav/side-nav.component';
import { FooterComponent } from '../component/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,

  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
