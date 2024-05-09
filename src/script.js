const search = function () {
  const searchBox = document.getElementById("search-items").value.toUpperCase();
  const produkList = document.getElementById("produk-list");
  const produk = document.querySelectorAll(".produk");
  const pname = document.getElementsByTagName("h3");

  for (var i = 0; i < pname.length; i++) {
    let match = produk[i].getElementsByTagName("h3")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        produk[i].style.display = "";
      } else {
        produk[i].style.display = "none";
      }
    }
  }
};

window.addEventListener("DOMContentLoaded", function () {
  sortProductsAlphabetically();
});

const sortProductsAlphabetically = function () {
  const produkContainer = document.querySelector(".container");
  const produk = Array.from(document.querySelectorAll(".produk"));

  produk.sort((a, b) => {
    const nameA = a.querySelector("h3").textContent.toUpperCase();
    const nameB = b.querySelector("h3").textContent.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  // Kosongkan container
  produkContainer.innerHTML = "";

  // Pasang kembali produk yang telah diurutkan
  produk.forEach((item) => {
    produkContainer.appendChild(item);
  });
};

// Shortcut untuk button search
document.addEventListener("keydown", function (event) {
  if (event.altKey && event.key === "r") {
    document.querySelector(".searchBar input").focus();
  }
});
