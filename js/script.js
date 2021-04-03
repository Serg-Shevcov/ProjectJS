let num, score;

let arr=[
  {question:' ', answer:'c', currectAnswer:'a'},
  {question:' ', answer:'b', currectAnswer:'b'},
  {question:' ', answer:'b', currectAnswer:'c'},
  {question:' ', answer:'a', currectAnswer:'d'}
];

let sumcurrectAnswer=0;

function rezult(arr){
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] ['currectAnswer'] === arr[i] ['answer']) {
      console.log('Верно');
      sumcurrectAnswer++;
    }
    else
      console.log('Неверно');
  }
  const question = document.getElementById('question');
  question.innerHTML = ('У Вас ' +sumcurrectAnswer+ ' правильных ответов');
}

rezult(arr)
