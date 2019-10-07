// --Description
// Franco and Gus play rock paper scissors
// To be cool Franco decides to play the same choice (rock, paper, or scissor) for every game
// Determine the max number of points Franco can obtain per game
// It's 2 points for a win, 1 point for a draw, and 0 points for a loss

// --Examples
// solution("RSPRS") --> 6
// solution("PPPPRRSSSSS") --> 13
// solution("PRPRRPP") --> 10
// solution("SRR") --> 4

const solution = G => {


  let scores = []
  let francoRock = 0
  let francoPaper = 0
  let francoScissors = 0

  // Franco is Rock
  for (let i = 0; i < G.length; i++) {
    if (G[i] === 'R') {
      francoRock += 1
    } else if (G[i] === "S") {
      francoRock += 2
    } else if (G[i] === "P") {
      francoRock += 0
    }
  }
  scores.push(francoRock)

  // Franco is Paper
  for (let i = 0; i < G.length; i++) {
    if (G[i] === 'R') {
      francoPaper += 2
    } else if (G[i] === "S") {
      francoPaper += 0
    } else if (G[i] === "P") {
      francoPaper += 1
    }
  }
  scores.push(francoPaper)


  // Franco is Scissors
  for (let i = 0; i < G.length; i++) {
    if (G[i] === 'R') {
      francoScissors += 0
    } else if (G[i] === "S") {
      francoScissors += 1
    } else if (G[i] === "P") {
      francoScissors += 2
    }
  }
  scores.push(francoScissors)


  return Math.max(...scores)
}

console.log(solution("RSPRS"))
console.log(solution("PPPPRRSSSSS"))
console.log(solution("PRPRRPP"))
console.log(solution("SRR"))
