import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5';

@Pipe({
  name: 'toMd5'
})
export class ToMd5Pipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return Md5.hashStr(value);
  }

}
