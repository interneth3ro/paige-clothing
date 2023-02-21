import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
