import "./Hero.css"

function Hero() {
  return (
    <section>
      <div className="row pt-5">
        <div className="col-6 p-0 offset-1">
          <h1 className="hero-title display-1 text-primary">PORTFÓLIO<br/>GASTRO</h1>
        </div>  
        <div className="col-2 p-0 d-flex flex-column justify-content-end">
          <p className="text1 m-0 fs-5 text-primary">A GASTRONOMIA É A<br/>NOSSA ARTE.</p>
        </div>
      </div>
      <div className="row p-0">
        <div className="col-1 p-0 offset-7">
          <span className="material-symbols-outlined arrow-icon1 text-primary">arrow_outward</span>
        </div>
      </div>
      <div className="row">
        <div className="col-8 p-0 offset-2 d-flex flex-row align-items-end">
          <p className="text2 m-0 fs-2 text-primary">CONHEÇA NOSSO<br/>TRABALHO.</p>
          <span className="material-symbols-outlined ms-5 arrow-icon2 text-primary">arrow_outward</span>
        </div>
        <div className="col-2 p-0">
          <div className="hero-image1" />
        </div>
      </div>
      <div className="row">
        <div className="col-4 offset-5 pt-5 px-5">
          <div className="hero-image2 p-0"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero;