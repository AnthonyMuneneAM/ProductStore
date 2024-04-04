var hamburgerBtn = document.querySelector('.hamburger-btn');
var sideBar = document.querySelector('.side-bar');

hamburgerBtn.addEventListener('click', sidebarToggle);
function sidebarToggle(){
	sideBar.classList.toggle('active');
}

document.getElementById("add-variant-btn").addEventListener("click", function() {
    console.log("Button clicked!");

    // Create a new mini form container
    var variantSection = document.createElement("div");
    variantSection.classList.add("variant-section", "form-group");

    // Add dropdown for variant option
    var variantOptionSelect = document.createElement("select");
    variantOptionSelect.classList.add("form-control", "mb-3"); // Add margin-bottom
    // Add option values (e.g., size, flavor)
    variantOptionSelect.innerHTML = `
        <option value="size">Size</option>
        <option value="flavor">Flavor</option>
    `;
    variantSection.appendChild(variantOptionSelect);

    // Add input field for variant value
    var variantValueInput = document.createElement("input");
    variantValueInput.type = "text";
    variantValueInput.classList.add("form-control", "mb-3"); // Add margin-bottom
    variantValueInput.placeholder = "Variant Value";
    variantSection.appendChild(variantValueInput);

    // Add "Add new attribute" button to allow adding more attributes
    var addAttributeBtn = document.createElement("button");
    addAttributeBtn.type = "button";
    addAttributeBtn.classList.add("btn", "btn-secondary", "mb-3", "mr-3");
    addAttributeBtn.textContent = "Add new attribute";
    variantSection.appendChild(addAttributeBtn);

    // Add input field for price
    var priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.classList.add("form-control", "mb-3"); // Add margin-bottom
    priceInput.placeholder = "Price";
    variantSection.appendChild(priceInput);

    // Add "Done" button to confirm variant addition
    var doneBtn = document.createElement("button");
    doneBtn.type = "button";
    doneBtn.classList.add("btn", "btn-success", "mb-3", "mr-3");
    doneBtn.textContent = "Done";
    variantSection.appendChild(doneBtn);

    // Add the new mini form container to the variants section
    document.getElementById("variants-section").appendChild(variantSection);

    // Attach event listener to the "Add new attribute" button
    addAttributeBtn.addEventListener("click", function() {
        // Add line break for spacing
        variantSection.appendChild(document.createElement("br"));
        // Add dropdown for variant option
        var newVariantOptionSelect = document.createElement("select");
        newVariantOptionSelect.classList.add("form-control", "mb-3"); // Add margin-bottom
        // Add option values (e.g., size, flavor)
        newVariantOptionSelect.innerHTML = `
            <option value="size">Size</option>
            <option value="flavor">Flavor</option>
        `;
        variantSection.insertBefore(newVariantOptionSelect, addAttributeBtn);

        // Add line break for spacing
        variantSection.appendChild(document.createElement("br"));
        // Add input field for variant value
        var newVariantValueInput = document.createElement("input");
        newVariantValueInput.type = "text";
        newVariantValueInput.classList.add("form-control", "mb-3"); // Add margin-bottom
        newVariantValueInput.placeholder = "Variant Value";
        variantSection.insertBefore(newVariantValueInput, addAttributeBtn);
    });

    // Attach event listener to the "Done" button
    doneBtn.addEventListener("click", function() {
        // Get selected option and variant value
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

        // Display variant details in a card with an edit button
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

        variantSection.innerHTML = ''; // Clear the mini form
        variantSection.appendChild(variantCard);
    });
});
