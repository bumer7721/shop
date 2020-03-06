import { Component, OnInit, Inject } from '@angular/core';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { GeneratorData, GeneratorFactory } from 'src/app/core/factories/generator.factory';
import { ConstantsService, constServiceInstance } from 'src/app/core/services/constants.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
      GeneratorService,
      {provide: ConstantsService, useValue: constServiceInstance},
      {provide: GeneratorData, useFactory: GeneratorFactory(50), deps: [GeneratorService]}
  ]
})
export class AboutComponent implements OnInit {

  constantsServiceData: any;
  generatorData: string;

  constructor(
    private constantsService: ConstantsService,
    @Inject(GeneratorData) private generator: string
  ) { }

  ngOnInit() {
    this.constantsServiceData = this.constantsService.getConstValue();
    this.generatorData = this.generator;
  }

}
