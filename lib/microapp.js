var Ayoba = getAyoba()


class AyobaStub {
    constructor() {
        this.finish = this.finish;
        this.getMsisdn = this.getMsisdn;
        this.getCanSendMessage = this.getCanSendMessage;
        this.getLanguage = this.getLanguage;
        this.getSelfJid = this.getSelfJid;
        this.getContacts = this.getContacts;
        this.getCountry = this.getCountry;
        this.sendMessage = this.sendMessage;
        this.composeMessage = this.composeMessage;
        this.sendMedia = this.sendMedia;
        this.sendLocation = this.sendLocation;
        this.triggerLocationChanged = this.triggerLocationChanged;
        this.triggerProfileChanged = this.triggerProfileChanged;
        this.triggerPresenceChanged = this.triggerPresenceChanged;
        this.triggerMediaSentResponse = this.triggerMediaSentResponse;
        this.triggerLocationSentResponse = this.triggerLocationSentResponse;
        this.triggerNicknameChanged = this.triggerNicknameChanged;
    }
}
/**
* Determine the mobile operating system and returns the
* proper javascript interface
*/
function getAyoba() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return null;
    }

    if (/android/i.test(userAgent)) {
        return Android;
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return null; // todo
    }

    return "unknown";
}
