// header

let cartCount = 0;
        let cartItems = [];

        function addToCart() {
            cartCount++;
            cartItems.push(`Item ${cartCount}`);
            document.querySelector('.cart-count').textContent = cartCount;
            document.getElementById('addToCartModal').style.display = 'block';
            setTimeout(() => {
                closeModal('addToCartModal');
            }, 2000);
        }
        function toggleMenu() {
            const nav = document.querySelector('.header nav');
            nav.classList.toggle('active');
        }
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        function showCart() {
            const cartItemsList = document.getElementById('cartItems');
            cartItemsList.innerHTML = '';
            cartItems.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                cartItemsList.appendChild(li);
            });
            document.getElementById('cartModal').style.display = 'block';
        }

        window.onclick = function(event) {
            const addToCartModal = document.getElementById('addToCartModal');
            const cartModal = document.getElementById('cartModal');
            if (event.target == addToCartModal) {
                addToCartModal.style.display = 'none';
            }
            if (event.target == cartModal) {
                cartModal.style.display = 'none';
            }
        }


// Simulated product data
const products = [
    { id: 1, name: 'Doctor', price: 49.99, image: 'doctor.jpg', description: 'Description of product 1.', cartbutton: 'Book Service' },

    { id: 2, name: 'Barber', price: 29.99, image: 'barber.jpg', description: 'Description of product 2.', cartbutton: 'Book Service' },

    { id: 3, name: 'Chef - Cook', price: 19.99, image: 'chef.jpg', description: 'Description of product 3.', cartbutton: 'Book Service' },

    { id: 4, name: 'Driver', price: 39.99, image: 'driver.jpg', description: 'Description of product 4.', cartbutton: 'Book Service' },

    { id: 5, name: 'Painter', price: 59.99, image: 'painter.jpg', description: 'Description of product 5.', cartbutton: 'Book Service' },

    { id: 6, name: 'Cleaner', price: 24.99, image: 'cleaner.jpg', description: 'Description of product 6.', cartbutton: 'Book Service' },

    { id: 7, name: 'Product 7', price: 54.99, image: 'pexels-apasaric-3342739.jpg', description: 'Description of product 7.', cartbutton: 'Book Service' },

    { id: 8, name: 'Product 8', price: 34.99, image: 'pexels-apasaric-3342739.jpg', description: 'Description of product 8.', cartbutton: 'Book Service' },

    { id: 9, name: 'Product 9', price: 14.99, image: 'pexels-apasaric-3342739.jpg', description: 'Description of product 9.', cartbutton: 'Book Service' },

    { id: 10, name: 'Product 10', price: 64.99, image: 'pexels-apasaric-3342739.jpg', description: 'Description of product 10.', cartbutton: 'Book Service' },

    { id: 11, name: 'Product 11', price: 44.99, image: 'pexels-apasaric-3342739.jpg', description: 'Description of product 11.', cartbutton: 'Book Service' },

    { id: 12, name: 'Product 12', price: 29.99, image: 'pexels-apasaric-3342739.jpg', description: 'Description of product 12.', cartbutton: 'Book Service' }

];

// Function to display products
function displayProducts(productsToShow) {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = `
  <div class="product">
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <p>${product.description}</p> <span><button style =" background-color: none;
    height: 2em;
    width: 8em; border-radius: 45px; " onclick="addToCart()">${product.cartbutton}</button></span>
  </div>
`;
        // for cart button up style="border-radius: 1px;"   background-color: #ffab0f;
    // height: 2em;
    // width: 2em;

        productContainer.innerHTML += productCard;
    });
}

// Load initial set of products
displayProducts(products.slice(0, 12)); // Display first 6 products initially

// Functionality for "View More" button
const viewMoreBtn = document.getElementById('viewMoreBtn');
const viewLessBtn = document.getElementById('viewLessBtn');

viewMoreBtn.addEventListener('click', () => {
    document.querySelectorAll('.product.hidden').forEach(product => {
        product.classList.remove('hidden');
    });

    viewMoreBtn.style.display = 'none';
    viewLessBtn.style.display = 'inline-block';
});

// Functionality for "View Less" button
viewLessBtn.addEventListener('click', () => {
    document.querySelectorAll('.product:nth-of-type(n+7)').forEach(product => {
        product.classList.add('hidden');
    });

    viewMoreBtn.style.display = 'inline-block';
    viewLessBtn.style.display = 'none';
});

const hamburger = document.getElementById('hamburger');
const navLinksLeft = document.querySelector('.left-links');
const navLinksRight = document.querySelector('.right-links');

hamburger.addEventListener('click', () => {
    navLinksLeft.classList.toggle('show');
    navLinksRight.classList.toggle('show');
});


// loader animation

// setTimeout(function() {
//     document.getElementById('loader-container').classList.add('loader-container');
// }, 3000); // 3000 milliseconds = 3 seconds



// advertisement
    // Function to display advertisement after 5 seconds
    setTimeout(function () {
        document.getElementById('bodyy').style.display = 'flex';
        document.getElementById('advertisement').style.display = 'block';
      }, 5000); // 5000 milliseconds = 5 seconds
  
      // Close advertisement when close icon is clicked
      document.getElementById('closeAd').addEventListener('click', function () {
        document.getElementById('bodyy').style.display = 'none';
      });
  





// career page 


    // // Optional JavaScript for form submission handling or validation
    // const form = document.getElementById('jobApplicationForm');
    // form.addEventListener('submit', function(event) {
    //     event.preventDefault(); // Prevent form from submitting
    //     // Here you can add JavaScript validation or submit the form via AJAX
    //     // For simplicity, this example does not include validation logic
    //     // You can access form data using form.elements and perform actions as needed
    //     console.log('Form submitted!');
    //     // Replace console.log with your form submission logic
    // });




      
// loader
// setTimeout(() => {
//     document.querySelector(".loader-container").style.display = "none";
//   }, 3000);
  
//   // loader gsap
//   gsap.to('.box', {
//     yoyo: true,
//     repeat: -1,
//     duration: 1,
//     stagger: 0.2,
//     scale: 0.7,
//     ease: 'power2.inOut'
//   });

