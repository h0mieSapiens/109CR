import { SharedService } from '../service/shared.service';

export class Post{
    public message: string;
    public to: string;
    public from: string;
    public createdOn: Date;
    public img: string;


    constructor( ){
       
        this.to="Everyone";
        this. createdOn= new Date();
    }
}