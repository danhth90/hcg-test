import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { NzIconModule} from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
const COMP = [
  HeaderComponent
]

@NgModule({
  declarations: [
    ...COMP,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzIconModule.forChild([
      AllIcons.PhoneOutline,
      AllIcons.MailOutline
    ])
  ],
  exports: [
    ...COMP
  ]
})
export class LayoutModule { }
