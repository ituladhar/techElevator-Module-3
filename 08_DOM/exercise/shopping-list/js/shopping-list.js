// add pageTitle
const title = "My Shopping List";
// add groceries
const groceries = ["Grapes", 
                  "Bananas",
                  "Apples",
                  "Radishes",
                  "Celery",
                  "Bell Peppers",
                  "Chicken",
                  "Turkey Breast",
                  "Lean Ground Turkey",
                  "Albacore Tuna"];
/**
 * This function will get a reference to the title and set its text to the value
 * of the pageTitle variable that was set above.
 */
function setPageTitle() {
  const pageTitle = document.querySelector('#title');
  pageTitle.innerText = title;
}

/**
 * This function will loop over the array of groceries that was set above and add them to the DOM.
 */
function displayGroceries() {
  const parent = document.querySelector('#groceries');
   groceries.forEach(item =>{
    let li = document.createElement('li');
    li.innerText = item;
    parent.appendChild(li);
   })
}

/**
 * This function will be called when the button is clicked. You will need to get a reference
 * to every list item and add the class completed to each one
 */
function markCompleted() {
  let items = document.querySelectorAll('li')
  items.forEach(item =>{
    item.classList.add('completed');
  })
}

setPageTitle();

displayGroceries();

// Don't worry too much about what is going on here, we will cover this when we discuss events.
document.addEventListener('DOMContentLoaded', () => {
  // When the DOM Content has loaded attach a click listener to the button
  const button = document.querySelector('.btn');
  button.addEventListener('click', markCompleted);
});
