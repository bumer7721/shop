import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  generateString(n: number): string {
    let resText = '';
    for (let i = 0; i < n; i++) {
      resText += this.getRndChar();
    }
    return resText;
  }

  private getRndChar(): string {
    const charSequence = this.getRndInteger(0, 2);
    let rndANSICode = 0;
    if (charSequence === 0) { // digits
      rndANSICode = this.getRndInteger(48, 57);
    } else if (charSequence === 1) { // upper case
      rndANSICode = this.getRndInteger(65, 90);
    } else if (charSequence === 2) { // lower case
      rndANSICode = this.getRndInteger(97, 122);
    }
    return String.fromCharCode(rndANSICode);
  }

  private getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}
