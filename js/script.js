let num, score;

let arr=[
  {question:' ', answer:' ', currectAnswer:'a'},
  {question:' ', answer:' ', currectAnswer:'b'},
  {question:' ', answer:' ', currectAnswer:'c'},
  {question:' ', answer:' ', currectAnswer:'d'}
];

arr.forEach((item) => {
  if (item.currectAnswer === 'c') {
    console.log(item);
  }
});
