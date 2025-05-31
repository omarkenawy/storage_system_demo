
var productNameInput = document.getElementById("ProductName");
var productPriceInput = document.getElementById("ProductPrice");
var productCategoryInput = document.getElementById("ProductCategory");
var productDescInput = document.getElementById("ProductDesc");
var productImageInput = document.getElementById("ProductImage");
var rowData = document.getElementById("rowData");
var addBttn = document.getElementById('addBttn');
var updatebttn = document.getElementById('updateBttn');
var productList;
var currentEditIndex;

if (localStorage.getItem('product') != null) {
    var productList = JSON.parse(localStorage.getItem("product"));
    displayProduct();
} else {
    productList = [];
}
// var productList = [];
function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
        image: "images/" + productImageInput.files[0]?.name,
    }
    productList.push(product);
    localStorage.setItem("product", JSON.stringify(productList));
    alert(" ✅ Product has been added successfully!");
    clearForm();
    displayProduct();
}

function clearForm() {
    productNameInput.value = null;
    productPriceInput.value = null;
    productCategoryInput.value = null;
    productDescInput.value = null;
    productNameInput.value = null;
}

function displayProduct() {
    var cartoona = '';

    for (var i = 0; i < productList.length; i++) {
        cartoona += `<div class="col-lg-3">
                <div class="card" style="width: 18rem;">
                    <img src="${productList[i].image}"
                        alt="product-image">
                    <div class="card-body">
                        <h5 class="card-title">${productList[i].name}</h5>
                        <p class="card-text">${productList[i].desc}</p>
                        <p class="fs-5"><span class="fw-bold h5">Category: </span>${productList[i].category} </p>
                        <p class="fs-5"><span class="fw-bold h5">Price: </span>${productList[i].price} EGP</p>
                         <button type="button" onclick="deleteProduct(${i})" class="btn btn-danger me-3">Delete</button>
                         <button type="button" onclick="setForm(${i})" class="btn btn-success mx-auto">Update</button>
                    </div>
                </div>
            </div>`
    }
    rowData.innerHTML = cartoona;
}

function deleteProduct(deletedNumber) {
    alert("⚠️ Are you sure that you want to delete this item?");
    productList.splice(deletedNumber, 1)
    console.log(productList);
    displayProduct();
    localStorage.setItem("product", JSON.stringify(productList))
}
function setForm(updatedNumber) {
    productNameInput.value = productList[updatedNumber].name;
    productPriceInput.value = productList[updatedNumber].price;
    productCategoryInput.value = productList[updatedNumber].category;
    productDescInput.value = productList[updatedNumber].desc;

    currentEditIndex = updatedNumber;
    addBttn.classList.add('d-none');
    updatebttn.classList.remove('d-none');
}

function updateProduct() {
    productList[currentEditIndex] = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value,
        image: "images/" + productImageInput.files[0]?.name,
    }
    localStorage.setItem("Product", JSON.stringify(productList));
    console.log(productList);

    displayProduct();
    clearForm();


    localStorage.setItem("product", JSON.stringify(productList));
    updatebttn.classList.add('d-none');
    addBttn.classList.remove('d-none');
    alert(" ✅ Product has been updated successfully!");
}


