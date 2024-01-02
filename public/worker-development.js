/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
self.addEventListener("notificationclick", event => {
  console.log("Notificação clicada:", event);
  const clickedNotification = event.notification;
  const action = event.action;
  console.log("Action:", action);

  // Encontre todas as janelas/abas associadas ao Service Worker
  clients.matchAll().then(clientList => {
    // Verifique se há pelo menos uma janela/aba ativa
    if (clientList.length > 0) {
      // Envie uma mensagem para a primeira janela/aba ativa
      clientList[0].postMessage({
        action
      });
    }
  });

  // Fecha a notificação após o clique
  clickedNotification.close();

  // URL que você deseja abrir ao clicar na notificação
  const urlToOpen = "/";
  event.waitUntil(clients.openWindow(urlToOpen));

  // ...restante do código
});
self.addEventListener("push", event => {
  var _event$data$text;
  console.log("event", event);
  const payload = (_event$data$text = event.data.text()) === null || _event$data$text === void 0 ? void 0 : _event$data$text.split(","); // Obtém a string do payload

  console.log("payload", payload);
  const options = {
    body: payload[1],
    actions: [{
      action: "showNotification",
      title: "Show Notification"
    }]
  };
  event.waitUntil(self.registration.showNotification(payload[0], options));
});
/******/ })()
;