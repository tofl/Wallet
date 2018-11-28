import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { MnemonicComponent } from './containers/mnemonic/mnemonic.component';

@NgModule({
  declarations: [MnemonicComponent],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule { }
