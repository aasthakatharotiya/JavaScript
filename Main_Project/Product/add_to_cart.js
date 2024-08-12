fetch('add_to_cart.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('cart_data').innerHTML = data;

        let shoppingDiv = document.getElementById('shopping');
        let fixPosButton = document.getElementById('fix_pos');
        let crossButton = document.getElementById('cross');

        if (shoppingDiv && fixPosButton && crossButton) {
            fixPosButton.addEventListener("click", function() {
                shoppingDiv.style.visibility = "visible";
                shoppingDiv.style.width = "35%";
                shoppingDiv.style.transition = "1s";
                fixPosButton.style.visibility = "hidden";
            });

            crossButton.addEventListener("click", function() {
                shoppingDiv.style.visibility = "hidden";
                shoppingDiv.style.width = "0%";
                shoppingDiv.style.transition = "1s";
                fixPosButton.style.visibility = "visible";
            });
        }

        let cartButtons = document.querySelectorAll('#cart');
        cartButtons.forEach(button => {
            button.addEventListener("click", function() {
                // Remove any existing form
                let existingForm = document.querySelector('.form_container');
                if (existingForm) {
                    existingForm.remove();
                }

                let productImage = this.closest('.product').querySelector('.product_img img').src;
                let productTitle = this.closest('.product').querySelector('.product_text h4').textContent;
                let productPrice = this.closest('.product').querySelector('.product_text h3').textContent;

                let formHTML = `
                    <div class="form_container" style="width: fit-content; font-size: 20px; position: fixed; top: 22%; left: 35%; z-index: 1000; background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8), rgba(0,0,0,0.8)); color: white; padding: 20px; border: 3px solid rgb(250, 3, 98); border-radius: 8px;">
                        <div style="font-size: 30px; color: rgb(250, 3, 98); font-weight: bolder; text-align: center; margin-bottom: 10px;">
                            <span id="productTitle"></span>
                        </div>
                        
                        <br>
                        <div class="qun" style="display: flex; justify-content: center; gap: 10px;">
                            <span for="quantity" style="margin-top: 5px; white-space: nowrap;">Quantity :</span>
                            <input type="number" id="quantity" value="1" min="1" required style="border: none;">
                        </div>

                        <br>
                        <div class="pay" style="display: flex; justify-content: center; gap: 10px;">
                            <span for="payment" style="margin-top: 5px; white-space: nowrap;">Payment Method :</span>
                            <select id="payment" required style="border: none; color: black;">
                                <option value="">Select Appropriate Option &nbsp;&nbsp;&nbsp;</option>
                                <option value="cod">Cash on Delivery</option>
                                <option value="online">Online Payment</option>
                                <option value="phonepay">PhonePay</option>
                                <option value="gpay">GPay</option>
                            </select>
                        </div>
                        <br>
                        <div style="display: flex; justify-content: space-between;">
                            <button id="add_to_cart" style="padding-left: 20px; padding-right: 20px; width: fit-content; font-size: 20px; border: none; background-color: rgb(2, 162, 2); color: white; border-radius: 5px;">Add</button>
                            <button id="cancel" style="padding-left: 20px; padding-right: 20px; width: fit-content; font-size: 20px; border: none; background-color: rgb(255, 111, 0); color: white; border-radius: 5px;">Cancel</button>
                        </div>
                    </div>
                `;

                this.insertAdjacentHTML('afterend', formHTML);

                // Inject the product title into the form
                document.getElementById('productTitle').textContent = productTitle;

                // Add tremble animation
                let formContainer = document.querySelector('.form_container');
                formContainer.classList.add('tremble');

                document.getElementById('cancel').addEventListener('click', function() {
                    document.querySelector('.form_container').remove();
                });

                document.getElementById('add_to_cart').addEventListener("click", function() {
                    let payment = document.getElementById('payment').value;
                    let quantity = document.getElementById('quantity').value;

                    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                    cartItems.push({
                        image: productImage,
                        title: productTitle,
                        price: productPrice,
                        quantity: quantity,
                        payment: payment
                    });
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    renderCart();
                    document.querySelector('.form_container').remove(); // Remove form after adding item to cart
                
                    let confirmationHTML = `
                        <div class="confirmation_message">
                            <div class="checkmark_container">
                                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                    <circle class="checkmark_circle" cx="26" cy="26" r="25" fill="none"/>
                                    <path class="checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                            </div>
                            <div class="confirmation_text">Order Added to Cart!</div>
                        </div>
                    `;
                    document.body.insertAdjacentHTML('beforeend', confirmationHTML);

                    // Remove the confirmation message after a few seconds
                    setTimeout(() => {
                        document.querySelector('.confirmation_message').remove();
                    }, 3000);
                
                });
            });
        });

        function renderCart() {
            let tbody = document.querySelector("tbody");
            tbody.innerHTML = "";

            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.forEach((item, index) => {
                let tr = document.createElement("tr");
                tr.setAttribute("class", "cart_item");

                let td_1 = document.createElement("td");
                td_1.style.background = "none";
                td_1.style.borderBottom = "none";
                let img = document.createElement("img");
                img.src = item.image;
                img.setAttribute("class", "cart_image");
                td_1.append(img);

                let td_2 = document.createElement("td");
                td_2.style.background = "none";
                td_2.style.borderBottom = "none";
                td_2.style.color = "white";
                td_2.setAttribute("class", "cart_title");
                td_2.innerHTML = item.title;

                let td_3 = document.createElement("td");
                td_3.style.background = "none";
                td_3.style.borderBottom = "none";
                td_3.style.color = "white";
                td_3.setAttribute("class", "cart_price");
                td_3.innerHTML = item.price;

                let td_4 = document.createElement("td");
                td_4.style.background = "none";
                td_4.style.borderBottom = "none";
                td_4.style.color = "white";
                td_4.innerHTML = item.quantity; // Updated to display the correct quantity

                let td_5 = document.createElement("td");
                td_5.style.background = "none";
                td_5.style.borderBottom = "none";
                let edit_btn = document.createElement("button");
                edit_btn.setAttribute("class", "edit_btn");
                edit_btn.innerHTML = "Edit";
                edit_btn.addEventListener("click", function() {
                    edit_btn.style.display = "none";
                    td_4.innerHTML = `<input style="width: 100%;" type="number" value="${item.quantity}" min="1" class="quantity_input">`;
                    let quantityInput = td_4.querySelector('.quantity_input');
                    let update_btn = document.createElement("button");
                    update_btn.innerHTML = "Update";
                    update_btn.setAttribute("class", "update_btn");
                    update_btn.addEventListener("click", function() {
                        let newQuantity = quantityInput.value;
                        cartItems[index].quantity = newQuantity;
                        localStorage.setItem('cartItems', JSON.stringify(cartItems));
                        renderCart();
                    });
                    td_4.append(update_btn);
                });
                td_5.append(edit_btn);

                let td_6 = document.createElement("td");
                td_6.style.background = "none";
                td_6.style.borderBottom = "none";
                let delete_btn = document.createElement("button");
                delete_btn.setAttribute("class", "delete_btn");
                delete_btn.innerHTML = "Delete";
                delete_btn.addEventListener("click", function() {
                    cartItems.splice(index, 1);
                    localStorage.setItem('cartItems', JSON.stringify(cartItems));
                    renderCart();
                });
                td_6.append(delete_btn)

                td_1.setAttribute("class", "td");
                td_2.setAttribute("class", "td");
                td_3.setAttribute("class", "td");
                td_4.setAttribute("class", "td");
                td_5.setAttribute("class", "td");
                td_6.setAttribute("class", "td");

                tr.append(td_1, td_2, td_3, td_4, td_5, td_6);
                tbody.append(tr);
            });
        }

        renderCart();
    });















// fetch('add_to_cart.html')
//     .then(response => response.text())
//     .then(data => {
//         // Insert the fetched content into #cart_data
//         document.getElementById('cart_data').innerHTML = data;

//         // Check if #shopping exists before trying to manipulate it
//         const shoppingDiv = document.getElementById('shopping');
//         const fixPosButton = document.getElementById('fix_pos');
//         const crossButton = document.getElementById('cross');

//         if (shoppingDiv && fixPosButton && crossButton) {
//             // Add event listeners after the HTML is loaded
//             fixPosButton.addEventListener("click", function() {
//                 shoppingDiv.style.visibility = "visible";
//                 shoppingDiv.style.width = "35%";
//                 shoppingDiv.style.transition = "1s";
//                 fixPosButton.style.visibility = "hidden";
//             });

//             crossButton.addEventListener("click", function() {
//                 shoppingDiv.style.visibility = "hidden";
//                 shoppingDiv.style.width = "0%";
//                 shoppingDiv.style.transition = "1s";
//                 fixPosButton.style.visibility = "visible";
//             });
//         }

//         // Ensure buttons with ID 'cart' are handled properly
//         const cartButtons = document.querySelectorAll('#cart');
//         cartButtons.forEach(button => {
//             button.addEventListener("click", function() {
//                 let productImage = this.closest('.product').querySelector('.product_img img');
//                 let productTitle = this.closest('.product').querySelector('.product_text h4').textContent;
//                 let productPrice = this.closest('.product').querySelector('.product_text h3').textContent;

//                 let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//                 cartItems.push({
//                     image: productImage.src,
//                     title: productTitle,
//                     price: productPrice
//                 });
//                 localStorage.setItem('cartItems', JSON.stringify(cartItems));

//                 renderCart();
//             });
//         });

//         function renderCart() {
//             let tbody = document.querySelector("tbody");
//             tbody.innerHTML = ""; // Clear existing items

//             let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//             cartItems.forEach(item => {
//                 let tr = document.createElement("tr");
//                 tr.setAttribute("class", "cart_item");

//                 let td_1 = document.createElement("td");
//                 let img = document.createElement("img");
//                 img.src = item.image;
//                 img.setAttribute("class", "cart_image");
//                 td_1.append(img);

//                 let td_2 = document.createElement("td");
//                 td_2.setAttribute("class", "cart_title");
//                 td_2.innerHTML = item.title;

//                 let td_3 = document.createElement("td");
//                 td_3.setAttribute("class", "cart_price");
//                 td_3.innerHTML = item.price;

//                 let td_4 = document.createElement("td");
//                 let edit_btn = document.createElement("button");
//                 edit_btn.setAttribute("class", "edit_btn");
//                 edit_btn.innerHTML = "Edit";
//                 td_4.append(edit_btn);

//                 let td_5 = document.createElement("td");
//                 let delete_btn = document.createElement("button");
//                 delete_btn.setAttribute("class", "delete_btn");
//                 delete_btn.innerHTML = "Delete";
//                 delete_btn.addEventListener("click", function() {
//                     let index = cartItems.indexOf(item);
//                     if (index > -1) {
//                         cartItems.splice(index, 1);
//                         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//                         renderCart();
//                     }
//                 });
//                 td_5.append(delete_btn);

//                 td_1.setAttribute("class", "td");
//                 td_2.setAttribute("class", "td");
//                 td_3.setAttribute("class", "td");
//                 td_4.setAttribute("class", "td");
//                 td_5.setAttribute("class", "td");

//                 tr.append(td_1, td_2, td_3, td_4, td_5);
//                 tbody.append(tr);
//             });
//         }

//         // Render cart items on page load
//         renderCart();
//     })
//     .catch(error => {
//         console.error('Error fetching HTML:', error);
//     });
