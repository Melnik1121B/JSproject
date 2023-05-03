// размер карты
const gridSize = 10;

// создаем двумерный массив, представляющий сетку карты
const grid = new Array(gridSize).fill(null).map(() => new Array(gridSize).fill(0));

function chebyshev (f, y)
{
    return Math.max(Math.abs(y.x - f.x), Math.abs(y.y - f.y));
}

// задаем начальную и конечную точки
const start = { x: 0, y: 0 };
const end = { x: gridSize - 1, y: gridSize - 1 };

// задаем непроходимые клетки
const obstacles = [
{ x: 2, y: 1 },
{ x: 2, y: 2 },
{ x: 2, y: 3 },
{ x: 3, y: 3 },
{ x: 4, y: 3 },
{ x: 4, y: 4 },
{ x: 4, y: 5 },
{ x: 5, y: 5 },
{ x: 6, y: 5 },
{ x: 6, y: 4 },
{ x: 6, y: 3 },
];

// отображаем карту
for (let y = 0; y < gridSize; y++) {
let row = '';
for (let x = 0; x < gridSize; x++) {
// проверяем, является ли клетка непроходимой
const isObstacle = obstacles.some((o) => o.x === x && o.y === y);
// проверяем, является ли клетка начальной точкой
const isStart = x === start.x && y === start.y;
// проверяем, является ли клетка конечной точкой
const isEnd = x === end.x && y === end.y;
if (isStart) {
row += 'S'; // начальная точка
} else if (isEnd) {
row += 'E'; // конечная точка
} else if (isObstacle) {
row += 'X'; // непроходимая клетка
} else {
row += '.'; // проходимая клетка
}
}
console.log(row);
}

// реализация алгоритма A*
function aStar(start, end, obstacles, gridSize) {
const frontier = new PriorityQueue();
frontier.enqueue(start, 0);
const cameFrom = {};
const costSoFar = {};
cameFrom[start] = null;

}