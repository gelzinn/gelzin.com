export type TAbout = {
  name: string;
  username: string;
  email: string;
  business_email?: string;
  website: string;
  description: {
    'en-US': string;
    'pt-BR': string;
  };
  location: {
    'en-US': {
      city: string;
      state: string;
      country: string;
      full: string;
    };
    'pt-BR': {
      city: string;
      state: string;
      country: string;
      full: string;
    };
    google_maps: string;
  };
};

export const about: TAbout = {
  name: 'Marcelo Augusto',
  username: 'gelzin',
  email: 'gelzin.dzn@gmail.com',
  business_email: 'gelzin.com@gmail.com',
  website: 'https://gelzin.com',
  description: {
    'en-US':
      "I believe in the power of technology to solve problems and improve people's daily lives.",
    'pt-BR':
      'Acredito no poder da tecnologia para resolver problemas e aprimorar o dia a dia das pessoas.',
  },
  location: {
    'en-US': {
      city: 'Jaú',
      state: 'SP',
      country: 'Brazil',
      full: 'São Paulo, Brazil',
    },
    'pt-BR': {
      city: 'Jaú',
      state: 'SP',
      country: 'Brasil',
      full: 'São Paulo, Brasil',
    },
    google_maps: `https://www.google.com/maps/place/${encodeURIComponent(
      'Jaú, São Paulo, Brazil',
    )}`,
  },
};
