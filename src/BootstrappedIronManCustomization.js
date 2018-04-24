export default class BootstrappedIronManCustomization {
    constructor() {
        this.initRouter();
        this.initMenu();
        this.initToolbar();
        this.initActions();
        this.initViews();
        this.defaultRoute();
    }

    initRouter() {
    }

    initViews() {
    }

    defaultRoute() {
    }

    initToolbar() {
    }

    initActions() {
    }

    initMenu() {
    }
}

UI.plugin(() => {
    console.log('Loading BootstrappedIronMan plugin @@version @@timestamp');

    window.customization = new BootstrappedIronManCustomization();
});
