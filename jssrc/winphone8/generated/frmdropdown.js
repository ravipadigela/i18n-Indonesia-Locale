function addWidgetsfrmdropdown() {
    frmdropdown.setDefaultUnit(kony.flex.DP);
    var lstlang = new kony.ui.ListBox({
        "enableCache": false,
        "height": "40dp",
        "id": "lstlang",
        "isVisible": true,
        "left": "49dp",
        "masterData": [
            ["lb1", "Listbox One"],
            ["lb2", "Listbox Two"],
            ["lb3", "Listbox Three"]
        ],
        "skin": "slListBox",
        "top": "60dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnOk = new kony.ui.Button({
        "enableCache": false,
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnOk",
        "isVisible": true,
        "left": "49dp",
        "onClick": AS_Button_63ca638d7bb74416826ee44f621d1afd,
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "147dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmdropdown.add(lstlang, btnOk);
};

function frmdropdownGlobals() {
    frmdropdown = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmdropdown,
        "enableCache": false,
        "enabledForIdleTimeout": false,
        "id": "frmdropdown",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "animateHeaderFooter": false,
        "directChildrenIDs": ["btnOk", "lstlang"],
        "retainScrollPosition": false,
        "titleBar": true
    });
    frmdropdown.info = {
        "kuid": "c06f9f109deb4fc39e4858f06d014fe7"
    };
};