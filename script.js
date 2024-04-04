// Get the hamburger button and sidebar
var hamburgerBtn = document.querySelector('.hamburger-btn');
var sideBar = document.querySelector('.side-bar');

// Toggle the sidebar when the hamburger button is clicked
hamburgerBtn.addEventListener('click', toggleSidebar);
function toggleSidebar(){
    sideBar.classList.toggle('active');
}

// Handle the click event for the "Add Variant" button
document.getElementById("add-variant-btn").addEventListener("click", function() {
    console.log("Button clicked!");

    // Create a new section for adding a variant
    var variantSection = document.createElement("div");
    variantSection.classList.add("variant-section", "form-group");

    // Add a dropdown for selecting the variant option
    var variantOptionSelect = document.createElement("select");
    variantOptionSelect.classList.add("form-control", "mb-3"); // Add margin-bottom
    // Add option values like size, flavor, etc.
    variantOptionSelect.innerHTML = `
        <option value="volume">Volume</option>
        <option value="flavor">Flavor</option>
    `;
    variantSection.appendChild(variantOptionSelect);

    // Add an input field for entering the variant value
    var variantValueInput = document.createElement("input");
    variantValueInput.type = "text";
    variantValueInput.classList.add("form-control", "mb-3"); // Add margin-bottom
    variantValueInput.placeholder = "Variant Value";
    variantSection.appendChild(variantValueInput);

    // Add a button to allow adding more attributes
    var addAttributeBtn = document.createElement("button");
    addAttributeBtn.type = "button";
    addAttributeBtn.classList.add("btn", "btn-link", "mb-3", "mr-3", "px-0");
    addAttributeBtn.textContent = "Add new attribute";
    variantSection.appendChild(addAttributeBtn);

    // Add an input field for entering the price
    var priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.classList.add("form-control", "mb-3"); // Add margin-bottom
    priceInput.placeholder = "Price";
    variantSection.appendChild(priceInput);

    // Add a button to confirm the addition of the variant
    var doneBtn = document.createElement("button");
    doneBtn.type = "button";
    doneBtn.classList.add("btn", "btn-dark", "mb-3", "mr-3");
    doneBtn.textContent = "Done";
    variantSection.appendChild(doneBtn);

    // Add the new variant section to the page
    document.getElementById("variants-section").appendChild(variantSection);

    // Handle the click event for the "Add new attribute" button
    addAttributeBtn.addEventListener("click", function() {
        // Add a line break for spacing
        variantSection.appendChild(document.createElement("br"));
        // Add a dropdown for selecting the variant option
        var newVariantOptionSelect = document.createElement("select");
        newVariantOptionSelect.classList.add("form-control", "mb-3"); // Add margin-bottom
        // Add option values like size, flavor, etc.
        newVariantOptionSelect.innerHTML = `
            <option value="volume">Volume</option>
            <option value="flavor">Flavor</option>
        `;
        variantSection.insertBefore(newVariantOptionSelect, addAttributeBtn);

        // Add a line break for spacing
        variantSection.appendChild(document.createElement("br"));
        // Add an input field for entering the variant value
        var newVariantValueInput = document.createElement("input");
        newVariantValueInput.type = "text";
        newVariantValueInput.classList.add("form-control", "mb-3"); // Add margin-bottom
        newVariantValueInput.placeholder = "Variant Value";
        variantSection.insertBefore(newVariantValueInput, addAttributeBtn);
    });

    // Handle the click event for the "Done" button
    doneBtn.addEventListener("click", function() {
        // Get the selected option and variant value
        var selectedOption = variantOptionSelect.options[variantOptionSelect.selectedIndex].value;
        var variantValue = variantValueInput.value;
        var price = priceInput.value;

        // Get all the attributes entered by the user
        var attributes = [];
        var attributeSelects = variantSection.querySelectorAll("select");
        var attributeInputs = variantSection.querySelectorAll("input[type='text']");
        attributeSelects.forEach(function(select, index) {
            var attribute = select.value + ": " + attributeInputs[index].value;
            attributes.push(attribute);
        });

        // Display the variant details in a card with an edit button
        var variantCard = document.createElement("div");
        variantCard.classList.add("card", "mb-3");

        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        var cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = attributes.join(", ");

        var cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = "Price: " + price;

        var editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.classList.add("btn", "btn-primary");
        editBtn.textContent = "Edit";

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(editBtn);
        variantCard.appendChild(cardBody);

        // Clear the mini form and add the variant card to the section
        variantSection.innerHTML = '';
        variantSection.appendChild(variantCard);
    });
});
