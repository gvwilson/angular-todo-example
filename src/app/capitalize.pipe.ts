import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(inputText: any, args?: any): string {
    return inputText.charAt(0).toUpperCase() + inputText.slice(1);
  }

}
