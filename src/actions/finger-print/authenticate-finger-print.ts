import { base64ToBuffer, bufferToBase64 } from "@/utils";

export const authenticateFingerprint = async (credentialId: any) => {
  try {
    const credentialRequestOptions = await (
      await fetch(`/api/fingerprint/authentication-options`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
    ).json();

    credentialRequestOptions.challenge = new Uint8Array(
      credentialRequestOptions.challenge.data
    );
    credentialRequestOptions.allowCredentials = [
      {
        id: base64ToBuffer(credentialId),
        type: "public-key",
        transports: ["internal"],
      },
    ];

    const credential: any = await navigator.credentials.get({
      publicKey: credentialRequestOptions,
    });

    const data = {
      rawId: bufferToBase64(credential.rawId),
      response: {
        authenticatorData: bufferToBase64(
          credential.response.authenticatorData
        ),
        signature: bufferToBase64(credential.response.signature),
        userHandle: bufferToBase64(credential.response.userHandle),
        clientDataJSON: bufferToBase64(credential.response.clientDataJSON),
        id: credential.id,
        type: credential.type,
      },
    };

    const response = await fetch(`api/fingerprint/authenticate`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ credential: data }),
      credentials: "include",
    });

    if (response.status === 404) {
      localStorage.removeItem("credential-med-time");
    } else {
      const assertionResponse = await response.json();

      return { ...assertionResponse, data };
    }
  } catch (e) {
    console.error("authentication failed", e);
  } finally {
  }
};
