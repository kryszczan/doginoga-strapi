const config = {
  locales: ["en", "pl"],
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Doginoga",
      "app.components.LeftMenu.navbrand.workplace": "CMS",
    },
    pl: {
      "app.components.LeftMenu.navbrand.title": "Doginoga",
      "app.components.LeftMenu.navbrand.workplace": "CMS",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
