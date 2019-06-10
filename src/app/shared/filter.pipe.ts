import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(array: any[], ...args): any {
    if (array == null) {
      return null;
    }

    return array.filter(function(obj) {
      if (args[1]) {
        return obj.status === args[0];
      }
      return array;
    });

  }

}
