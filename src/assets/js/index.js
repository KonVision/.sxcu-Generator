let domain = 0;
var changeDomain = ()=>{
    domain = document.getElementById("domain").value;
    console.log("Entered Domain is" + domain);
}



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
        "Version": "13.7.0",
        "Name": "php",
        "DestinationType": "ImageUploader",
        "RequestMethod": "POST",
        "RequestURL": domain,
        "Body": "MultipartFormData",
        "Arguments": {
          "k": "touploadornottoupload"
        },
        "FileFormName": "d"
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