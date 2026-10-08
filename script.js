// my simple chatbot logic
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, type){
    let div = document.createElement("div");
    div.classList.add("msg", type);
    div.innerHTML = `<p>${text}</p>`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userText){
    // typing effect
    let typingDiv = document.createElement("div");
    typingDiv.classList.add("msg", "bot");
    typingDiv.innerHTML = "<p>typing...</p>";
    chatBox.appendChild(typingDiv);

    setTimeout(() => {
        typingDiv.remove();
        let reply = "";

        // simple human-made logic, not api
        let lower = userText.toLowerCase();
        if(lower.includes("hello") || lower.includes("hi")){
            reply = "Hello! How can I help you today?";
        } else if(lower.includes("movie")){
            reply = "I love movies! Tell me which movie you want to know about?";
        } else if(lower.includes("your name")){
            reply = "I'm MovieFlix Bot, made by a student as a portfolio project.";
        } else if(lower.includes("who made you")){
            reply = "I was made by my owner for learning HTML CSS JS.";
        } else {
            reply = "That's interesting! I am still learning. Can you ask about movies?";
        }
        addMessage(reply, "bot");
    }, 800);
}

function sendMessage(){
    let text = userInput.value.trim();
    if(text === "") return;
    addMessage(text, "user");
    userInput.value = "";
    botReply(text);
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        sendMessage();
    }
});