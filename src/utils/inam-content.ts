export interface ResearchCenter {
  slug: string;
  acronym: string;
  name: string;
  coordinator: string;
  focus: string;
  mission: string;
  vision: string;
}

export interface ResearchGroup {
  slug: string;
  acronym: string;
  name: string;
  lead: string | null;
  summary: string;
}

export interface ResearchProject {
  group: string;
  shortName?: string;
  name: string;
  code: string;
}

export const CONTACT = {
  campus: 'Calle Higos Urco N.° 342–350–356',
  region: 'Chachapoyas, Amazonas, Perú',
  email: 'informes@untrm.edu.pe',
} as const;

export const RESEARCH_CENTERS: ResearchCenter[] = [
  {
    slug: 'biogev',
    acronym: 'BIOGEV',
    name: 'Centro de Investigación de Biotecnología y Genómica Vegetal',
    coordinator: 'Ph.D. Danilo E. Bustamante Mostajo',
    focus:
      'Biotecnología, genómica vegetal y ciencias ambientales y agrícolas aplicadas a la biodiversidad y al cambio climático.',
    mission:
      'Producir conocimiento científico riguroso, eficiente, ético y sostenible, con articulación nacional e internacional y utilidad para Amazonas y el Perú.',
    vision:
      'Consolidarse como centro referente en el uso de herramientas biotecnológicas para comprender y aprovechar la biodiversidad frente al cambio climático.',
  },
  {
    slug: 'ciebb',
    acronym: 'CIEBB',
    name: 'Centro de Investigación en Economía de la Biodiversidad y la Bioeconomía',
    coordinator: 'Dr. Erick Stevinsonn Arellanos Carrión',
    focus:
      'Economía de la biodiversidad, bioeconomía, conservación, uso sostenible y desarrollo territorial de la Amazonía.',
    mission:
      'Generar conocimiento y tecnología, integrando investigación, formación y transferencia para apoyar la conservación y el desarrollo territorial.',
    vision:
      'Posicionarse como referente nacional e internacional por su producción científica, formación de investigadores y contribución a decisiones sostenibles.',
  },
];

export const RESEARCH_GROUPS: ResearchGroup[] = [
  {
    slug: 'veb',
    acronym: 'VEB',
    name: 'Grupo de Investigación en Valoración Económica de la Biodiversidad',
    lead: 'Dr. Erick Stevinsonn Arellanos Carrión',
    summary:
      'Valoración económica ambiental, biodiversidad, servicios ecosistémicos y toma de decisiones para la gestión sostenible.',
  },
  {
    slug: 'bioeconomia',
    acronym: 'Bioeconomía',
    name: 'Grupo de Investigación en Bioeconomía',
    lead: null,
    summary:
      'Uso sostenible de biomasa para alimentos, energía y materiales, integrando ciencias biológicas y económicas en el nororiente del Perú.',
  },
  {
    slug: 'ambiotec',
    acronym: 'Ambiotec',
    name: 'Grupo de Investigación en Microbiología Ambiental y Desarrollo Biotecnológico',
    lead: 'Mg. Samia L. J. Fernández Güimac',
    summary:
      'Microbiología ambiental y biotecnología microbiana aplicadas a problemas ambientales, agrícolas e industriales.',
  },
  {
    slug: 'bioinsave',
    acronym: 'BioInSave',
    name: 'Grupo de Investigación en Bioinformática para la Conservación de la Biodiversidad',
    lead: 'Mg. Jhordy Perez Ocampo',
    summary:
      'Bioinformática, genómica, diversidad genética y estructura poblacional para conservar y valorizar la biodiversidad.',
  },
  {
    slug: 'microdynamix',
    acronym: 'MicroDynamiX',
    name: 'Grupo de Investigación en Dinámica Microbiana y ADN Ambiental',
    lead: 'Mg. Rosmery Yakelini Ayala Tocto',
    summary:
      'ADN ambiental, ecología microbiana, resiliencia de comunidades e indicadores para restauración y conservación.',
  },
  {
    slug: 'bioresic',
    acronym: 'BioResiC',
    name: 'Grupo de Investigación en Biotecnología para la Resiliencia al Cambio Climático',
    lead: 'Ph.D. Danilo E. Bustamante Mostajo',
    summary:
      'Biotecnología y organismos resilientes para mitigar efectos del cambio climático y fortalecer la seguridad alimentaria.',
  },
  {
    slug: 'biogen',
    acronym: 'BIOGEN',
    name: 'Grupo de Investigación Biodiversidad y Recursos Genéticos',
    lead: 'Ph.D. Martha S. Calderon Rios',
    summary:
      'Biodiversidad y recursos genéticos a escala de genes, especies y ecosistemas, con aplicaciones ambientales y agrícolas.',
  },
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  {
    group: 'Bioeconomía',
    shortName: 'CoffeeSmart',
    name: 'Uso de teledetección, inteligencia artificial y técnicas quimiométricas y sensoriales para monitorear y predecir la calidad de cafés especiales',
    code: 'PE501086357-2024',
  },
  {
    group: 'Ambiotec',
    shortName: 'METACODING',
    name: 'Dinámica de la microbiota asociada al fermento de café mediante cultivo iniciador, NGS, metabarcoding, RT-PCR multiplex y ddPCR',
    code: 'PE501083084-2023-PROCIENCIA',
  },
  {
    group: 'BioInSave',
    shortName: 'Diversidad genética de papas',
    name: 'Diversidad genética, estructura poblacional y singularidad genética de papas Solanum spp. en la región Amazonas',
    code: 'PE501089329-2024-PROCIENCIA-BM',
  },
  {
    group: 'MicroDynamiX',
    shortName: 'Microbioma de suelos incendiados',
    name: 'Dinámica temporal del microbioma resiliente de suelos incendiados de pastizales andinos del Perú',
    code: 'PE501088668-2024-PROCIENCIA',
  },
  {
    group: 'BioResiC',
    shortName: 'MiCroResi',
    name: 'Deciphering Microbiomes from Extreme Environments for the Improvement of Crop Resilience to Climate Change, Food Security and Safety',
    code: 'PE501079652-2022-PROCIENCIA',
  },
  {
    group: 'BIOGEN',
    shortName: 'Metacafé 2.0',
    name: 'Optimización de un cultivo iniciador para mejorar y estandarizar la calidad de cafés especiales en Amazonas y Cajamarca',
    code: 'PE501081184-2022-PROCIENCIA',
  },
  {
    group: 'BIOGEN',
    shortName: 'FitoAlga',
    name: 'Biofertilizantes basados en macroalgas marinas y su efecto en microbioma rizosférico y fisiología de hortalizas y frutales',
    code: 'PE501079919-2022-PROCIENCIA',
  },
];

export const projectCountForGroup = (acronym: string) =>
  RESEARCH_PROJECTS.filter((project) => project.group === acronym).length;
