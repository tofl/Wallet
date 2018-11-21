import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  verif: Object[];

  @Input() set mnemonic(mnemo: string[]){
    this.verif = [];
    const random = Array(mnemo.length).fill(0).map((_, i) => i);
    for (let i = 0 ; i < 3 ; i++) {
      const [r] = random.splice(Math.floor(Math.random() * random.length), 1);
      this.verif.push({i: r, word: mnemo[r], ok: false});
    }
    // console.log(this.verif);
  }

  @Output() verificationSuccess = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  checkWord(value: string, i: number){
    if(this.verif[i]['word'] == value)this.verif[i]['ok'] = true;
    else this.verif[i]['ok'] = false;

    this.checkVerification();
  }

  checkVerification(){
    for(let v of this.verif) {
      if(!v['ok']){
        this.verificationSuccess.emit(false);
        return;
      }
    }

    this.verificationSuccess.emit(true);
  }
}