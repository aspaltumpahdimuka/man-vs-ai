const JANKENPON = ["batu", "gunting", "kertas"]
let playerHP = 10
let AiHP = 10

const getAIChoice = () => {
    const randomIndex = Math.floor(Math.random() * JANKENPON.length)
    return JANKENPON[randomIndex]
}


const getPlayerChoice = (num) => {
    return JANKENPON[num]
}

const isPlayerWon = (playerChoice, aiChoice) => {
    const isTie = aiChoice === playerChoice
    const AIWonCondition = 
        aiChoice === "batu" && playerChoice === "gunting" || 
        aiChoice === "gunting" && playerChoice === "kertas" || 
        aiChoice === "kertas" && playerChoice === "batu"
    const playerWonCondition = 
        playerChoice === "batu" && aiChoice === "gunting" || 
        playerChoice === "gunting" && aiChoice === "kertas" || 
        playerChoice === "kertas" && aiChoice === "batu"

    if (isTie) {
        return "Seri"
    } else if (AIWonCondition) {
        return false
    } else if (playerWonCondition) {
        return true
    }
}

const playGame = () => {
    let aiChoice = getAIChoice()
    let playerChoice = parseInt(prompt("Pilih 0 - 2: "))

    let playerWon = isPlayerWon(playerChoice, aiChoice)

    if (playerWon) {
        AiHP--
        console.log("Kamu Menang")
    } else if (!playerWon) {
        playerHP--
        console.log("Kamu Kalah")
    } else {
        return "Seri"
    }
}

while (playerHP > 0 && AiHP > 0) {
    playGame()
}

if (AiHP === 0) {
    console.log("Game Over! Dunia berhasil diselamatkan!")
}
if (playerHP === 0) {
    console.log("Game Over! Dunia dikuasai AI!")
}