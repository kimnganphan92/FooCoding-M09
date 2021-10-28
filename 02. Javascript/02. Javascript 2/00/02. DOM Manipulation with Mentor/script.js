const getElement = (id) => {
  const element = document.getElementById(id);
  return element;
};

const rootDiv = getElement("root");
const button = document.createElement("button");
const image = document.createElement("img");
image.src =
  "https://p4.wallpaperbetter.com/wallpaper/730/605/86/vaporwave-synthwave-retrowave-city-outrun-hd-wallpaper-preview.jpg";
// image.setAttribute(
//   "src",
//   "https://p4.wallpaperbetter.com/wallpaper/730/605/86/vaporwave-synthwave-retrowave-city-outrun-hd-wallpaper-preview.jpg"
// );

image.alt = "wallpaper";

image.style.width = "150px";
image.style.height = "150px";

button.innerText = "Sign up";

button.onmouseover = () => {
  button.style.backgroundColor = "red";
};
button.onmouseout = () => {
  button.style.backgroundColor = "green";
};


button.onclick = () => {
  const username = getElement("username").value;
  const password = getElement("password").value;
  const email = getElement("email").value;
  const usernameValue = getElement("user-name");
  const passValue = getElement("pass-value");
  const emailValue = getElement("email-value");

  usernameValue.innerHTML = "<b> Username: " + username + "</b>";
  passValue.innerHTML = "<b> Password: " + password + "</b>";
  emailValue.innerHTML = "<b> Email: " + email + "</b>";
};

rootDiv.append(image);
rootDiv.append(button);