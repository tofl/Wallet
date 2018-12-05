import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { MnemonicComponent } from './containers/mnemonic/mnemonic.component';

import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [MnemonicComponent],
  imports: [
    CommonModule,
    WalletRoutingModule,
    SharedModule
  ]
})
export class WalletModule { }
