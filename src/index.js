//import './style.css';
import { Knight } from './knight-travails';

const knight1 = new Knight();

console.log(knight1.isWithinBoard(-7, -5)); // Expected output: false
console.log(knight1.isWithinBoard(7, -5)); // Expected output: false
console.log(knight1.isWithinBoard(7, 5)); // Expected output: true
console.log(knight1.isWithinBoard(4, 1)); // Expected output: true
