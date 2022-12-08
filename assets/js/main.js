document.getElementById('tan').onclick = paintTan
document.getElementById('brown').onclick = paintBrown
document.getElementById('blue').onclick = paintBlue
document.getElementById('black').onclick = paintBlack
document.getElementById('peach').onclick = paintPeach
document.getElementById('lavendar').onclick = paintLavendar

function paintTan() {
  document.querySelector('img').style.backgroundColor = 'rgba(219, 192, 171)'
  document.querySelector('body').style.color = 'white'
}

function paintBrown() {
  document.querySelector('img').style.backgroundColor = 'rgba(110, 80, 71)'
  document.querySelector('body').style.color = 'white'
}

function paintBlue(){
  document.querySelector('img').style.backgroundColor = 'rgba(190, 232, 231)'
  document.querySelector('body').style.color = 'white'
}

function paintBlack() {
  document.querySelector('img').style.backgroundColor = 'rgba(83, 83, 84)'
  document.querySelector('body').style.color = 'white'
}

function paintPeach() {
  document.querySelector('img').style.backgroundColor = 'rgba(247, 192, 173)'
  document.querySelector('body').style.color = 'white'
}

function paintLavendar(){
  document.querySelector('img').style.backgroundColor = 'rgba(242, 227, 255)'
  document.querySelector('body').style.color = 'white'
}
