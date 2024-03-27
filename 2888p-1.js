 async function getUser(){
    try {

    const responsive = await fetch('https://jsonplaceholder.typicode.com//users')
    const data = await responsive.json(); 

    let newElement = document.createElement('div');
    newElement.classList.add("row");

    for(let i = 0; i< 10; i++ ){
        const userValue = data[i];
     console.log(userValue);
    
        let newCol = document.createElement('div');
        newCol.classList.add("col-6");
        newCol.style.marginTop="50px";
        
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.style.margin = "15px";
        cardDiv.style.width = "25rem";
        
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        cardBody.classList.add("back1");

        let cardH5 = document.createElement("h5");
        cardH5.classList.add("card-title");

        let carP = document.createElement("p");
        carP.classList.add("card-text");

        let cardUl = document.createElement("ul");
        cardUl.classList.add("list-group");
        cardUl.classList.add("list-group-flush");
        
        

        let cardLi = document.createElement("li");
        cardLi.classList.add("list-group-item")
        cardLi.classList.add("back2")
        cardLi.style.height = "150px";

        let cardCom = document.createElement("div");
        cardCom.classList.add("card-body");
        cardCom.classList.add("back3");

        let carP1 = document.createElement("p");
        carP1.classList.add("card-text");

        let cardInfo = document.createElement("a");
        cardInfo.classList.add("card-link");


        cardBody.appendChild(cardH5);
        cardBody.appendChild(carP);
        cardDiv.appendChild(cardBody);
        cardUl.appendChild(cardLi);
        cardDiv.appendChild(cardUl)
        cardCom.appendChild(carP1);
        cardCom.appendChild(cardInfo);
        cardDiv.appendChild(cardCom);

        newCol.appendChild(cardDiv);
        newElement.appendChild(newCol);
        document.body.appendChild(newElement);

        cardH5.innerHTML = "Id : "+ userValue.id +"<br> Name : "+ userValue.name +"<br> User Name : "+  userValue.username;
        carP.innerHTML="Adress City: "+ userValue.address.city +" <br> Street :"+ userValue.address.street +"<br> Suite"+userValue.address.suite +"<br> Zipcode"+userValue.address.zipcode;
        cardLi.innerHTML="Company : " + userValue.company.name +"<br>  "+ userValue.company.catchPhrase +"<br> Bs : " + userValue.company.bs;
        carP1.innerHTML ="Contact information";
        cardInfo.innerHTML = "Phone :" + userValue.phone +"<br> Email :"+ userValue.email+"<br> Website :" + userValue.website;
    }
 



    } catch (error) {
        console.log(error);
    }
    

 }

 getUser();

 
  
