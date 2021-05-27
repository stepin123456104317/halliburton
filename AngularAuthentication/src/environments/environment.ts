// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //adal configuration

    tenant: 'b7be7686-6f97-4db7-9081-a23cf09a96b5',
    clientId: 'b614b8e0-1077-4201-9426-756eaa162b4e',
    redirectUri : 'http://localhost:4200',
    endpoints: {
      'http://localhost:4200/': 'the id'
    
    }

    
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
