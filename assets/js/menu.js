const limit = 59;
const fill = '*'
const right = ' ***********\n'
const full = fill.repeat(59) + '\n'
const left = '****** '
const middle = ' ********* '
const empty = '\n'

const name = 'DRAHTWORT'

const data = './data/collection.json';
const refs = './data/references.json';
const desc = './data/description.json';

var collection = null;
var description = null;
var references = null;

var header = null;

function showDrahtwort(){
    let root = document.getElementById('b');
    let pre = createNode('pre','content');
    root.appendChild(pre);
    initRemoteContentJSON(data, initContent);
}

function initContent(raw_data){
    content = JSON.parse(raw_data);
    initRemoteContentJSON(refs, initReferences);
}

function initReferences(raw_data) {
    references = JSON.parse(raw_data);
    initRemoteContentJSON(desc, initDescriptors);
}

function initDescriptors(raw_data) {
    description = JSON.parse(raw_data);
    fillDescContent('TELEGRAPHIE');
    /*
    createHome();
    createDescSection();
    */
}

function createHome(){
    let pre = document.getElementById('content');
    pre.innerHTML += full;
    pre.innerHTML += full;
    pre.innerHTML +=  fillLineLeft(name + right , limit);
    pre.innerHTML +=  fillLineLeft(today + right , limit);
    pre.innerHTML += full;
    pre.innerHTML += full;
    // header = pre.innerHTML;
}

function createDescSection() {
    let pre = document.getElementById('content');
    let short = fill.repeat(9);
    let forward = true;
    let offset = 1;
    Object.keys(description).forEach( function(d, index) {
        let a = createNode('a');
        a.innerHTML = fillLineRight(short.repeat(offset) + ' ' + d, limit)
        pre.appendChild(a);
        pre.innerHTML += full;
        if (offset < 4) {
            offset += 1;
        }
        else {
            offset = 1;
        }
    });
    pre.innerHTML += full;
}

function fillDescContent(descriptor) {
    let editions = Object.keys(description[descriptor]);
    for(var i = 0; i < editions.length; i++) {
        let ed = editions[i];
        processContent(ed, description[descriptor][ed]);
    }
}

function processContent(idx, range){
    let pre = document.getElementById('content');
    let ref = references[idx].split(",")
    let parts = idx.split(".");
    pre.innerHTML += full;
    pre.innerHTML +=  fillLineRight(left + ref[0] , limit);
    pre.innerHTML +=  fillLineRight(left + ref[1].substring(1) , limit);
    pre.innerHTML += full;
    for (var i = range[0]; i <= range[range.length-1]; i++) {
        pre.innerHTML += content[parts[0]][parts[1]][parts[2]][i][0] + '\n\n';
    }
    pre.innerHTML = pre.innerHTML.slice(0,-1)
    pre.innerHTML += empty;
}
