import { Fido2Lib } from "fido2-lib";

export const fido = new Fido2Lib({
  timeout: 60000,
  rpId: "ewe-simple-polecat.ngrok-free.app",
  rpName: "Medtime",
  rpIcon: "/icon-512x512.png",
  challengeSize: 128,
  attestation: "none",
  cryptoParams: [-7, -257],
  authenticatorAttachment: "platform",
  authenticatorRequireResidentKey: false,
  authenticatorUserVerification: "required",
});