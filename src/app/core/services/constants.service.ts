import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  private constValue = 'testConstantsServiceValue';

  constructor() { }

  getConstValue(): any {
    return this.constValue;
  }
}

export const constServiceInstance = new ConstantsService();
