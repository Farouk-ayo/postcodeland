const allPostLinks = `SA99-1DU W1A-1AA SW1A-1AA WC2N-5DU LE87-2BB SL6-3QQ BD1-1AH WC2H-9JQ EC1V-2NX B61-7HA PO16-7GZ KY11-8ST BA3-4YF DY13-0NW L20-7YW WS13-8UR SR43-2SB SA99-1BT UB7-0LB SW1A-2AA PR3-1XB BT2-8HQ G51-1DA SW1W-0NY B15-2TE M9-5SD EH3-1GE PR25-9FR SA99-1YW SW1A-0AA AL10-9WN W1A-6US CV3-9SD SR5-9QY IG11-7RN LE87-2BB SL6-3QQ BD1-1AH WC2H-9JQ EC1V-2NX B61-7HA PO16-7GZ KY11-8ST BA3-4YF DY13-0NW L20-7YW WS13-8UR SR43-2SB SA99-1BT UB7-0LB SW1A-2AA PR3-1XB BT2-8HQ G51-1DA SW1W-0NY B15-2TE M9-5SD EH3-1GE PR25-9FR SA99-1YW SW1A-0AA AL10-9WN W1A-6US CV3-9SD SR5-9QY IG11-7RN CV3-9SD SR5-9QY IG11-7RN CV3-9SD SR5-9QY IG11-7RN CV3-9SD SR5-9QY IG11-7RN`;
const links = allPostLinks.split(" ");
const posts = document.querySelector(".all--posts");
const menu = document.querySelector(".menu");
const navMobile = document.querySelector(".nav--mobile");

console.log(links);

document.addEventListener("DOMContentLoaded", function (e) {
  links.forEach((item, key) => {
    const eachLink = document.createElement("li");
    eachLink.innerHTML = item;
    if (key <= 10) {
      eachLink.classList.add(`large--size`);
    } else if (key > 10 && key <= 20) {
      eachLink.classList.add(`medium--size`);
    } else if (key > 20 && key <= 75) {
      eachLink.classList.add(`small--size`);
    }
    eachLink.classList.add(`default--size`);

    posts.appendChild(eachLink);
  });
});

menu.addEventListener("click", function () {
  navMobile.classList.toggle("displayMenu");
});
