import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaCurrency',
})
export class CommaCurrencyPipe extends CurrencyPipe implements PipeTransform {
  override transform(
    value: number | string | null | undefined,
    currencyCode?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
    digitsInfo?: string,
    locale?: string
  ): null;
  override transform(
    value: string,
    currencyCode?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
    digitsInfo?: string,
    locale?: string
  ): string | null {
    let formatedString = value.replace(/\,/g, '');
    let result = super.transform(
      formatedString,
      currencyCode,
      display,
      digitsInfo,
      locale
    );
    return result;
  }
}
