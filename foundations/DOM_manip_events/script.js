const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';
container.appendChild(content);

const red = document.createElement('p');
red.textContent = "Hey I'm red!";
red.style.color = "red";
container.appendChild(red);

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";
blue.style.color = "blue";
container.appendChild(blue);

const pink = document.createElement('div');
pink.style.borderColor = "black";
pink.style.borderStyle = "solid";
pink.style.backgroundColor = "pink";
container.appendChild(pink);

const header1 = document.createElement('h1');
header1.textContent = "I'm in a div";
pink.appendChild(header1);

const too = document.createElement('p');
too.textContent = "ME TOO!";
pink.appendChild(too);
