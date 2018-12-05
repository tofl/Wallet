import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mnemonic',
  templateUrl: './mnemonic.component.html',
  styleUrls: ['./mnemonic.component.scss']
})
export class MnemonicComponent implements OnInit {

  public mnemonic = [];

  constructor() { }

  ngOnInit() {
  }

  generateWords() {
    this.mnemonic = [];
    for (let i = 0; i < 12; i++) {
      this.mnemonic.push(((Math.random()+3*Number.MIN_VALUE)/Math.PI).toString(36).slice(-5));
    }
  }

}
