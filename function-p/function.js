function clickButton(target){
  const itemName = target.parentNode.childNodes[1].innerText;
  const li = document.createElement;
  li.innerText = itemName;

  const selectedItem = document.getElementById('selected-item');
  selectedItem.appendChild('li');
}