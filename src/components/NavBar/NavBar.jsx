import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Reactivando</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Samsung</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Iphone</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Celulares</a></li>
                  <li><a className="dropdown-item" href="#">Tablets</a></li>
                  <li><a className="dropdown-item" href="#">Auriculares</a></li>
                  <li><a className="dropdown-item" href="#">Relojes</a></li>
                
                </ul>
              </li>
              <li class="cart-widget"><CartWidget /></li>
              
            </ul>
          </div>
        </div>
      </nav>   
    )
}

export default NavBar
//agregar el carrito de 