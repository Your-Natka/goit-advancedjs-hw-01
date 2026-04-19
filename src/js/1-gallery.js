import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=300',
    original:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1200',
    description: 'Planning workspace',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300',
    original:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200',
    description: 'Laptop and coffee',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=300',
    original:
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=1200',
    description: 'Modern office',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=300',
    original:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200',
    description: 'Meeting room',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300',
    original:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200',
    description: 'Team presentation',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=300',
    original:
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200',
    description: 'Creative workplace',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300',
    original:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200',
    description: 'Office interior',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300',
    original:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200',
    description: 'Developers teamwork',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=300',
    original:
      'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=1200',
    description: 'Desktop workspace',
  },
];

const gallery = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');

gallery.innerHTML = markup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
