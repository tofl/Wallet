import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';



const Material = [
  MatButtonModule,
  MatInputModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    ...Material
  ],
  exports: [
    ...Material
  ]
})
export class SharedModule { }
