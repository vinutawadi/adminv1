import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SideNavbarComponent } from './layout/side-navbar/side-navbar.component';
import { appRouting } from './app.routing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    NgbModule.forRoot(),
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
