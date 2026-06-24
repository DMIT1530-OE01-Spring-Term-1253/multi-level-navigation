//Here, we're looking for something in our HTML document. The thing we're looking for is any element with a class of .toggle-btn and when we find it, we're putting it into a storage container to access to later, called `toggleButtons`.

//The reason we're doing here, right at the very top, is so that our script only has to search the document once. This speeds up performance. 
const toggleButtons = document.querySelectorAll(".toggle-btn");

//We're now assigning a behaviour to each .toggle-btn that we found. 
toggleButtons.forEach((toggleButtons => {
    //on this line, we're an event listener. This tells our toggle buttons to wait or to anticipate for something. In this case, we're are telling it wait for a user-driven event called a 'click-event' or simply put we're telling it do when the user clicks on something.
    toggleButtons.addEventListener("click", function (event) {
        //This line restricts the behaviour to only 1 single toggle button that's being pressed, not anything else in the document (prevents bubbling up) 
        event.stopPropagation();
        //We are adding or removing a class called .expanded to the .toggle-btn next sibling, or the element that immediately comes after it. This should either reveal or hide the dropdown menu
        this.nextElementSibling.classList.toggle('expanded'); 
    });
}));