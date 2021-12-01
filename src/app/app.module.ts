import { MenuComponent } from './ui/menu/menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubeMenuComponent } from './cube-menu/cube-menu.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { TitleCardComponent } from './ui/title-card/title-card.component';
import { TicketComponent } from './ui/ticket/ticket.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CubeMenuComponent,
    FirstPageComponent,
    TitleCardComponent,
    MenuComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
