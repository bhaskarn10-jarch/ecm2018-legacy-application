import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Ecm2018LegacyAppSharedModule } from 'app/shared/shared.module';
import { Ecm2018LegacyAppCoreModule } from 'app/core/core.module';
import { Ecm2018LegacyAppAppRoutingModule } from './app-routing.module';
import { Ecm2018LegacyAppHomeModule } from './home/home.module';
import { Ecm2018LegacyAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Ecm2018LegacyAppSharedModule,
    Ecm2018LegacyAppCoreModule,
    Ecm2018LegacyAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Ecm2018LegacyAppEntityModule,
    Ecm2018LegacyAppAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Ecm2018LegacyAppAppModule {}
