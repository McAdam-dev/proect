var input = document.querySelector('input');
var btn = document.querySelector('#btn');
var myList = document.querySelector('#Mylist');
var list = ['item 1','item 2','item 3','item 4'];


for(var i = 0 ; i<list.length;i++){
  Createitem(list[i]);
}

btn.onclick = function(){
  if(input.value == ''){
    alert("Item girin");
    return;
  }
  Createitem(input.value);
}

function Createitem(item){
  var li = document.createElement('li');
  var t = document.createTextNode(item);
  li.className = 'item';
  li.appendChild(t);
  myList.appendChild(li);

  var span = document.createElement('span');
  var text = document.createTextNode('x');
  span.appendChild(text);
  span.className = 'del';
  li.appendChild(span);

  span.onclick = function(){
    var li = this.parentElement;
    li.style.display = 'none';
    li.classList.remove('active');
  }

}
myList.addEventListener('click',function(item){
  if(item.target.tagName == 'LI'){
    item.target.classList.toggle('active');
  }
  ToggleDelet();
});
function ToggleDelet(){
  var activeNum = document.querySelectorAll('.active');
  if(activeNum.length > 0){
    btnDel.style.display = "block";
  }
  else{
    btnDel.style.display = 'none';
  }
}
btnDel.onclick = function(){
  var DelAll = document.querySelectorAll('.active');
  DelAll.forEach(function(Del){
    Del.style.display = 'none';
  });
}
