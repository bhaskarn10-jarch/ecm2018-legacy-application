import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ecm2018LegacyAppSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [Ecm2018LegacyAppSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent]
})
export class AuditsModule {}
