

let KillaDino = document.querySelectorAll("#Stike li");

//Runs a loop through the Class and this effect all childern with the "strike-through"
for (let i = 0; i< KillaDino.length; i++) {
let KillaDino1 = KillaDino[i];
  KillaDino1.addEventListener('click',function(){
    
    if(KillaDino1.style.textDecoration = 'none'){
        KillaDino1.style.textDecoration = 'line-through';
    }
});

};

let FadeADino = document.querySelectorAll('.Strike1 li');


for (let i = 0; i < FadeADino.length; i++) {
    let FadeADino1 = FadeADino[i];
   
    
  FadeADino1.addEventListener('click',function(){
if(FadeADino1.style.opacity >=0 ){
  FadeADino1.style.opacity -=0.1;
}
    });
}

let BurnADino = document.querySelectorAll('#row img');

for (let i = 0; i < BurnADino.length; i++) {
  let BurnADinoI = BurnADino[i];
 
 
 BurnADinoI.addEventListener('click', function(){


  
    BurnADinoI.style.width = '0px';


  });
    
}
let meteor = document.querySelector('#destroy-all');
kill = function(){
for (const list of KillaDino) list.style.textDecoration = 'line-through';
for(const list of FadeADino)list.style.opacity = '0';
for(const image of BurnADino)image.style.width = '0px';

};

meteor.addEventListener('click', kill);