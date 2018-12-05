import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mnemonic',
  templateUrl: './mnemonic.component.html',
  styleUrls: ['./mnemonic.component.scss']
})
export class MnemonicComponent implements OnInit {

  public mnemonic = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'];

  constructor() { }

  ngOnInit() {
  }

  generateWords() {
    this.mnemonic = this.mnemonic.map(() => ((Math.random()+3*Number.MIN_VALUE)/Math.PI).toString(36).slice(-5));
  }

}
