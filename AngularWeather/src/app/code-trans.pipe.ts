import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeTrans'
})
export class CodeTransPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
