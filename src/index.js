import "./styles.css";
const add = document.getElementById("submit-data");
add.addEventListener("click", getUsers);
async function getUsers() {
  const url = "https://api.tvmaze.com/search/shows?q=TV";
  const usersPromise = await fetch(url);
  const user = await usersPromise.json();
  for (var i = 0; i < 10; i++) {
    var d1 = document.createElement("div");
    d1.className = "show-data";
    var imgscr = user[i].show.image.medium;
    console.log(user[i].show.image.medium);
    let t = document.createElement("img");
    t.src = imgscr;
    let d = document.createElement("div");
    d.class = "show-info";
    d.innerHTML = "<h1>" + user[i].show.name + "<h1>" + user[i].show.summary;
    d1.appendChild(t);
    d1.appendChild(d);
    document.body.appendChild(d1);
  }
}
