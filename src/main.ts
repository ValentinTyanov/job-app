import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { UIRouter, UrlService } from '@uirouter/core';


if (environment.production) {
  enableProdMode();
}

// Manually bootstrap the Angular app
platformBrowserDynamic().bootstrapModule(AppModule).then((platformRef) => {
  // get() the UIRouter instance from DI to initialize the router
  const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

  const startRouter = () => {
    // Instruct UIRouter to listen to URL changes
    urlService.listen();
    urlService.sync();
  };

  platformRef.injector.get<NgZone>(NgZone).run(startRouter);
});
