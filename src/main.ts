
import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

/*
import {CPULoader} from './cpu_load';

var cpu: CPULoader = new CPULoader();

cpu.send("SOS");
*/
