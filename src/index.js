//import './style.css';
import { Knight } from './knight-travails';

const knight1 = new Knight();

console.log(knight1.shortestPath([-2, 0], [0, 0]));
/*
Expected output: -1;
*/

console.log(knight1.shortestPath([0, 0], [3, 3]));
/* 
Expected output: You made it in 2 moves! Here's your path: [0,0],[1,2],[3,3]
*/

console.log(knight1.shortestPath([3, 3], [0, 0]));
/*
Expected output: You made it in 2 moves! Here's your path: [3,3],[2,1],[0,0]
*/

console.log(knight1.shortestPath([0, 0], [7, 7]));

/*
Expected output: You made it in 6 moves! Here's your path: [0,0],[1,2],[2,4],[3,6],[5,7],[6,5],[7,7]
*/
