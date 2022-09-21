import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid" style={{backgroundColor: '#1E8449'}}>
        <label className="navbar-brand">Loki Laufeyson</label>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="index.html" className="nav-link active" aria-current="page">Inicio</a>
            </li>
            <div className="btn-group">
              <button type="button" className="btn text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </button>
              <ul className="dropdown-menu">
                <li><label className="dropdown-item">Funkos</label></li>
                <li><label className="dropdown-item">Prendas</label></li>
                <li><label className="dropdown-item">Juegos</label></li>
                <li><hr class="dropdown-divider"/></li>
                <li><label className="dropdown-item">Blog</label></li>
              </ul>
            </div>
          </ul>
        </div>
        <span className="navbar-text">
          <CartWidget>
          </CartWidget>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;