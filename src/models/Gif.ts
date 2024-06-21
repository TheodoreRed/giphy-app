interface Original {
  url: string;
}

interface Images {
  original: Original;
}

export default interface Gif {
  url: string;
  id: string;
  title: string;
  images: Images;
}
