// PRODUCT SECTION


let shoppingCartCount;
let cartItems = [];

window.addEventListener('load', function () {
  shoppingCartCount = document.getElementById('cart-count');
  updateCartCount();
})

function updateCartCount() {
  shoppingCartCount.innerHTML = cartItems.length;
}

function clearCart() {
  cartItems.forEach((item) => {
    item[0].classList.remove('in-cart');
    item[0].classList.remove('selected');
    item[1].innerHTML = 'ADD TO CART';
  });
  cartItems = [];
  updateCartCount();
}

function purchase(item) {
  item.innerHTML = 'IN CART';
  let productCard = item.parentNode.parentNode.parentNode;
  if (!productCard.classList.contains('in-cart')) {
    productCard.classList.add('in-cart');
    cartItems.push([productCard, item]);
    updateCartCount();
  }
}

function selectProduct(product) {
  if (
    product.classList.contains('selected') &&
    !product.classList.contains('in-cart')
  ) {
    product.classList.remove('selected');
  } else {
    product.classList.add('selected');
  }
}

// BLOG SECTION

function onBlogClick(blog) {
  var blogDetails;
  blog.childNodes.forEach((child) => {
    if (child.id == 'details') {
      blogDetails = child;
    }
  });
  
  if (blog.classList.contains('opened')) {
    blog.classList.remove('opened');
    blogDetails.classList.remove('show-details');
  } else {
    blog.classList.add('opened');
    blogDetails.classList.add('show-details');
  }
  console.log(blogDetails);
}