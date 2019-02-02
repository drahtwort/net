const limit = 59;
const fill = '*'
const header_right = ' ***********\n'
const full = fill.repeat(59) + '\n'
const footer_left = '********* '
const middle = '*********'
const empty = '\n'


const name = 'DRAHTWORT'

const data = './assets/data/collection.json';
const refs = './assets/data/references.json';

var collection = null;
var references = null;

var prefix = '';

function showDrahtwort(){
    let root = document.getElementById('b');
    let pre = createNode('pre','content');
    root.appendChild(pre);
    initRemoteContentJSON(data, initContent);
}

function createHome(){
    let pre = createNode('pre','content');
    pre.innerHTML += full;
}

function initContent(raw_data){
    content = JSON.parse(raw_data);
    initRemoteContentJSON(refs, initReferences);
}

function initReferences(raw_data) {
    references = JSON.parse(raw_data);
    fillContent();
}

function fillContent(){
    processContent('haw04.hou51.eng', [1,2])
    processContent('kni21.tel57.ger', [1,2,3])
    processContent('rob48.vin92.ger99',[1])
    processContent('gol80.mag13.ger',[1])
}

function processContent(idx, range){
    // get pre element
    let pre = document.getElementById('content');
    // prepare identifiers
    let ref = references[idx].split(",")
    let parts = idx.split(".");
    // fill pre element
    pre.innerHTML += full;
    pre.innerHTML +=  fillLineRight(footer_left + ref[0] , limit);
    pre.innerHTML +=  fillLineRight(footer_left + ref[1].substring(1) , limit);
    pre.innerHTML += full;
    for (var i = range[0]; i <= range[range.length-1]; i++) {
        pre.innerHTML += content[parts[0]][parts[1]][parts[2]][i][0] + '\n\n';
    }
    pre.innerHTML = pre.innerHTML.slice(0,-1)
    /*
    pre.innerHTML += full;
    pre.innerHTML += full;
    */
    pre.innerHTML += empty;
}
