//1.
//unamed export 모듈에서 대상을 하나만 import 할 때는 반드시 이름을 지정해야 한다.

import myFunction from './ex08.01.mjs';
import myObject from './ex08.02.mjs';

console.log(myFunction(10,20));
console.log(myObject.add(10,20));

//3
//named export는 import 대상이 다수 이기 때문에 하나의 특정 이름으로 받을 수 없다.
//대신 * as ~를 사용할 수 있다.
//import m from './ex08.03.mjs';
import * as m from './ex08.03.mjs';
console.log(m.add(10, 20));

//3. import destruction
import {substract} from './ex08.03.mjs';
console.log(substract(10,20));

//4. import destruction
import {add} from './ex08.04.mjs';
console.log(add(10,20));

//5.
import math, {divide} from './ex08.05.mjs'; //math는 default에 있는 값을 받음
console.log(math.substract(20,10), divide(20, 10));