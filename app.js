//added input, button and ul tags for modification
let inpt = document.querySelector("#taskInput");
let btn = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");
//created a variable for tracking user list
let trackList = null;
//adding click event for button
btn.addEventListener("click", (e) => {
    //preventing the default behaviour of button
    e.preventDefault(); 
    //adding the user input to the variable text
    let text = inpt.value;
    
    if (text) {
        //creating li element
        let li = document.createElement("li");
        //creating a span element for adding the to do list text
        let listText = document.createElement("span");
        //adding the to do user list text to listText variable
        listText.textContent = text;

        //creating edit button
        let editBtn = document.createElement("button");
        //adding edit icon
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        //adding classname to the button tag
        editBtn.className = "task-buttons";
        //adding click event to edit button
        editBtn.addEventListener("click", () => {
            //adding the user text to the input field when user clicks edit btn
            inpt.value = listText.textContent;
            //storing the user entered to do list to the tracklist variable fo reference
            trackList = li;
        });

        //creating delete button
        let delBtn = document.createElement("button");
        delBtn.innerHTML = '<i class="fas fa-trash"></i>';
        delBtn.className = "task-buttons";
        delBtn.addEventListener("click", () => {
            //removing the user enetered list when user click on delete icon
            list.removeChild(li);
            //making trackList variable back to null 
            trackList = null;
        });

        //adding list text and buttons to li
        li.appendChild(listText);
        //adding edit btn to li
        li.appendChild(editBtn);
        //adding del btn to li
        li.appendChild(delBtn);

        //adding li to the ul
        list.appendChild(li);

        //clearing the input field when user clicks on add btn
        inpt.value = "";
    }
});
