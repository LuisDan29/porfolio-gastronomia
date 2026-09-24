import "./NewHero.css";

function NewHero() {
    return (
        <section className="hero-section">
            <div className="row">
                <div className="col pt-4 pb-5 px-0 d-flex justify-content-between">
                    <h1 className="hero-title display-1 text-primary text-start">PORTFÓLIO</h1>
                    <h1 className="hero-title display-1 text-primary text-end">GASTRO</h1>
                </div>
            </div>
            <div className="image-container row">
                <div className="col">
                    <div className="hero-image" />
                </div>
            </div>
        </section>
    )
}

export default NewHero;