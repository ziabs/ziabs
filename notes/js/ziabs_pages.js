;(function () {	
    'use strict'; 
//Page Hash
var hash=window.location.hash;
window.location.hash = hash;
$('meta[name=description]').attr('content', 'ziAbs notes'+hash );
(hash)?$(document).prop('title','ziAbs-Notes '+hash):$(document).prop('title','ziAbs-Notes #'+$('.ziabs-title').eq(0)[0].id);
//# YOUR PAGES GOES HERE
    $( "#how-to-pass-a-variable-by-value-to-async-callbacks-in-javascript" ).load( "pages/how-to-pass-a-variable-by-value-to-async-callbacks-in-javascript.html" );
    $( "#how-to-create-swap-on-centos7" ).load( "pages/how-to-create-swap-on-centos7.html" );
}());    
