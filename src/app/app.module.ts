import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSegmentCreateComponent } from './user-segment-create/user-segment-create.component';
import { ChatBotComponent } from './chat/chat-bot/chat-bot.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, UserSegmentCreateComponent, ChatBotComponent],
  imports: [BrowserModule, FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
