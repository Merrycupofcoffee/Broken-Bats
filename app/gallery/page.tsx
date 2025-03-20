import Image from 'next/image';

export default function Gallery() {
  return (
    <main className="gallery-container">
      {/* Gallery Header */}
      <h1 className="gallery-header">Gallery</h1>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {/* Add images to the grid */}
        <div className="gallery-item">
          <Image src="/bb1.jpg" alt="Image 1" width={300} height={200} className="gallery-image" />
        </div>
        <div className="gallery-item">
          <Image src="/bb2.jpg" alt="Image 2" width={300} height={200} className="gallery-image" />
        </div>
        <div className="gallery-item">
          <Image src="/bb4.jpg" alt="Image 3" width={300} height={200} className="gallery-image" />
        </div>
        <div className="gallery-item">
          <Image src="/bb5.jpg" alt="Image 4" width={300} height={200} className="gallery-image" />
        </div>
        {/* Add more images as needed */}
      </div>
    </main>
  );
}
