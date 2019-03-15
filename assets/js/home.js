/*
    CREATE HOME PAGE
*/

function showStart(){
  let root = document.getElementById('b');
  let pre = createNode('pre','root');
  let span = createNode('span');
  let a = createNode('a');
  a.innerHTML = 'DRAHTWORT';
  a.onclick = function(){showSections(a);};
  span.appendChild(a);
  pre.appendChild(span);
  span = createNode('span');
  span.innerHTML += '\n';
  span.innerHTML += '\n';
  pre.appendChild(span);
  root.appendChild(pre);
}

/*
    SHOW SECTIONS (ON CLICK)
*/

function showSections(elem) {
    elem.onclick = function(){window.location="./index.html"};

    let root = document.getElementById('root');
    // root.innerHTML = '';
    let span = createNode('span');
    let a = createNode('a');

    // section DESCRIPT
    span = createNode('span');
    span.innerHTML = '--  ';
    a = createNode('a');
    a.innerHTML = 'DESCRIPT';
    a.href = './dsc/';
    span.appendChild(a);
    span.innerHTML += '\n';
    root.appendChild(span);

    // section EDITIONS
    span = createNode('span');
    span.innerHTML = '--  ';
    a = createNode('a');
    a.innerHTML = 'EDITIONS';
    a.href = 'https://drahtwort.github.io/eds/';
    span.appendChild(a);
    span.innerHTML += '\n';
    root.appendChild(span);

    // section QUOTES
    span = createNode('span');
    span.innerHTML = '--  ';
    a = createNode('a');
    a.innerHTML = 'QUOTES';
    a.href = 'https://drahtwort.github.io/qts/';
    span.appendChild(a);
    span.innerHTML += '\n';
    root.appendChild(span);

    // section TREE (VIEW)
    span = createNode('span');
    span.innerHTML = '--  ';
    a = createNode('a');
    a.innerHTML = 'TREE';
    a.href = './tree/';
    span.appendChild(a);
    span.innerHTML += '(VIEW)\n';
    root.appendChild(span);

}
