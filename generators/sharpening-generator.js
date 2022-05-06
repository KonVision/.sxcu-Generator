// Upload API Domain:
let domain;

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

// Create JSON file
function encode( s ) {
    var out = [];
    for ( var i = 0; i < s.length; i++ ) {
        out[i] = s.charCodeAt(i);
    }
    return new Uint8Array( out );
}

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
