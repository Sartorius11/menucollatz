import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenucollatzComponent } from './componets/menucollatz/menucollatz.component';
import { CollatzComponent } from './components/collatz/collatz.component';

@NgModule({
  declarations: [
    AppComponent,
    MenucollatzComponent,
    CollatzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
