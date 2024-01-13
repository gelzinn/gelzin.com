type TExperience = {
  company: string;
  position: string;
  website?: string;
  startDate: string;
  endDate?: string | null;
  modalities?: string[];
  summary: {
    'en-US': string;
    'pt-BR': string;
  };
  highlights?: {
    url: string;
    name: string;
    description: {
      'en-US': string;
      'pt-BR': string;
    };
  }[];
};

export const experiences: TExperience[] = [
  {
    company: 'Loopscape',
    position: 'Front-End Developer',
    website: 'https://loopscape.com.br',
    startDate: '2023-04-01T00:00:00',
    endDate: null,
    summary: {
      'en-US':
        "Developed the website for the company, using Next.js and Tailwind CSS. Worked with the team on the development of the company's products, such as the LoopVet platform.\nI also made some UI/UX prototypes for the company's products.",
      'pt-BR':
        'Desenvolvi o website da empresa, utilizando Next.js e Tailwind CSS. Trabalhei com a equipe no desenvolvimento dos produtos da empresa, como a plataforma LoopVet.\nTambém fiz alguns protótipos de UI/UX para os produtos da empresa.',
    },
    // highlights: [
    //   {
    //     url: "https://loopvet.com.br",
    //     name: "LoopVet",
    //     description: {
    //       "en-US": "LoopVet is a platform for veterinary clinics.",
    //       "pt-BR": "LoopVet é uma plataforma para clínicas veterinárias.",
    //     },
    //   },
    // ],
  },
  {
    company: 'C.A.Mundial',
    position: 'Front-End Developer',
    website: 'https://camundial.com.br',
    startDate: '2018-01-01T00:00:00',
    endDate: '2019-12-31T00:00:00',
    modalities: ['Remote'],
    summary: {
      'en-US':
        'Developed the website for the company, using React.js and Firebase. I also create some banners and other graphic materials for the company.',
      'pt-BR':
        'Desenvolvi o website da empresa, utilizando React.js e Firebase. Também criei alguns banners e outros materiais gráficos para a empresa.',
    },
  },
];
