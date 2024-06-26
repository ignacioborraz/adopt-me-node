let query = location.search;
const params = new URLSearchParams(query);
const currentPage = Number(params.get("page")) || 1;

fetch("/api/users?page=" + currentPage)
  .then((res) => res.json())
  .then((res) => {
    //console.log(res);
    //console.log(res.payload.prev);
    //console.log(res.payload.next);
    const cards = res.payload?.users
      .map(
        (each) => `
      <article class="card mx-3 mb-3 d-flex position-relative" style="height: 280px; width: 340px">
        <img src="${
          each.avatar
        }" style="height: 100%; width: 100%" class="card-img-top object-fit-cover" alt="...">
        <div class="position-absolute bottom-0 end-0 d-flex flex-column justify-content-center align-items-center">
          <h5 style="width: 180px" class="btn btn-warning mb-0">${each.first_name.toUpperCase()} ${
          each.last_name ? each.last_name.toUpperCase() : ""
        }</h5>
        </div>
      </article>`
      )
      .join("");
    document.querySelector("section").innerHTML = cards;
    const buttons = `${
      res.payload?.prev &&
      `<a href="/pages/users.html?page=${res.payload.prev}" style="width: 106px" class="btn btn-warning mx-2 mt-1 mb-3">previous</a>`
    }${
      res.payload?.next &&
      `<a href="/pages/users.html?page=${res.payload.next}" style="width: 106px" class="btn btn-warning mx-2 mt-1 mb-3">next</a>`
    }`;
    document.querySelector("aside").innerHTML = buttons;
  });
