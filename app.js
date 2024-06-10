let inputfruit=document.getElementById('fruitorlegume');
// let radio1=document.getElementById('radio1');
// let radio2=document.getElementById('fruitorlegume');
var radios = document.getElementsByName('exampleRadios');

var fruit=document.getElementById('fruit');
var legume=document.getElementById('legume');
var fruitorlegumediv=document.getElementById('fruitorlegumediv');


document.getElementById('addspecificlist').addEventListener("click", () => {
   
       
        var radios = document.getElementsByName('exampleRadios');
        
   
        var radioChecked = false;
  
          for (var i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
            radioChecked = true;
            break;
          }
        }
  
     
        var inputfruit = document.getElementById('fruitorlegume').value;
  
     
        if (radioChecked && inputfruit.trim() !== '') {
            if(radios[0].checked){
                let data=`  <div class="alert alert-success" role="alert">
            <span>${inputfruit}</span></div>`;
            fruit.innerHTML +=data;        
            }else{
                let data=`  <div class="alert alert-info" role="alert">
                <span>${inputfruit}</span></div>`;
                legume.innerHTML +=data;
            }
           
        


        } else {
          alert('Please make sure that you enter all details.');
        }
      
})

document.getElementById('addgenerallist').addEventListener("click", () => {
   
    var radios = document.getElementsByName('exampleRadios');
    
  
    var radioChecked = false;

    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        radioChecked = true;
        break;
      }
    }

    var inputfruit = document.getElementById('fruitorlegume').value;

   
    if (radioChecked && inputfruit.trim() !== '') {
        // if(radios[0].checked ){
            let data=`  <div class="alert alert-warning" role="alert">
        <span>${inputfruit}</span></div>`;
        fruitorlegumediv.innerHTML +=data;        
        // }
       
    


    } else {
      alert('Please make sure that you enter all details.');
    }
  
})