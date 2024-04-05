import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], searchStr: string, propertyName: string): any[] {
    if (!arr || arr.length === 0 || !searchStr) {
      return arr;
    }
    const searchLowerCase = searchStr.toLowerCase();
    return arr.filter((item: any) => {
      const itemPropertyLowerCase = item[propertyName].toLowerCase();
      return itemPropertyLowerCase.includes(searchLowerCase);
    });
  }

}

const el = document.createElement('div');
el.innerHTML