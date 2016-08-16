/**
 * Created by Mateusz on 2016-08-12.
 */
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
import {HTTP_PROVIDERS} from '@angular/http';

platformBrowserDynamic().bootstrapModule(AppModule,[
  HTTP_PROVIDERS
  ]);
