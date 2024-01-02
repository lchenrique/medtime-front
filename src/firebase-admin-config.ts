import { initializeApp, getApps, cert } from "firebase-admin/app";

var serviceAccount = require("./remind-560ac-firebase-adminsdk-2otww-13819006c3.json");

const firebaseAdminConfig = {
  credential: cert(serviceAccount),
};

export function customInitApp() {
  if (getApps().length <= 0) {
    initializeApp(firebaseAdminConfig);
  }
}
