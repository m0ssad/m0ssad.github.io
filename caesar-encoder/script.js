function encodeText()
{
    let integer = document.getElementById("integer").valueAsNumber;
    let text = document.getElementById("textToEncode").value;
    let encoded = "";
    let textArea = document.getElementById("textToEncode");

    if(integer.length <= 0 || isNaN(integer))
    {
        textArea.value = "Invalid integer value.";
        return setTimeout(function(){textArea.value = ""}, 1500)
    }

    if(text.length <= 0)
    {
        textArea.value = "Please enter text here.";
        return setTimeout(function(){textArea.value = ""}, 1500)
    }

    if(integer < 0)
    {
      integer += 26
    }

    for (var i = 0; i < text.length; i++) {
        var character = text[i];
        if (character.match(/[a-z]/i)) {
          var code = text.charCodeAt(i);
          if (code >= 65 && code <= 90) {
            character = String.fromCharCode(((code - 65 + integer) % 26) + 65);
          }
          else if (code >= 97 && code <= 122) {
            character = String.fromCharCode(((code - 97 + integer) % 26) + 97);
          }
        }
        encoded += character;
      }
    textArea.value = encoded
}