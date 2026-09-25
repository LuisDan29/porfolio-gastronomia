import "./ImageGallery.css";

interface GalleryImages {
  id: number;
  src: string;
}

interface Gallery {
  id: number;
  title: string;
  images: GalleryImages[];
}

interface ImageGalleryProps {
  gallery: Gallery;
}

function ImageGallery({ gallery }: ImageGalleryProps) {
  return (
    <section className="gallery-section py-5">
      <div className="row">
        <div className="col pt-5 ps-5">
          <p className="gallery-title fs-3 text-primary">{gallery.title}</p>
        </div>
      </div>
      <div className="gallery px-5 py-0">
        {gallery.images.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img src={image.src} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ImageGallery;