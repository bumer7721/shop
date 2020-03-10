import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private config: ConfigModel;

  constructor() { }

  getConfig(): ConfigModel {
    console.log('ConfigOptionsService get configs!');
    return this.config;
  }

  setConfig(config: ConfigModel): void {
    console.log('ConfigOptionsService set configs!');
    this.config = config;
  }
}
