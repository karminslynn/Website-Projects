

const button = document.querySelector('button');

const data1 = document.querySelector('#data1');
const data2 = document.querySelector('#data2');
const data3 = document.querySelector('#data3');
const data4 = document.querySelector('#data4');

const table = document.querySelector('table');

button.addEventListener("click", () => {
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    let deletebtn = document.createElement("button");
    deletebtn.textContent="Delete";

   deletebtn.addEventListener("click", () => {
    tr.remove();
   })

    td1.textContent = data1.value;
    td2.textContent = data2.value;
    td3.textContent = data3.value;
    td4.textContent = data4.value;

    let tr = document.createElement("tr");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(deletebtn);

    table.appendChild(tr);
})