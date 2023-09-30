import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { CustomManifest } from './config';
import { APP_ROUTES } from 'src/app/app.routes';

export function buildRoutes(options: CustomManifest): Routes {
  const lazyRoutes: Routes = Object.keys(options).map((key) => {
    const entry = options[key];
    console.log(`❌  :>>`, entry.routePath);
    return {
      path: entry.routePath,
      [entry.isStandalone ? 'loadComponent' : 'loadChildren']: () =>
        loadRemoteModule({
          type: 'manifest',
          remoteName: key,
          exposedModule: entry.exposedModule,
        }).then((m) => m[entry.ngModuleName]),
    };
  });
  return lazyRoutes;
}
