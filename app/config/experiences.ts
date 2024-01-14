type TPosition = {
  title: string;
  startDate: string;
  endDate?: string | null;
  summary: {
    'en-US': string;
    'pt-BR': string;
  };
  modalities?: string[];
  highlights?: {
    url: string;
    name: string;
    description?: {
      'en-US': string;
      'pt-BR': string;
    };
  }[];
};

type TExperience = {
  company: string;
  website?: string;
  modalities?: string[];
  active: boolean;
  summary?: {
    'en-US': string;
    'pt-BR': string;
  };
  positions: TPosition[];
};

export const experiences: TExperience[] = [
  {
    company: 'Loopscape',
    website: 'https://loopscape.com.br',
    active: true,
    positions: [
      {
        title: 'Front-End Developer',
        startDate: '2023-06-15T00:00:00',
        endDate: null,
        summary: {
          'en-US':
            "Worked with the team on the development of the company's products, such as the Loopvet platform and built some new modules for the platform using React and Vite.",
          'pt-BR':
            'Trabalhei com a equipe no desenvolvimento dos produtos da empresa, como a plataforma Loopvet e construí alguns novos módulos para a plataforma usando React e Vite.',
        },
        highlights: [
          {
            url: 'https://aap.loopvet.com.br',
            name: 'Loopvet - Sistema para clínica veterinária e petshop.',
          },
        ],
      },
      {
        title: 'Front-End Developer - Internship',
        startDate: '2023-04-01T00:00:00',
        endDate: '2023-06-15T00:00:00',
        summary: {
          'en-US':
            'Developed the website for the company, using Next.js and Tailwind CSS. I also made some UI/UX prototypes for the company.',
          'pt-BR':
            'Criei algumas animações para cantores e bandas, como lyric videos e capas animadas...',
        },
        highlights: [
          {
            url: 'https://loopvet.com.br',
            name: 'Loopvet - Sistema para clínica veterinária e petshop.',
          },
          {
            url: 'https://loopscape.com.br',
            name: 'Loopscape - Empresa de desenvolvimento de software.',
          },
        ],
      },
    ],
  },
  {
    company: 'Freelancer',
    website: 'https://gelzin.com',
    active: true,
    modalities: ['Remote'],
    positions: [
      {
        title: 'Front-End Developer',
        startDate: '2021-01-01T00:00:00',
        endDate: null,
        summary: {
          'en-US':
            'I work as a freelancer for some companies, developing websites and web applications using React, Next.js, Tailwind CSS, etc.',
          'pt-BR':
            'Trabalho como freelancer para algumas empresas, desenvolvendo websites e aplicações web usando React, Next.js, Tailwind CSS, etc.',
        },
      },
      {
        title: 'Graphic Designer',
        startDate: '2016-01-01T00:00:00',
        endDate: '2023-06-30T00:00:00',
        summary: {
          'en-US':
            'I created some graphic designs for companies, such as logos, business cards, flyers, etc. Everything was made using Adobe Illustrator, Adobe Photoshop and more recently, in Figma.',
          'pt-BR':
            'Criei alguns designs gráficos para empresas, como logos, cartões de visita, flyers, etc. Tudo foi feito usando Adobe Illustrator, Adobe Photoshop e mais recentemente, no Figma.',
        },
      },
      {
        title: 'Motion Designer and Video Editor',
        startDate: '2020-08-01T00:00:00',
        endDate: '2023-06-30T00:00:00',
        summary: {
          'en-US':
            'I created some motion graphics for singers and bands, such as lyric videos and animated covers. Most of them were made for the brazilian market, so they are in portuguese.\nYou can check some of them on my YouTube channel. (@gelzinn_).',
          'pt-BR':
            'Criei algumas animações para cantores e bandas, como lyric videos e capas animadas. A maioria delas foi feita para o mercado brasileiro, então estão em português.\nVocê pode conferir algumas delas no meu canal do YouTube. (@gelzinn_).',
        },
      },
    ],
  },
  {
    company: 'C.A.Mundial',
    website: 'https://camundial.com.br',
    active: false,
    modalities: ['Remote'],
    positions: [
      {
        title: 'Front-End Developer',
        startDate: '2018-01-01T00:00:00',
        endDate: '2019-12-31T00:00:00',
        summary: {
          'en-US':
            'I created some graphic designs for companies, such as logos, business cards, flyers, etc. Everything was made using Adobe Illustrator, Adobe Photoshop and more recently, in Figma.',
          'pt-BR':
            'Criei alguns designs gráficos para empresas, como logos, cartões de visita, flyers, etc. Tudo foi feito usando Adobe Illustrator, Adobe Photoshop e mais recentemente, no Figma.',
        },
      },
    ],
  },
];
