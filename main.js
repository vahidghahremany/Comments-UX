const replyContent = document.querySelector('textarea');
const sendBtn = document.querySelector('send');

function addReply(){
    const reply = replyContent.value;

    const comments = document.querySelector('.reply-container');

    const newReply = document.createElement('div');
    newReply.classList.add('new-reply');

    const replyText = document.createElement('p');
    replyText.textContent = reply;

    newReply.appendChild(replyText);
    comments.appendChild(newReply);

    replyContent.value = '';
}
