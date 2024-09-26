export default function Home() {
  return (
    <div className="wrapper">
      <header>
        <img src="/logo.png" alt="Logo" className="logo" />
      </header>
      <form className="row g-3">
        <div className="col-auto" style={{ flex: 1 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Write your task here..."
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-dark mb-3">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
