
export class ProductModel {
    constructor(
        public id: number,
        public name: string,
        public quantity: number,
        public availability: boolean,
    ) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.availability = availability;
    }
}
