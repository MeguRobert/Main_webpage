let clipContainer = document.getElementsByClassName('clipContainer')[0];
let clips = document.getElementsByClassName('clips');
let clip1 = clips[0];
let clip2 = clips[1];
let clip3 = clips[2];
let enableToListen = true;
let mybutton = '<button onclick="Restore(event)">X</button>';
let button = document.createElement('div');
button.innerHTML = mybutton;

function HideOthers()
{
  console.log('HIDEOTHERS HAS BEEN CALLED');
  for (let i = 0; i < clips.length; i++) {
    let clip = clips[i];
    let classname = 'clip' + (i+1);
    clip.classList.replace(classname, 'hide');
  }
}

function FullScreen(clip,name)
{
  console.log('FullSCREEN HAS BEEN CALLED');
  clip.classList.replace(name, 'fullScreen');
  clip.appendChild(button);
  console.log(clip);
}

function Restore(e)
{
  console.log(e);
  e.stopPropagation();
  for (let i = 0; i < clips.length; i++) {
    let clip = clips[i];
    let classname = 'clip' + (i+1);
    clip.classList.replace('hide', classname);
    clip.classList.replace('fullScreen', classname);
    console.log(clip);
  }
}


  clip1.addEventListener('click', () => FullScreen(clip1,'clip1'), false);
  clip2.addEventListener('click', () => FullScreen(clip2,'clip2'), false);
  clip3.addEventListener('click', () => FullScreen(clip3,'clip3'), false);
  clipContainer.addEventListener('click', () => HideOthers(), false);
