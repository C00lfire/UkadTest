export class Products {
    public img: string;
    public type: string;
    public description: string;

    constructor(img:string, type:string, description:string){
        this.img = img;
        this.type = type;
        this.description = description;
    }
}