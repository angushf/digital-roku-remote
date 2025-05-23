const rokuIP = ""; // ← replace with your Roku's actual IP 

function sendCommand(key, event) {
  fetch(`http://${rokuIP}:8060/keypress/${key}`, { method: "POST" });
  if (event) event.target.blur();
}

function launchApp(appId, event) {
  fetch(`http://${rokuIP}:8060/launch/${appId}`, { method: "POST" });
  if (event) event.target.blur();
}

function submitText() {
  const input = document.getElementById('textInput').value;
  input.split('').forEach((char, index) => {
    setTimeout(() => sendCharacter(char), index * 150); // 150ms delay
  });
}

function sendCharacter(char) {
  const encodedChar = encodeURIComponent(char);
  fetch(`http://${rokuIP}:8060/keypress/Lit_${encodedChar}`, { method: "POST" });
}