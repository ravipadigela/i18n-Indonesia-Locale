//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "SampleLocale",
    appName: "SampleLocale",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.30.28",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "SampleLocale",
    isMFApp: false,
    url: "http://wklxkonyappts06.uk.ri.ad:8080/SampleLocale/MWServlet",
    secureurl: "http://wklxkonyappts06.uk.ri.ad:8080/SampleLocale/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmdropdownGlobals();
    frmHomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("in_ID", onSuccess, onFailure, null);