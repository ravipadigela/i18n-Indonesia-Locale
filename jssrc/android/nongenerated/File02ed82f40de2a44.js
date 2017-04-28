function onclickBtnTest() {
    frmdropdown.lstlang.masterData = [
        ["in_ID", "Indonesia"],
        ["en", "English"]
    ];
    frmdropdown.show();
}

function onClickLocaleChange() {
    var setLoc = frmdropdown.lstlang.selectedKey;
    kony.print("Selected Locale" + setLoc);
    alert("Selected Locale" + setLoc);
    kony.i18n.setCurrentLocaleAsync(setLoc, onsuccesscallback, onfailurecallback);
}

function onsuccesscallback(oldlocalename, newlocalename) {
    kony.print("Langauge localeChangesuccesscallback" + kony.i18n.getCurrentLocale());
    alert("Langauge localeChangesuccesscallback" + kony.i18n.getCurrentLocale());
    frmHome.destroy();
    frmHome.show();
}

function onfailurecallback(errCode, errMsg) {
    kony.print("Langauge localeChangeerrorcallback" + kony.i18n.getCurrentLocale());
    alert("Langauge localeChangeerrorcallback" + kony.i18n.getCurrentLocale());
}