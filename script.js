const body = document.querySelector("body");
const main = document.querySelector("main");
const form = document.querySelector("form");
const title = document.querySelector("#inp-title");
const categories = document.querySelector("#category")
const submit = document.querySelector("#submit")

let cardDiv = document.createElement("div");
main.append(cardDiv);
cardDiv.classList.add("card-div");

let cardsArr =JSON.parse(localStorage.getItem('Cards')) || [];
//   const cardsArr = [];
const ui = ()=>{
    cardDiv.innerHTML = "";
    cardsArr.forEach((elem)=>{

let card = document.createElement("div");
cardDiv.prepend(card);
card.classList.add("cards");
card.dataset.id = elem.uid;


let cardText = document.createElement("div");
card.append(cardText);
cardText.setAttribute("class", "card-text");

let pTag = document.createElement("p");
cardText.append(pTag);
pTag.setAttribute("id", "title-text");
pTag.innerHTML =`${elem.title}`;

// Demonstration of inputs.value and inputs.getAttribute("value")

// It gives the current input's current value
// pTag.textContent = `Current value:${elem.title}`

// It gives only the static value which is already mentioned in the html Attrubutes.
// pTag.textContent = `Static value:${elem.title.getAttribute("value")}`


let h3 = document.createElement("h3");
cardText.append(h3);
h3.innerHTML = `${elem.categories}`;


let btnsDiv = document.createElement("div");
card.appendChild(btnsDiv);
btnsDiv.classList.add("btns-div");

let deleted = document.createElement("button");
btnsDiv.append(deleted);
deleted.setAttribute("id", "deleted");
deleted.innerHTML = ` <i class="ri-delete-bin-6-line"></i>Delete`;

let done = document.createElement("button");
btnsDiv.append(done);
done.setAttribute("id", "done");
done.innerHTML = `Complete`;

let edit = document.createElement("button");
btnsDiv.append(edit);
edit.setAttribute("id", "edit");
edit.innerHTML = `<i class="ri-pencil-ai-line"></i>Edit`;
edit.before(deleted);
edit.after(deleted);

if(elem.completed){
done.innerHTML = `<i class="ri-check-line"></i> Completed`;

    edit.style.display = "none"
    deleted.style.display = "none"
    let remove = document.createElement("button")
    remove.textContent = "Remove";
    remove.setAttribute("id","remove")
    btnsDiv.append(remove)
}
  
    if(elem.remove){
        card.style.display = "none";
    }

    })
}

ui();

form.addEventListener("submit",(events)=>{
    events.preventDefault()

    let title = events.target[0].value;
    let categories = events.target[1].value;

     if(title.trim() === "" || categories.trim() === ""){
        alert("please fill all the field.");return
    }
    let obj = {
        uid:Math.floor(Math.random()* 100000),
        categories,
        title
    }
    cardsArr.push(obj)
    localStorage.setItem('Cards',JSON.stringify(cardsArr));
    form.reset()
    console.log(cardsArr)
    ui()
})


body.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    const inputs = event.target.closest("input")

    const card = button.closest(".cards");

    // DELETE
    if (button.id === "deleted") {
        if (!card) return;

        const index = cardsArr.findIndex(
            (elem) => String(elem.uid) === card.dataset.id
        );

        if (index !== -1) {
            cardsArr.splice(index, 1);
    localStorage.setItem('Cards',JSON.stringify(cardsArr));

            ui();
        }
    }

    // EDIT
    else if (button.id === "edit") {
        if (!card) return;

        const uid = card.dataset.id;

        const index = cardsArr.findIndex(
            (elem) => String(elem.uid) === uid
        );

        if (index === -1) return;

        const task = cardsArr[index];

        const newTitle = prompt("Edit task title:", task.title);
        if (newTitle === null || newTitle.trim() === "") return;

        task.title = newTitle.trim();
        localStorage.setItem('Cards',JSON.stringify(cardsArr))

        ui();
    }
    // DONE
    if(button.id === "done"){
        if(!card)return;
        const uid = card.dataset.id;
        const index= cardsArr.findIndex((elem) => String(elem.uid) === uid);
        if(index === -1) return;
        cardsArr[index].completed = true;
        localStorage.setItem('Cards', JSON.stringify(cardsArr));
        ui()
       
    }

    // REMOVE
    if(button.id === "remove"){
        if(!card)return;
        const uid = card.dataset.id;
        const index = cardsArr.findIndex((elem) => String(elem.uid)=== uid) ;
        if(index === -1)return;
        cardsArr[index].remove = true;
        localStorage.setItem('Cards',JSON.stringify(cardsArr))
        ui()
    }
        

    // DARK MODE
    if(!button)return;
    const darkSwitch =  event.target.closest('[data-action="dark-mode"]');
    if(!button && !darkSwitch)return;
    if(darkSwitch){
        document.body.classList.toggle("dark-mode");
        return;
    }
});







