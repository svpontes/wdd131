/*this js populates the Product Name options where the array's name field is used for 
the select option display and the array's id is used for the value field.*/

// Define the array of product objects
const products = [
    {
      id: 'metalica',
      name: "T-shirt Metallica",
      
    },
    {
      id: 'ironmaden',
      name: "T-shirt Iron Maden",
     
    },
    {
      id: 'venon',
      name: "T-shirt Venon",
      
    },
    {
      id: 'nirvana',
      name: "T-shirt Nirvana",
      
    },
    {
      id: 'gorillaz',
      name: "T-shirt Grillaz",
      
    }
  ];
  
  // Function to populate the select options with product names
  function populateProductOptions() {
    const selectElement = document.querySelector('select[name="subject"]');
    
    // Clear existing options
    selectElement.innerHTML = '';

    //define a default option to be visible
    const defaultOption = document.createElement('option');
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = "Select a product";
    selectElement.appendChild(defaultOption);
  
    // Populate options
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });
  }
  
  // Call the function to populate the options when the DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    populateProductOptions();
  });
  
  // Function to increment the review counter in localStorage
  function incrementReviewCounter() {
    let reviewsCompleted = localStorage.getItem('reviewsCompleted');
    if (!reviewsCompleted) {
      reviewsCompleted = 0;
    }
    reviewsCompleted++;
    localStorage.setItem('reviewsCompleted', reviewsCompleted);
  }
  
  // Call the function to increment the review counter when the review form is submitted
  document.querySelector('form.form-general').addEventListener('submit', function() {
    incrementReviewCounter();
  });
  