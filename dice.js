let dice = document.getElementById('dice-btn')

function dicegame(){
    // dice 1
    let player1 = Math.floor(Math.random() * 6) + 1;
    let img1 = document.getElementById("player1")
    img1.setAttribute("src" , player1 + ".svg")

     // dice 2
     let player2 = Math.floor(Math.random() * 6) + 1;
     let img2 = document.getElementById("player2")
     img2.setAttribute("src" , player2 + ".svg")

    //  Determine the winner
    if (player1 > player2) {
       document.getElementById("result").innerHTML = 'Player 1 wins!';
    } else if (player2 > player1) {
        document.getElementById("result").innerHTML = 'Player 2 wins!';
    } else {
        document.getElementById("result").innerHTML = 'It\'s a tie!';
    }
}