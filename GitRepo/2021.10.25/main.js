let main = document.querySelector('#main');

let heading = document.createElement('h2');
        heading.innerText = 'Chilies';
        
let ulElement = document.createElement('ul');

let paragraph = document.createElement('p');
        paragraph.innerText = 'EAT A PEPPER IF YOU HAVE A STUFFY NOSE.';

     
main.appendChild(heading);
main.appendChild(paragraph);

for (let i = 1; i <= 5; i++) {
    let liElement = document.createElement('li');
    let image = document.createElement('img');
        image.src = `chill.jpg`;

        liElement.appendChild(image);
        ulElement.appendChild(liElement);
}

main.appendChild(ulElement);

let p2 = document.createElement('p');
p2.innerText = 'ONLY MAMMALS ARE SENSITIVE TO IT. ';

main.appendChild(p2);