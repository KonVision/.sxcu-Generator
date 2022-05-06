// Generate random string (for Upload secret)
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var uploadsecret = generateString(30);


// Get domain from input
let domain = 0;
var changeDomain = ()=>{
    domain = document.getElementById("domain").value;
    console.log("Entered Domain is" + domain);
}


// Create JSON file
function encode( s ) {
    var out = [];
    for ( var i = 0; i < s.length; i++ ) {
        out[i] = s.charCodeAt(i);
    }
    return new Uint8Array( out );
}

var button = document.getElementById( 'button' );
button.addEventListener( 'click', function() {
    
    var data = encode( JSON.stringify({
        "Name": "ShareX Uploader",
        "RequestType": "POST",
        "RequestURL": domain,
        "Body": "MultipartFormData",
        "Arguments": {
          "key": uploadsecret
        },
        "FileFormName": "file",
        "URL": "$json:url$"
    }, null, 4) );

    var blob = new Blob( [ data ], {
        type: 'application/octet-stream'
    });
    
    url = URL.createObjectURL( blob );
    var link = document.createElement( 'a' );
    link.setAttribute( 'href', url );
    link.setAttribute( 'download', 'imageuploader.sxcu' );
    
    var event = document.createEvent( 'MouseEvents' );
    event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    link.dispatchEvent( event );
});
