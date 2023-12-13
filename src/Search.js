import "./index.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <form id="search-form">
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Search city..."
                class="form-control"
                id="search-input"
                autocomplete="off"
              />
            </div>
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="btn w-100 btnSearch"
                id="search-btn"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
