import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name:'vuela'})
export class VolarPipe  implements PipeTransform{

    transform(isVuela:boolean=true):string {

        /*if (isMasyula) {
            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        }*/
        return ( isVuela) ? 'vuela': 'no vuela';
        
       
    }

}