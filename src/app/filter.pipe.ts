import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any[] = []; // Declare the result as an array
  
    if (!value || filterString === '' || propName === '') {
      return value;
    }
  
    value.forEach((a: any) => { // Corrected parentheses and brackets
      if (a[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(a);
      }
    });

    return result; // Return the filtered result
  }
}
