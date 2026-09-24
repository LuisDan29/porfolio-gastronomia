import "./Hero.css"

function Hero() {
  return (
    <section>
      <div className="row pt-5">
        <div className="col-6 p-0 offset-1">
          <h1 className="hero-title display-1 text-primary">PORTFÓLIO<br/>GASTRO</h1>
        </div>  
        <div className="col-2 p-0 d-flex flex-column justify-content-end">
          <p className="text m-0 fs-5 text-primary">A GASTRONOMIA É A<br/>NOSSA ARTE.</p>
        </div>
      </div>
      <div className="row p-0">
        <div className="col-1 p-0 offset-7">
          <span class="material-symbols-outlined arrow-icon text-primary">arrow_outward</span>
        </div>
      </div>
      <div className="row bg-success"></div>
    </section>
  )
}

export default Hero;