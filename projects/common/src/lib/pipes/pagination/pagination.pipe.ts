import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DmPagination',
})
export class PaginationPipe implements PipeTransform {
    transform(data: any, args?: any) : Array<any> {
        if(!args){
            args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
            }
        }    
        return this.paginate(data, args.pageSize, args.pageIndex);
   }

    paginate (array: any[], page_size: number, page_number: number) {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }

}