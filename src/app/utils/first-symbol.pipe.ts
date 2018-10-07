import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstSymbol'
})
export class FirstSymbolPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    if ( value && value.length > 0) {
      return value.charAt(0).toUpperCase();
    } else {
      return '';
    }
  }

}
