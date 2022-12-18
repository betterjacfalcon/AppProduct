import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name:'mayusculas'})
export class MayusculaPipe  implements PipeTransform{

    transform(value:string, isMasyula:boolean=true):string {

        /*if (isMasyula) {
            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        }*/
        return ( isMasyula) ? value.toUpperCase(): value.toLowerCase();
        
       
    }

    
}