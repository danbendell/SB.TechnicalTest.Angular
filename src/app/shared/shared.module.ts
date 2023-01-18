import { NgModule } from '@angular/core';
import { CommaCurrencyPipe } from './_pipes/comma-currency.pipe';

@NgModule({
  declarations: [CommaCurrencyPipe],
  imports: [],
  providers: [],
  bootstrap: [],
  exports: [CommaCurrencyPipe],
})
export class SharedModule {}
