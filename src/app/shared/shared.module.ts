import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputRangeComponent} from "./components/ui-components/input-range/input-range.component";
import {MatSliderModule} from "@angular/material/slider";


@NgModule({
  declarations: [
    InputRangeComponent,
  ],
  exports: [
    InputRangeComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ]
})
export class SharedModule { }
