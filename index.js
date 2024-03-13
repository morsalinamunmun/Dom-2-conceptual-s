/*function test(params){
    //document.getElementById('info').innerText = 'Bangladesh';
    setText('info', 'bangladesh')
}
function test1(params){
    //document.getElementById('info').innerText = 'India';
}
function test2(params){
    const number = toNumber('input1');
    console.log(number);
}

function setText(id, text){
    document.getElementById(id).innerText = text;
}

function toNumber(id){
    const result = document.getElementById(id).value;
    return parseInt(result)
}*/

function clickButton(data){
    console.log(data.parentNode.childNodes[1].innerText);
}