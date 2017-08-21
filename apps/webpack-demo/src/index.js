import _ from 'lodash';
import './style.css';
import Icon from './img/icon.png';
import Icon2 from './img/icon2.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  var myIcon = new Image();
  myIcon.src=Icon;
  element.appendChild(myIcon);
  var myIcon2 = new Image();
  myIcon2.src=Icon2;
  element.appendChild(myIcon2);

  console.log(Data);

  
  return element;
}

document.body.appendChild(component());