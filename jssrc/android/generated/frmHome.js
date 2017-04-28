function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var Label01bc16bb2da1243 = new kony.ui.Label({
        "id": "Label01bc16bb2da1243",
        "isVisible": true,
        "left": "105dp",
        "skin": "slLabel",
        "text": kony.i18n.getLocalizedString("a"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "69dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label09f8cf884426d40 = new kony.ui.Label({
        "id": "Label09f8cf884426d40",
        "isVisible": true,
        "left": "0dp",
        "skin": "slLabel",
        "text": kony.i18n.getLocalizedString("b"),
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "145dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Button0b8ddf6ff05e049 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0b8ddf6ff05e049",
        "isVisible": true,
        "left": "40dp",
        "onClick": AS_Button_0dd5120ab18d459f83131bb5b36698b3,
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "229dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmHome.add(Label01bc16bb2da1243, Label09f8cf884426d40, Button0b8ddf6ff05e049);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmHome.info = {
        "kuid": "1645cbac94b34dbebc7d64d2d04c4379"
    };
};