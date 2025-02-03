//side bar

const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// remove active class from all menu items

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        }
        else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
    
});

// ***********  Messages **************

// search chat
const SearchMessage = () => {
    const val = messageSearch.Value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelectorAll('h5').textcontent.toLowerCase();
        if(name.indexOf(val) != -1) { 
            user.style.display = 'flex';
        }
        else {
            user.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', SearchMessage);

// Highlight messages card when messages menu item clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);


})
