fetch("https://dummyjson.com/products")
  .then((resolve) => resolve.json())
  .then((data) => {
    let arr = data["products"];
    let a = document.getElementById("my1");
    arr.forEach((element) => {
      a.innerHTML += `
      <!-- <img src=${element.images[1]} alt="img"> -->
         
      <div id="box" style="border: 1px solid black; width: 30vw; margin: 10px 10px; padding: 5px 5px;">
      Title: ${element.title}
      <br>
      Brand: ${element.brand}
      <br>
      Price: $${element.price}
      <br>
      Rating: ${element.rating}
      <br>
      Stock: ${element.stock}
      <br>  
  </div>
            
        `;
    });
  });
