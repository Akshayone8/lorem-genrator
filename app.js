const text = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recusandae ratione modi illum. Error officia pariatur facere alias perspiciatis consequatur fuga iste earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia laboriosam iure sunt rerum rem nostrum recu`

]

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.

  e.preventDefault();

  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);

  if (isNaN(value) || value < 0 || value > 9) {
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p class="result">${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
  }
});