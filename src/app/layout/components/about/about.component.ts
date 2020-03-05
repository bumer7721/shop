import { Component, OnInit, Inject } from '@angular/core';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { GeneratorData, GeneratorFactory } from 'src/app/core/factories/generator.factory';
import { generate } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
      GeneratorService,
      {provide: GeneratorData, useFactory: GeneratorFactory(50), deps: [GeneratorService]}
  ]
})
export class AboutComponent implements OnInit {

  generatorData: string;

  constructor(
    @Inject(GeneratorData) private generator: string
  ) { }

  ngOnInit() {
    this.generatorData = this.generator;
  }

}
