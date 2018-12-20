import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WalletStore } from './wallet.store';

@Injectable({ providedIn: 'root' })
export class WalletService {

  constructor(private walletStore: WalletStore) {}

  public updateMnemonic (mnemonic: string) {
    this.walletStore.update(({mnemonic}));
  }

}
