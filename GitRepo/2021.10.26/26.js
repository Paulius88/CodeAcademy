let main = document.createElement('main');
document.body.prepend(main);

//-------------------------------------------//

let header = document.createElement('header');
document.body.prepend(header);

let nav = document.createElement('nav');
    header.appendChild(nav);

let burger = document.createElement('div');
    burger.classList.add('burger');
    burger.innerText = '㊂';
    nav.appendChild(burger);

burger.addEventListener('click', () => {
    if (navList.style.display === 'none') {
        navList.style.display = 'block';
    } else {
        navList.style.display = 'none';
    }
})

let navList = document.createElement('ul');
    navList.classList.add('nav-list');
    nav.appendChild(navList);


//------------------------------------------------//

for (i = 1; i <= 5; i ++) {
    let element = document.createElement('li');
    navList.appendChild(element);
}

let navItem1 = document.querySelector('li');
    navItem1.innerText = 'Home';

let navItem2 = document.querySelector('li:nth-of-type(2)');
    navItem2.innerText = 'Gear';

let navItem3 = document.querySelector('li:nth-of-type(3)');
    navItem3.innerText = 'Gallery';

let navItem4 = document.querySelector('li:nth-of-type(4)');
    navItem4.innerText = 'History';

let navItem5 = document.querySelector('li:last-of-type');
    navItem5.innerText = 'Contact';

//-------------------------------------------------------------//

for (i = 1; i <= 3; i ++) {
    let element = document.createElement('section');
    main.appendChild(element);
}

let section_1 = document.querySelector('section');
    section_1.classList.add('slider');

let sliderImages = [
    'https://wallpaperaccess.com/full/38582.jpg',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    'https://vistapointe.net/images/climbing-10.jpg'
]

let image1 = document.createElement('img'),
    image2 = document.createElement('img'),
    image3 = document.createElement('img');

    image2.style.display = 'none';
    image3.style.display = 'none';

    image1.src = sliderImages[0];
    image2.src = sliderImages[1];
    image3.src = sliderImages[2];

    section_1.appendChild(image1);
    section_1.appendChild(image2);
    section_1.appendChild(image3);

setInterval(() => {
        if (image1.style.display === 'block') {
            image1.style.display = 'none';
            image2.style.display = 'block';
            image3.style.display = 'none';
        }
        else if (image2.style.display === 'block') {
            image1.style.display = 'none';
            image2.style.display = 'none';
            image3.style.display = 'block';
        } else {
        image1.style.display = 'block';
        image2.style.display = 'none';
        image3.style.display = 'none';
    }
}, 2000)

function clock () {
    let fullDate = new Date();
    let hours = (fullDate.getHours() < 10 ? '0' : '') + fullDate.getHours(),
        minutes = (fullDate.getMinutes() < 10 ? '0' : '') + fullDate.getMinutes(),
        seconds = (fullDate.getSeconds() < 10 ? '0' : '') + fullDate.getSeconds();
    let time = `${hours} : ${minutes} : ${seconds}`;

    section_2.innerText = time;
}

let section_2 = document.querySelector('section:nth-child(2)');
    section_2.classList.add('clock');

setInterval(clock, 1000);

//-------------------------------------------------------------//

let section_3 = document.querySelector('section:last-child')
    section_3.classList.add('contacts');

let form = document.createElement('form');

let labelName = document.createElement('label');
    form.append(labelName);
    labelName.innerText = 'Your Name:'

let inputName = document.createElement('input');
    inputName.setAttribute('id', 'inputName');
    form.append(inputName);

let labelEmail = document.createElement('label');
    form.append(labelEmail);
    labelEmail.innerText = 'Your Email:';

let inputEmail = document.createElement('input');
    inputEmail.setAttribute('id', 'inputEmail');
    form.append(inputEmail);

let labelAddress = document.createElement('label');
    form.append(labelAddress);
    labelAddress.innerText = 'Type in your address:';

let inputAddress = document.createElement('textarea');
    inputAddress.setAttribute('id', 'inputAddress');
    form.append(inputAddress);

let submit = document.createElement('button');
    form.append(submit);
    submit.innerText = 'Send';

    section_3.appendChild(form);

    submit.addEventListener('click', (event) => {

    let username = document.querySelector('#inputName').value,
        email = document.querySelector('#inputEmail').value,
        address = document.querySelector('#inputAddress').value;

    if (username == null || username == '') {
        alert('Your name');
    } else if (email == null || email == '') {
        alert('Your email ');
    } else if (address == null || address == '') {
        alert('Your address');
    } else {
        submit.innerHTML = 'Submited';
    }
    event.preventDefault();
})
