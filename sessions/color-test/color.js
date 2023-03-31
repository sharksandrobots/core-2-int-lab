const myList = document.querySelector("ul");
const myRequest = new Request("color.json");

fetch(myRequest)
  .then((response) => response.json())
  .then((data) => {
	console.log(data);

    for (const color of data.colors) {
      const listItem = document.createElement("li");
      listItem.appendChild(document.createElement("strong")).textContent =
        color.Name;
      listItem.append(` has the following hex value ${color.Hexcode} `);
      listItem.appendChild(
        document.createElement("strong")
      ).style.background = `${color.Hexcode}`;
      myList.appendChild(listItem);      
    }

	console.log(data.colors[0].url);
  document.getElementById("links").innerHTML = (`<a href="${data.colors[2].url}">Color link</a>`);

  })
  .catch(console.error);
