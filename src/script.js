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
