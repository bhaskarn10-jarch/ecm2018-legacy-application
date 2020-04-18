import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ecm2018LegacyAppSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [Ecm2018LegacyAppSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
