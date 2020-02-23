
export class ProductModel {
    constructor(
        public id: number,
        public name: string,
        public quantity: number,
        public price: number,
        public availability: boolean,
    ) { }
}
