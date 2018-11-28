import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'wallet', pathMatch: 'full'  },
      { path: 'wallet', loadChildren: './wallet/wallet.module#WalletModule' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
