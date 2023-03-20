// Copyright (c) 2022 Olantu All rights reserved
//
// Created by: Olantu
// Created on: Mar 2022
// This file contains the JS functions for index.html

function doMathClicked () {
  // this function does basic math
  document.getElementById('add-math').innerHTML = '7 + 5 = ' + (7 + 5)
  document.getElementById('subtract-math').innerHTML = '7 - 2 =  ' + (7 - 2)
  document.getElementById('multiply-math').innerHTML = '3 + 3 * 2 = ' + (3 + 3 * 2)
  document.getElementById('divide-math').innerHTML = '(8 / 2) + 4 = ' + ((8 / 2) + 4)
  document.getElementById('exponent-math').innerHTML = '6 + 2 ** 3 = ' + (6 + 2 ** 3)
	document.getElementById('square-root-math').innerHTML = '√(49) = ' + Math.sqrt(49)
}

