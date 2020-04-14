import { PipeTransform, Pipe } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product.model';

@Pipe({
    name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform {

    transform(array: Array<ProductModel>, property: string, desc = true) {
        const result = array;
        if (result && property) {
            result.sort(this.dynamicSort(property, desc));
            console.log('Array of products sorted by [' + property + '], desc - ' + desc);
        }
        return result;
    }

    private dynamicSort(property: string, desc: boolean): (a: ProductModel, b: ProductModel) => number {
        const sortOrder = desc ? -1 : 1;
        return (a: ProductModel, b: ProductModel) => {
            const comparingRes = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return comparingRes * sortOrder;
        };
    }
}
