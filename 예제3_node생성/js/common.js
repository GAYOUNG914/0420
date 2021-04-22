'use strict'

init();

function init(){
  let btn = document.createElement('div');
  btn.id = 'btn';
  btn.removeAttribute('id');
  btn.classList.add('btn');
  btn.classList.remove('btn');
  let text = document.createTextNode('안녕하세요. 전 노드텍스트입니다.')
  btn.appendChild(text);
  document.body.appendChild(btn);

  let box = document.createElement('div');
  box.classList.add('box_items');
  let boxText = document.createTextNode('this is box items');
  box.appendChild(boxText);
  document.body.appendChild(box);

  let parent = document.createElement('div');
  let p = document.createElement('p');
  parent.prepend('this is div');
  p.prepend('this is p');
  document.body.appendChild(parent);
  document.body.appendChild(p);
  // document.body.append(parent);
  // document.body.prepend(p);

}
