import { Component, OnInit } from '@angular/core';
import { WalletService, WalletQuery } from '../../state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-mnemonic',
  templateUrl: './mnemonic.component.html',
  styleUrls: ['./mnemonic.component.scss']
})
export class MnemonicComponent implements OnInit {

  //public mnemonic$: Observable<string[]>;
  //public mnemonic = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];
  public mnemonic$: Observable<string[]>;

  constructor(private service: WalletService, private query: WalletQuery) { }

  ngOnInit() {
    this.mnemonic$ = this.query.select(state => state.mnemonic).pipe(
      map(m => m.split(' '))
    );
  }

  generateWords() {
    const mnemonic = Array(12)
    .fill('')
    .map(() => ((Math.random()+3*Number.MIN_VALUE)/Math.PI).toString(36).slice(-5))
    .join(' ');

    // update
    this.service.updateMnemonic(mnemonic);
  }

}
