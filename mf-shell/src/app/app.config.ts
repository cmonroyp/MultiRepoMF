import { getManifest } from '@angular-architects/module-federation';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { CustomManifest } from 'src/utils/config';
import { buildRoutes } from 'src/utils/routes';
import { provideAnimations } from '@angular/platform-browser/animations';
// import { routes } from './app.routes';

const manifest = getManifest<CustomManifest>();
const routes = buildRoutes(manifest);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()],
};
// withHashLocation()
