var count = 0;
var counters =  document.getElementById("counter");
var saving = document.getElementById("entries");
var statement = "Previous Entries are: ";


function increment(){
  count++;
counters.textContent = count;
btnchange();
}

function save(){
   let saves =  count + " -";
   count++;
   saving.textContent += saves;
   count = 0;
   counters.textContent = count;
}


function reset(){
     count = 0;
     counters.innerText = count;
     saving.innerText = statement + counters.textContent;
    
}
