function closeToast() {
    document.getElementById("toast").style.opacity = "0";
    setTimeout(function() {
        document.getElementById("toast").style.display = "none";
    }, 300);
}

window.onload = function() {
    var toast = document.getElementById("toast");
    toast.style.opacity = "1";
    toast.style.display = "block";
};


  function toggleNightMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var icon = document.getElementById('icon');
    icon.classList.toggle('sun-icon');
    icon.classList.toggle('moon-icon');

    if (icon.classList.contains('sun-icon')) {
        icon.innerHTML = '&#9728;'; 
    } else {
        icon.innerHTML = '&#9790;'; 
    }
}

function toggleChatPanel() {
    var chatpanel = document.getElementById('chatpanel');
    chatpanel.style.display = chatpanel.style.display === 'none' ? 'block' : 'none';
}


function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value.trim();

    if (message !== '') {

        var chatBody = document.getElementById('chat-body');
        var chatMessage = document.createElement('div');
        chatMessage.classList.add('chat-message');
        chatMessage.innerHTML = '<span class="sender">Felhasználó:</span><span class="message">' + message + '</span>';
        chatBody.appendChild(chatMessage);


        var response = '';
        if (message.toLowerCase() === 'szia') {
            response = 'Szia! Hogyan segíthetek?'; 
        } else {
            response = 'Ez csak egy teszt üzenet';
        }
        displayMessage('ChatBOT', response);

        messageInput.value = '';
    }
}
function displayMessage(sender, message) {
    var chatBody = document.getElementById('chat-body');
    var chatMessage = document.createElement('div');
    chatMessage.classList.add('chat-message');
    chatMessage.innerHTML = '<span class="sender">' + sender + ':</span><span class="message">' + message + '</span>';
    chatBody.appendChild(chatMessage);
}

var todoItems = []; 
var doneItems = []; 

function addTodoItem(event) {
    event.preventDefault(); 

    var todoInput = document.getElementById('todoInput');
    var todoText = todoInput.value.trim();

    if (todoText !== '') {
        var todoItem = {
            text: todoText,
            completed: false
        };
        todoItems.push(todoItem); 
        todoInput.value = ''; 
        renderTodoList(); 
    }
}

function renderTodoList() {
    var todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; 

    todoItems.forEach(function(todoItem, index) {
        var li = document.createElement('li');
        li.className = 'todo-item';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todoItem.completed;
        checkbox.addEventListener('change', function() {
            toggleTodoItem(index); 
        });

        var span = document.createElement('span');
        span.textContent = todoItem.text;

        li.appendChild(checkbox);
        li.appendChild(span);
        todoList.appendChild(li); 
    });
}

function scrollToSection() {
    var targetSection = document.getElementById('targetSection');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

