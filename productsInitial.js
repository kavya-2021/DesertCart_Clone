function priceSort(){
    var select = document.querySelector("#forPrice").value;  
    if(select == "nofilter"){
        displayProducts(data);
    }
    else if(select == 1){
    var level1 = data.filter(function(item){
         var prices = Number(item.MRP);
         if(prices < 1000) {
            return item;
         } 
    }); 
    displayProducts(level1);
   } 
   else if(select == 2){
    var level1 = data.filter(function(item){
         var prices = Number(item.MRP);
         if(prices >= 1000 && prices < 2000) {
            return item;
         } 
    }); 
    displayProducts(level1); 
   }
   else if(select == 3){
    var level1 = data.filter(function(item){
         var prices = Number(item.MRP);
         if(prices >= 2000 && prices < 3000) {
            return item;
         } 
    }); 
    displayProducts(level1); 
   }
   else if(select == 4){
    var level1 = data.filter(function(item){
         var prices = Number(item.MRP);
         if(prices >= 3000 && prices < 10000) {
            return item;
         } 
    }); 
    displayProducts(level1); 
   }
   else if(select == 5){
    var level1 = data.filter(function(item){
         var prices = Number(item.MRP);
         if(prices >= 10000) {
            return item;
         } 
    }); 
    displayProducts(level1); 
   }
}

function countrySort(){
    var select = document.querySelector("#forCountry").value;
    console.log(select);

    var selected = data.filter(function(item){
        if(select === item.range) return item ;
        if(select == "nofilter") return item ;
    });
       displayProducts(selected);
    }

function deliverySort(){
    var select = Number(document.querySelector("#fortime").value);


    var selected = data.filter(function(item){
        var days = item.range ;
        if(select === 0) return item ;
        else if(select === days) return item ;
        
    });
         displayProducts(selected);
    }



displayProducts(data);

function displayProducts(data){
    document.querySelector("#container").innerHTML = "";
    data.map(function(item){
        var prodiv = document.createElement("div");
        prodiv.setAttribute("id","maindiv");

        var image = document.createElement("img");
        image.setAttribute("id","picture");
        image.setAttribute("src",item.image)

        var ptag1 = document.createElement("p");
        ptag1.setAttribute("id","nameofprod");
        ptag1.textContent = item.name ;

        var ptag2 = document.createElement("p");
        ptag2.setAttribute("id","brandofprod");
        ptag2.textContent = item.brand ;

        var personaldiv = document.createElement("div");
        personaldiv.setAttribute("id","sub1div");

        var leftdiv = document.createElement("div");
        leftdiv.setAttribute("id","div1");

        var rightdiv = document.createElement("div");
        rightdiv.setAttribute("id","div2");

        var rating1 = document.createElement("p");
        rating1.setAttribute("id","rating");
        rating1.textContent = item.rating ;
        
        var price = document.createElement("p");
        price.setAttribute("id","cost");
        price.textContent = "₹ " + item.MRP ;

        var origin = document.createElement("p");
        origin.setAttribute("id","fromCounty");
        origin.textContent = "from " + item.from ;

        var dispatch = document.createElement("p");
        dispatch.setAttribute("id","toCounty");
        dispatch.textContent = "to "+item.toCountry;

        var when = document.createElement("p");
        when.setAttribute("id","delivery");
        when.textContent = "in " +item.delivery  ;
        
        leftdiv.append(rating1, price);
        rightdiv.append(origin,dispatch, when);
        
        personaldiv.append(leftdiv, rightdiv);
        prodiv.append(image , ptag1 ,ptag2 ,personaldiv) ;

        document.querySelector("#container").append(prodiv);

    });
}
