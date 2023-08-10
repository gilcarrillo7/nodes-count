import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { FormsModule } from "@angular/forms";
import { InputComponent } from './input/input.component';
import { CountComponent } from './count/count.component';

@NgModule({
  declarations: [AppComponent, FormComponent, InputComponent, CountComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
