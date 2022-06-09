// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { firebaseCredentials } from './firebase';

// for firebase credentials, create a file named 'firebase.ts' in this folder.
// Then copy and paste the following code into it, with your firebase credentials:

// export const firebaseCredentials = {
//   type: 'XXXXXXXXX',
//   project_id: 'XXXXXXXXXXXXXXXXXX',
//   private_key_id: 'XXXXXXXXXXXXXXXXXXXXXXXXXXX',
//   private_key:
//     '-----BEGIN PRIVATE KEY-----\nXXXXXXXXXXXXXXXXXXXXXXXXXX\n-----END PRIVATE KEY-----\n',
//   client_email: 'XXXXXXXXX@XXXXXXXXXXXXXX.iam.gserviceaccount.com',
//   client_id: 'XXXXXXXXXXXXXXXXXXXXXXX',
//   auth_uri: 'https://accounts.google.com/o/oauth2/auth',
//   token_uri: 'https://oauth2.googleapis.com/token',
//   auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
//   client_x509_cert_url: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
// };

export const environment = {
  production: false,
  firebaseCreds: firebaseCredentials,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
