import { Pipe, PipeTransform } from '@angular/core';
import { Enfant } from './enfant';

@Pipe({
  name: 'searchfilter'
})
export class SearchPipe implements PipeTransform {

  transform(Enfants:Enfant[],searchValue:string): Enfant[] {
    if( !Enfant || !searchValue){
      return Enfants;
    }
    return Enfants.filter(Enfant => Enfant.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
