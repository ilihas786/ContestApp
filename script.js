
let cardContainer=document.getElementById('cardContainer');

let p = fetch("https://kontests.net/api/v1/all");
p.then((value1) => {
    return value1.json()
}).then((value2) => {
    console.log(value2);
    let ihtml = "";

    for (i in value2) {
        console.log(value2[i].name);
            ihtml+=`
            
            <div class="card my-2 mx-2" style="width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWykQahjodplZLy6MkntHeJTPyxG-R0H2wlg&usqp=CAU" class="card-img-top" alt="...">
            <div class="card-body">
              <h3 class="card-title">${value2[i].name}</h3>
              <h5 class="card-title">Start Time is ${value2[i].start_time}</h5>
              <h5 class="card-title">end Time is ${value2[i].end_time}</h5>
              <h5 class="card-title">platform ${value2[i].site}</h5>
              <h5 class="card-title">status ${value2[i].status}</h5>
             
              
              <a href="${value2[i].url}"class="btn btn-primary">Visit now
              !!</a>
            </div>
          </div>
            `

    }

    cardContainer.innerHTML =ihtml;

})

