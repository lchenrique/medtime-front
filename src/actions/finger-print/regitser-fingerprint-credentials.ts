"use client"
import { bufferToBase64 } from "@/utils";


export const registerFingerprint = async (user:any) => {

  try {
    const credentialCreationOptions = await (await fetch(`api/fingerprint/registration-options`, {
      method:"GET",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })).json();


    credentialCreationOptions.challenge = new Uint8Array(credentialCreationOptions.challenge.data);
    credentialCreationOptions.user.id = new Uint8Array(credentialCreationOptions.user.id.data);
    credentialCreationOptions.user.name = user?.name;
    credentialCreationOptions.user.displayName = user?.email;


    const credential:any = await navigator.credentials.create({
      publicKey: credentialCreationOptions
    })


    const credentialId = bufferToBase64(credential.rawId);

    localStorage.setItem('credential-med-time', JSON.stringify({credentialId}));

    const data = {
      rawId: credentialId,
      response: {
        attestationObject: bufferToBase64(credential.response.attestationObject),
        clientDataJSON: bufferToBase64(credential.response.clientDataJSON),
        id: credential.id,
        type: credential.type
      }
    };
 

    await (await fetch(`api/fingerprint/register`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({credential: data, id: user.id}),
      credentials: 'include'
    })).json();


    return { data}

  }
  catch(e) {
    console.error(e);
  }
  finally {
  }
};
