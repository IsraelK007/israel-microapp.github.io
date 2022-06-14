var Ayoba = getAyoba()

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

consoletodiv('logger')
console.log('Logger loaded...')
var count = 1;
function defer(method) {
    console.log('defer called: ', count++);
    try {
        if (Ayoba && Ayoba.hasOwnProperty('getMsisdn') && Ayoba.getMsisdn()) {
            console.log('Ayoba loaded...');
            method();
        } else {
            console.log('Ayoba not read yet...');
            setTimeout(function () {
                defer(method)
            }, 50);
        }
    } catch (e) {
        console.log('An error occurred', e.message);
    }
}

defer(function () {
    function getMsisdn() {
        var msisdn = Ayoba.getMsisdn();
        var input = document.querySelector('#cellphone');
        input.value = msisdn;
    }


    console.log(Object.getOwnPropertyNames(Ayoba).join(', '))
    console.log('Msisdn: ');
    console.log(Ayoba.getMsisdn())
    getMsisdn();
})