import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
import { FormsModule}		from '@angular/forms';
import { AppComponent } 	from './app.component';
import { CPULoader }	 	from './cpu_load';

@NgModule({
imports:      [ 
	BrowserModule,
	FormsModule],
  declarations: [ 
  	AppComponent,
	CPULoader],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
