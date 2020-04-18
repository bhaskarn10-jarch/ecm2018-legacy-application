import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Ecm2018LegacyAppSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [Ecm2018LegacyAppSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class Ecm2018LegacyAppHomeModule {}
