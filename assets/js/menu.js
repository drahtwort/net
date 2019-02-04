const sections = {"CORPUS":"./corpus/","DESCRIPTIO":"./descript/"}

function showStart(){
  let root = document.getElementById('b');
  let pre = createNode('pre','root');
  let span = createNode('span');
  let a = createNode('a');
  a.innerHTML = 'DRAHTWORT\n';
  a.onclick = function(){showSections();};
  span.appendChild(a);
  pre.appendChild(span);
  root.appendChild(pre);
}

function showSections() {
  let root = document.getElementById('root')
  document.getElementsByTagName('a')[0].onclick   = null;
  Object.keys(sections).forEach(function(branch, index) {
    let span = createNode('span',branch);
    let a = createNode('a');
    if(index == Object.keys(sections).length - 1) {
      span.innerHTML = '└── ';
      a.innerHTML = branch + '\n';
      a.href = sections[branch];
    } else {
      span.innerHTML = '├── ';
      a.innerHTML = branch + '\n';
      a.href = sections[branch];
    }
    span.appendChild(a);
    root.appendChild(span)
  });
}
