//console.log('New challenge test!');

let shareButton = document.getElementById("btn-share");
let docBody = document.querySelector('body');
let menuLinks = document.querySelector('.share-menu-links');
let shareMenu = document.querySelector('.share-menu');

docBody.onresize = hideAnyShare;

shareButton.onclick = () => {
  //check if desktop
  if (getComputedStyle(menuLinks).position === 'absolute') {
    toggleDesktopShare();
  } else {
    toggleMobileShare();
  }
}

function toggleMobileShare() {
  //console.log('iam mobile')
  if (shareButton.parentNode.classList.contains('article-footer'))
      document.querySelector('.share-menu-wrap').appendChild(shareButton);
    else if (shareButton.parentNode.classList.contains('share-menu-wrap'))
      document.querySelector('.article-footer').appendChild(shareButton);
  shareMenu.classList.toggle('nonvisible');
}

function toggleDesktopShare() {
  //console.log('iam desktop')
  menuLinks.classList.toggle('visible');
}

function hideAnyShare() {
  //console.log('iam resize')
  document.querySelector('.article-footer').appendChild(shareButton);
  if (shareMenu.classList.contains('nonvisible')) {
    menuLinks.classList.remove('visible')
  } else {
    shareMenu.classList.add('nonvisible')
  }
}
