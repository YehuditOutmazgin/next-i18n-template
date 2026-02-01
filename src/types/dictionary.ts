export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    contact: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      cta: string;
    };
    features: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
  };
  about: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  common: {
    loading: string;
    error: string;
    notFound: string;
    backHome: string;
  };
  footer: {
    copyright: string;
    rights: string;
  };
}
