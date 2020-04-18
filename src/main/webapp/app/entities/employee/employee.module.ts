import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Ecm2018LegacyAppSharedModule } from 'app/shared/shared.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeUpdateComponent } from './employee-update.component';
import { EmployeeDeleteDialogComponent } from './employee-delete-dialog.component';
import { employeeRoute } from './employee.route';

@NgModule({
  imports: [Ecm2018LegacyAppSharedModule, RouterModule.forChild(employeeRoute)],
  declarations: [EmployeeComponent, EmployeeDetailComponent, EmployeeUpdateComponent, EmployeeDeleteDialogComponent],
  entryComponents: [EmployeeDeleteDialogComponent]
})
export class Ecm2018LegacyAppEmployeeModule {}
