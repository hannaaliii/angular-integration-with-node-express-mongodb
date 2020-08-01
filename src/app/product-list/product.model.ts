export class ProductModel{
    constructor(
        public productId: number,
        public productName : string,
        public productCode : string,
        public description : string,
        public releaseDate : string,
        public price : number,
        public starRating : number,
        public imageUrl : string
    ){}
}