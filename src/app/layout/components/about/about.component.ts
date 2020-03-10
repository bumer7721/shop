import { Component, OnInit, Inject, Optional, Host } from '@angular/core';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { GeneratorData, GeneratorFactory } from 'src/app/core/factories/generator.factory';
import { ConstantsService, constServiceInstance } from 'src/app/core/services/constants.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConfigModel } from 'src/app/core/models/config.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
      // ConfigOptionsService,
      GeneratorService,
      {provide: ConstantsService, useValue: constServiceInstance},
      {provide: GeneratorData, useFactory: GeneratorFactory(50), deps: [GeneratorService]}
  ]
})
export class AboutComponent implements OnInit {

  config: ConfigModel;
  constantsServiceData: any;
  generatorData: string;

  constructor(
    @Host() @Optional() private configService: ConfigOptionsService,
    private constantsService: ConstantsService,
    @Inject(GeneratorData) private generator: string
  ) { }

  ngOnInit() {
    if (this.configService) {
      this.config = this.configService.getConfig();
    } else {
      console.log('Config service not found! Config data will be empty!');
    }
    this.constantsServiceData = this.constantsService.getConstValue();
    this.generatorData = this.generator;
  }

}
