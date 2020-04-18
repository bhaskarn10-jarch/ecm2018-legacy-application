import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ecm2018LegacyAppSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [Ecm2018LegacyAppSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent]
})
export class MetricsModule {}
