# knights-travails

The task is to build a function that shows the shortest possible way to get from one square to another by
outputting all squares the knight will stop on along the way while displaying the number of moves taken from
the starting point to destination.

Live Demo: https://worriorbeast.github.io/knights-travails/

## Objective

1. For every square there is a number of possible moves, choose a data structure that will allow you to work with
   them. Do not allow any moves to go off the board
2. Decide which search algorithm is best to use for this case
3. Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending
   square. Output what that full path looks like

## What I learned

Before starting the project, the beginning of the page explains that in order to solve the problem, I have to think
the chessboard as a graph. Whether that would be explicit or implicit. After reading Khan Academy's representing
graphs section, I noticed if I created an adjacency list, I would be creating an adjacency matrix. Therefore the
only options I have to represent the chessboard as a graph are edge lists and adjacency matrices. For this problem
an adjacency matrix seems to be the best choice. Right as I was about to start writing the search algorithm I
realized I do not need to create an adjacency matrix because the size of the chessboard is static. Instead the
chessboard would be implicit. I had to create an array containing all possible moves of the knight. For each move
the list of possible moves is applied and verifies the next move is within the chessboard. If the move is legal,
the move is then inserted into a queue. This effectively means the algorithm is breadth-first search.
