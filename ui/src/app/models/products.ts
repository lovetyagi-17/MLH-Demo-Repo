export class ProductModel {
    public constructor(
        public _id?:string,
        public productName?:string,
        public description?:string,      
        public price?:number,
        public quantity?:number,
    ){}
}