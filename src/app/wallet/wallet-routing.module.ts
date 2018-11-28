import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MnemonicComponent } from './containers/mnemonic/mnemonic.component';

const routes: Routes = [
  { path: '', component: MnemonicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
