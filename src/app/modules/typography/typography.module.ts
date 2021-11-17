import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderIiiComponent } from './components/header-iii/header-iii.component';
import { CustomSpanNumberComponent } from './components/custom-span-number/custom-span-number.component';

@NgModule({
  declarations: [HeaderIiiComponent, CustomSpanNumberComponent],
  imports: [CommonModule],
  exports: [HeaderIiiComponent, CustomSpanNumberComponent],
})
export class TypoModule {}
