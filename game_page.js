function send(){
number1 = document.getElementById("1").value;
number2 = document.getElementById("2").value;
actual_answer = parseInt(number1) * parseInt(number2)

question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
input_box = "<br>Resposta : <input type='text' id='input_check_box'>";
check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Checar</button>";
row = question_number + input_box + check_button ;

document.getElementById("output").innerHTML = row;
document.getElementById("1").value = "";
document.getElementById("2").value = "";
 }

question_turn="player1";
answer_turn="player2";

function check(){

    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {

        if(answer_turn == "player1"){
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
        else {
        player2score = player2score + 1;
        document.getElementById("player2score").innerHTML = player2score; 
        }
    }

    if (question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - "  + player2name;
        answer_turn = "player1"
        document.getElementById("playerAnswer").innerHTML = "Turno de resposta - "  + player1name;
    }
    else{
        question_turn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Turno de pergunta - "  + player1name; 
        answer_turn = "player2"
        document.getElementById("playerAnswer").innerHTML = "Turno de resposta - "  + player2name;
    }
}