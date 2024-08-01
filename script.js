function generetenumber() {

    let min = Math.ceil(document.querySelector(".input1").value);
    let max = Math.floor(document.querySelector(".input2").value);

    min = Math.ceil (min)
    max = Math.floor(max)

    let result = Math.floor(Math.random() * (max - min + 1)) + min


    alert(result)
 

    
} 






console.log("está funcionando")