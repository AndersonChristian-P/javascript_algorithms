const selector1 = document.querySelector('.class1');
// looks for the elements with the class name of 'class1'

const selector2 = document.getElementByClassName('class2');
// looks for the elements with the class name of 'class2'

const selector2 = document.querySelector.get('#id1');
// looks for the elements with the id of 'id1'

const selector3 = document.getElementById('id2');
// looks for the elements with the id of 'id2'

const selector4 = document.getElementsByTagName('p');
// looks for the elements with a tag name of 'p'

//  ---------

// chaining selectors

const div1ParaElements = () => {
  let div1 = document.getElementById('div1');
  let div1Paras = div1.getElementsByTagName('p');
  var num = div1Paras.length;
  alert(`There are ${num} paragraph(s) in #div1`);
}



