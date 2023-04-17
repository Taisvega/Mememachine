function randomRGB(){
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);
    return `rgb(${r},${g},${b})`
  }
  
  const h1 = document.querySelector('h1');
  
  setInterval(function() {
    h1.style.color = randomRGB();
  }, 500);
  
  const form = document.getElementById('meme-form');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const topTextInput = document.querySelector('#top-text-input');
    const bottomTextInput = document.querySelector('#bottom-text-input');
    const imgUrl = document.getElementById('image-input').value;

    if(topTextInput.value === ''|| bottomTextInput.value === ''|| imgUrl === ''){
        alert('Please fill out all input fields!!!!');
        return;
    }

    const topText = document.createElement('div');
    topText.classList.add('top-text');
    topText.innerText = topTextInput.value;

    const bottomText = document.createElement('div')
    bottomText.classList.add('bottom-text');
    bottomText.innerText = bottomTextInput.value;

    const image = document.createElement('img');
    image.setAttribute('src',imgUrl);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.innerText = 'X';
    removeButton.addEventListener('click',() => memeDiv.remove());

    const memeDiv = document.createElement('div');
    memeDiv.appendChild(topText);
    memeDiv.appendChild(bottomText);
    memeDiv.appendChild(image);
    memeDiv.appendChild(removeButton);

    const memeContainer = document.getElementById('meme-container');
    memeContainer.appendChild(memeDiv);

    topTextInput.value = '';
    bottomTextInput.value = '';
    document.getElementById('image-input').value = '';
});
