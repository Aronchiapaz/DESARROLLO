var lista=[];

var min, max,h=45;

function setup() {
  var font= createCanvas(1100,530);
  font.position(120,80);
  font.background(51);
 clear();
  
}

function draw() {
  if(min>0){
    fill(85,110,96);
    text("Minimo",433,25);
    text(min,460,45);
  }
  if(max>0){
    fill(85,110,96);
    text("Maximo",623,25);
    text(max,650,45);
  }

  for(var i=0; i<lista.length;i++ ){
    var t;
    fill(115,41,229);
    if(i==(h+1)){
      fill(255,0,0);
    }
    textSize(20);    
    text(lista[i],50*(i+1),100);
    rect(50*(i+1),105, 20, lista[i]*4);
    
  }
}


function Aleatorio() { 
  lista=[];
  for (var i=0, t=20; i<t; i++) {
      lista.push(Math.round(Math.random() * 98)+1);
  }
  
  clear();
  
}

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function Burbuja() {
  
  var n, i, k, aux,auxr,auxg,auxb;
  n = lista.length;
   
  for (k = 0; k < n; k++) {
      for (i = -1; i < (n - k); i++) {
          h=i;
          if (lista[i] > lista[i + 1]) {
            
              aux = lista[i];
              lista[i] = lista[i + 1];
              lista[i + 1] = aux;
              
            
              
          }
          await sleep(350);
          clear();
          
      }
  }
  clear();

 
}

function Valmin(){
  min=Math.min.apply(null, lista);
  clear();

}
function Valmax(){
  max=Math.max.apply(null, lista);
  clear();
}