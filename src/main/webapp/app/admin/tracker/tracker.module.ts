import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ecm2018LegacyAppSharedModule } from 'app/shared/shared.module';

import { TrackerComponent } from './tracker.component';

import { trackerRoute } from './tracker.route';

@NgModule({
  imports: [Ecm2018LegacyAppSharedModule, RouterModule.forChild([trackerRoute])],
  declarations: [TrackerComponent]
})
export class TrackerModule {}
