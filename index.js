function countVowelsAndConsonants() {
    var word = document.getElementById("word");
    var text = word.value;
    let vowelCount = 0;
    let consonantCount = 0;
    var str = text.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if(/[a-z]/.test(str[i])) {
            if (/[aeiou]/.test(str[i])) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

   document.getElementById("anw").textContent="Vowels= " + vowelCount+ " ,Constant =  " + consonantCount;
}


function palindrome(){
    var inputString = document.getElementById("NumString");
    var text = inputString.value;
   
    var AnswerDiv = document.getElementById("result");
    var reversed = '';
    for (var i = text.length - 1 ; i >= 0; i--){
        reversed += text[i];
    }
    if (text === reversed) {
        AnswerDiv.textContent = "is a palindrome";
    } else {
        AnswerDiv.textContent = "isn't a palindrome";
    }
}


function totalAmount(){
    var bill = parseFloat(document.getElementById("subtotal").value);
    var tip = parseFloat(document.getElementById("tip").value);
    var totalAmount = bill + tip;
    document.getElementById("total").textContent = "Total:$" + totalAmount;
  
}

