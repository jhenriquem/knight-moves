function knightMoves(start, end) {
  const moves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  function isValidMove(x, y) {
    return x >= 1 && x <= 8 && y >= 1 && y <= 8;
  }

  const queue = [[start, [start]]];
  const visited = new Set([start.toString()]);

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const [x, y] = current;

    if (x === end[0] && y === end[1]) {
      console.log(`Menor caminho de um cavalo de ${start} para ${end}:`);
      console.log(`${display(path)}`);
    }

    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;
      const newPosition = [newX, newY];
      if (isValidMove(newX, newY) && !visited.has(newPosition.toString())) {
        queue.push([newPosition, [...path, newPosition]]);
        visited.add(newPosition.toString());
      }
    }
  }
}

function display(positions) {
  function Board() {
    let tabuleiro = ``;
    tabuleiro += "\n   --------------------------------- \n";
    let linha = 8;
    while (linha >= 1) {
      tabuleiro += `${linha}  `;
      let coluna = 1;
      while (true) {
        for (const position of positions) {
          const [x, y] = position;
          if (x === coluna && linha === y) {
            tabuleiro += "| 󰡘 ";
            coluna++;
          }
        }

        coluna++;
        if (coluna <= 8) {
          tabuleiro += "|   ";
        } else {
          break;
        }
      }
      tabuleiro += "|\n   --------------------------------- \n";
      linha--;
    }

    tabuleiro += "     1   2   3   4   5   6   7   8  ";
    return tabuleiro;
  }

  function showPositions() {
    let string = "";
    for (let i = 1; i < positions.length; i++) {
      string += `${i}° movimento : ${positions[i]} \n`;
    }
    return string;
  }

  return [showPositions(), Board()];
}

knightMoves([1, 1], [8, 8]);
