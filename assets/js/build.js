var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}

today = yyyy + '-' + mm + '-' + dd ;

var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

/*
console.log("width " + x)
console.log("height " + y)
*/

function initRemoteContentJSON(url, func) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          func(xhttp.responseText);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.overrideMimeType("application/json");
    xhttp.send();
}

function createNode(tag,id=null,className=null,type=null) {
    let elem = document.createElement(tag);
    if(id!==null){
        elem.setAttribute('id',id);
    }
    if (type !==null){
        elem.setAttribute('type',type);
    }
    if (className!==null) {
        elem.className=className;
    }
    return elem;
}

function fillLineLeft(toFill,limit) {
    toFill = ' ' + toFill
    let now = toFill.length - 1
    let rest = limit - now
    let filled = fill.repeat(rest) + toFill
    return filled
}

function fillLineRight(toFill, limit) {
    toFill = toFill + ' '
    let now = toFill.length
    let rest = limit - now
    let filled =  toFill + fill.repeat(rest) + '\n'
    return filled
}
