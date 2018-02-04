import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.router.module';
import { ServiceModule } from './shared/service.module';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './shared/translate';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ServiceModule
  ],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
