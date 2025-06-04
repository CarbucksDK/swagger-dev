window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
        {url: "https://booking.api.carbucks.dev/swagger.yaml", name: "Booking"},
        {url: "https://partner.api.carbucks.dev/swagger.yaml", name: "Partner"},
        {url: "https://login.api.carbucks.dev/swagger.yaml", name: "Login"},
        {url: "https://message.api.carbucks.dev/swagger.yaml", name: "Message"},
        {url: "https://user.api.carbucks.dev/swagger.yaml", name: "User"},
        {url: "https://order.api.carbucks.dev/swagger.yaml", name: "Order"},
        {url: "https://forsi.api.carbucks.dev/swagger.yaml", name: "Forsi"},
        {url: "https://invoice.api.carbucks.dev/swagger.yaml", name: "Invoice"}
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
