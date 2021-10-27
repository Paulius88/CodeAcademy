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
    'https://www.wallpaperbetter.com/wallpaper/379/200/45/climbing-hd-1080P-wallpaper.jpg'
]

let sliderImages = [
    'https://divaofthemoment.com/wp-content/uploads/2016/01/slider-home-v5-background.jpg',
    'https://i.pinimg.com/originals/0f/34/c5/0f34c5d0796f2c96ec945bfc01365006.jpg',
    'https://i.pinimg.com/564x/9d/c1/63/9dc16311b623164894673456d865abc7.jpg',
]
for (let key in sliderImages) {
   let image = document.createElement('img');
    image.style.display = 'none';
    image.src = sliderImages[key];
    image.id = 'img-' + key;
    section_1.appendChild(image);
}
let imgElements = section_1.querySelectorAll('img');
let imgIndex = 0;
function slide() {
    for (let img of imgElements) {
        img.style.display = 'none';
    }
    let currentIndex = imgIndex++ % imgElements.length;
    imgElements[currentIndex].style.display = 'block';
    console.log(imgElements[currentIndex]);
}
setInterval(slide, 2000);

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
