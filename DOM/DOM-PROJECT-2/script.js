const fetchApi = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    console.log("Error While Fetching!");
  }
  try {
    const data = await response.json();
    let ul = document.createElement("ul");
    ul.className = "products-list";
    document.body.append(ul);
    data?.products?.map((item, index) => {
      let li = document.createElement("li");
      li.className = index;
      li.textContent = item?.title;
      ul.append(li);
    });
  } catch (err) {
    console.log(err);
  }
};
fetchApi();
