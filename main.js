function getCookie(domain, name, callback) {
    chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
        if(callback) {
            callback(cookie.value);
        }
    });
}

addUrl = function ( domain, times ) {
    var current = window.location.href;

    if( current.startsWith( domain ) )
    {
        chrome.cookies.set({
            url: domain,
            name: "oi",
            value: "123",
            expirationDate: (new Date().getTime()/1000) + 3600
        });

        getCookie( domain, 'oi', function(id) {
            document.alert(id);
        });

        document.documentElement.innerHTML = '';
        document.documentElement.innerHTML = 'Blocked';
        document.documentElement.scrollTop = 0;
    }

};

addUrl( "http://salvimateus.com", 2 );
addUrl( "https://www.google.com.br", 1 );