import { Portal } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortalComponent } from './components/portal.component';
import { PortalRoutingModule } from './portal-routing.module';
@NgModule({
    declarations: [PortalComponent],
    imports: [
        CommonModule,
        PortalRoutingModule,
        SharedModule
    ],
    providers: [],
})
export class PortalModule { }
