// if url is not get any parameter then it will redirect to home page



if(window.location.href.indexOf('?') == -1) {
    window.location.href = 'index.html';
}

//get the parameter from url

var url = new URL(window.location.href);
var isOrg = url.searchParams.get("Org");

// get parameter from url after & symbol

var isPoweredBy = url.searchParams.get("PoweredBy");



//if parameter is not equal to the value then it will redirect to home page

if(isOrg != 'SBC' || isPoweredBy != 'nandysagar.in') {
    window.location.href = 'error_url.html';
}

