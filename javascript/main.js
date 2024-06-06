const input= document.getElementById("file-input");
const rcard= document.querySelector(".ratecard");


input.addEventListener("change", (e)=> {
    const file = e.target.files[0];

    readXlsxFile(file).then((rows)=>{
        console.log(rows);
        let ulone = document.createElement("ul");
        let ultwo = document.createElement("ul");
        rows.forEach((row) => {
            // console.log(row)
            if(rows.indexOf(row) != 0){
                if(row.at(1) == null){
                    console.log("dummy1");
                    const li = document.createElement("li");
                    li.textContent = "dum1";
                    li.style.color = "transparent";
                    // li.style.marginBottom = "0px";
                    ulone.appendChild(li);
                }
                else{
                    console.log(row.at(1));
                    const li = document.createElement("li");
                    li.textContent = row.at(1);
                    ulone.appendChild(li);
                }
                if(row.at(2) == null){
                    console.log("dummy2");
                    const li = document.createElement("li");
                    li.textContent = "dum2";
                    li.style.color = "transparent";
                    // li.style.marginBottom = "0px";
                    ultwo.appendChild(li);
                }
                else{
                    console.log(row.at(2));
                    const li = document.createElement("li");
                    li.textContent = row.at(2);
                    ultwo.appendChild(li);                    
                }
            }
        })
        rcard.appendChild(ulone)
        rcard.appendChild(ultwo)
    })
})

console.log("hii")

// const li = document.createElement("li");
// li.textContent = cell;
// ultwo.appendChild(li);
// console.log(cell)

// rcard.appendChild(ulone)
// rcard.appendChild(ultwo)

// if(cell == null){
//     console.log("null")
// }
// else{
//     console.log(cell)
// }
