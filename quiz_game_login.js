function addUser()
{
    palyer1_name = document.getElementById("player1_name_input").value;
    palyer2_name = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", palyer1_name);
    localStorage.setItem("player2_name", palyer2_name);

    window.location="quiz_game_page.html";

}