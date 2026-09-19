// Site configuration
export const SITE = {
  title: 'INAM | Instituto de Investigación en Ingeniería Ambiental',
  description: 'Investigación en biodiversidad, biotecnología y bioeconomía desde Amazonas.',
  url: 'https://untrm.edu.pe/instituto-de-investigacion/?slug=instituto-de-investigacion-en-ingenieria-ambiental-inam',
  author: 'INAM - UNTRM',
} as const;

export const NAVIGATION = [
  { name: 'Inicio', href: '/' },
  { name: 'Organización', href: '/organizacion' },
  { name: 'Centros', href: '/centros-investigacion' },
  { name: 'Grupos', href: '/grupos-investigacion' },
  { name: 'Publicaciones y proyectos', href: '/publicaciones' },
] as const;
