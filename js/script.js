let num, score;

let arr=[
  {question:' ', answer:'c', currectAnswer:'a'},
  {question:' ', answer:'b', currectAnswer:'b'},
  {question:' ', answer:'b', currectAnswer:'c'},
  {question:' ', answer:'a', currectAnswer:'d'}
];

arr.forEach((item) => {
  if (item.currectAnswer === 'c') {
    console.log(item);
  }
});

function rezult(arr){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] ['currectAnswer'] === arr[i] ['answer']) {
      console.log('Верно');
    }
    else
      console.log('Неверно');

  }
}

rezult(arr)
