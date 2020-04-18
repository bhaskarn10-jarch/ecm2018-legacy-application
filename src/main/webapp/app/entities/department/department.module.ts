import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Ecm2018LegacyAppSharedModule } from 'app/shared/shared.module';
import { DepartmentComponent } from './department.component';
import { DepartmentDetailComponent } from './department-detail.component';
import { DepartmentUpdateComponent } from './department-update.component';
import { DepartmentDeleteDialogComponent } from './department-delete-dialog.component';
import { departmentRoute } from './department.route';

@NgModule({
  imports: [Ecm2018LegacyAppSharedModule, RouterModule.forChild(departmentRoute)],
  declarations: [DepartmentComponent, DepartmentDetailComponent, DepartmentUpdateComponent, DepartmentDeleteDialogComponent],
  entryComponents: [DepartmentDeleteDialogComponent]
})
export class Ecm2018LegacyAppDepartmentModule {}
