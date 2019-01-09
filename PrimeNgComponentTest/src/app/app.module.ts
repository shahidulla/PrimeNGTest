import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AppComponent } from './app.component';
import { RadioButtonTestComponent } from './component/radio-button-test/radio-button-test.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RadioButtonTestComponent
  ],
  imports: [
    BrowserModule, AccordionModule, BrowserAnimationsModule, RadioButtonModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
