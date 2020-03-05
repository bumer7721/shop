import { GeneratorService } from '../services/generator.service';
import { InjectionToken } from '@angular/core';

export const GeneratorData = new InjectionToken<string>('GeneratorData');

export function GeneratorFactory(n: number) {
    return (generatorService: GeneratorService): string =>
        generatorService.generateString(n);

}
