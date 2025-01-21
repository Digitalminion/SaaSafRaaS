import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DmAllCaps'
})
export class AllCapsPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.toUpperCase() : '';
  }
}