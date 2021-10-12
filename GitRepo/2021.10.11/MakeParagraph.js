function doParagraph (text, bgColor = 'gray', fontColor = 'white') {
    let pr = document.createElement('p'),
        text = document.createTextNode(content);
    pr.appendChild(text);
    pr.style.backgroundColor = bgColor;
    pr.style.color = fontColor;
    document.body.appendChild(pr);
}
doParagraph('yellow', 'green',
    'Nunc varius nec quam sed luctus. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
doParagraph('yellow', 'green',
    'Nunc varius nec quam sed luctus. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
doParagraph('yellow', 'green',
    'Nunc varius nec quam sed luctus. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
doParagraph('yellow', 'green',
    'Nunc varius nec quam sed luctus. ' +
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');


console.assert(document.body.children.length == 2);
console.assert(document.createElement('p').length=1);