// for firebase credentials, create a file named 'firebase.ts' in this folder.
// Then copy and paste the following code into it, with your firebase credentials:

import { firebaseCredentials } from './firebase';

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
  firebase: firebaseCredentials,
  production: true,
};
