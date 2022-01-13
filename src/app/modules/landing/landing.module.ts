import { CUSTOM_ELEMENTS_SCHEMA, NgModule }  from '@angular/core';import { CommonModule }                      from '@angular/common';import { SharedModule }                      from '@shared/shared.module';import { MaterialModule }                    from '@shared/material.module';import { LandingRoutingModule }              from './landing-routing.module';import { LandingComponent }                  from './landing/landing.component';import { LandingHeaderComponent }            from './landing-header/landing-header.component';import { LandingCollectionsComponent }       from './landing-collections/landing-collections.component';import { LandingStoresCollectionsComponent } from './landing-stores-collections/landing-stores-collections.component';import { LandingBannerComponent }            from './landing-banner/landing-banner.component';import { CardModule }                        from '@shared/components/card/card.module';@NgModule({  declarations: [    LandingComponent,    LandingHeaderComponent,    LandingCollectionsComponent,    LandingStoresCollectionsComponent,    LandingBannerComponent  ],  imports: [    CommonModule,    LandingRoutingModule,    SharedModule,    MaterialModule,    CardModule  ],  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],})export class LandingModule {}