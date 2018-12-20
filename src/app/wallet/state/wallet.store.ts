import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface WalletState {
   mnemonic: string;
}

export function createInitialState(): WalletState {
  return {
    mnemonic: '1 2 3 4 5 6 7 8 9 10 11 12'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'wallet' })
export class WalletStore extends Store<WalletState> {

  constructor() {
    super(createInitialState());
  }

}

