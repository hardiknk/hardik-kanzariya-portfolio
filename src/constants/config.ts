type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    phone: string;
    location: string;
    resumePath: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  availability: {
    status: string;
    workPreference: string;
    timezone: string;
    targetRole: string;
  };
  social: {
    linkedin: string;
    github: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    skills: TSection;
  };
};

const envValue = (value: string | undefined, fallback: string) => value?.trim() || fallback;

export const config: TConfig = {
  html: {
    title: 'Hardik Kanzariya | Laravel Developer',
    fullName: 'Hardik Kanzariya',
    email: 'kanzariyahardik8511@gmail.com',
    phone: '+91 7046130837',
    location: 'Botad, Gujarat, India',
    resumePath: './Hardik-Kanzariya-Resume.pdf',
  },
  hero: {
    name: 'Hardik Kanzariya',
    p: [
      'PHP / Laravel developer with 5+ years of experience',
      'building scalable web applications, APIs, and cloud solutions.',
    ],
  },
  availability: {
    status: envValue(import.meta.env.VITE_AVAILABILITY_STATUS, 'Available within 7 days'),
    workPreference: envValue(import.meta.env.VITE_WORK_PREFERENCE, 'Ahmedabad or remote'),
    timezone: envValue(import.meta.env.VITE_REMOTE_TIMEZONE, 'Flexible across time zones'),
    targetRole: envValue(import.meta.env.VITE_TARGET_ROLE, 'Senior Software Developer'),
  },
  social: {
    linkedin: envValue(
      import.meta.env.VITE_LINKEDIN_URL,
      'https://www.linkedin.com/in/kanzariyahardik'
    ),
    github: envValue(import.meta.env.VITE_GITHUB_URL, 'https://github.com/hardiknk'),
  },
  contact: {
    p: 'Let’s work together',
    h2: 'Start a conversation.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Professional summary',
      h2: 'Backend-focused. Business-ready.',
      content: `I build dependable PHP and Laravel products, from database-backed web applications and REST APIs to payment, real-time, and third-party integrations. My work spans backend optimization, application security, MySQL and SQL Server, and AWS services including S3, EC2, Route 53, and RDS. I collaborate comfortably with app, product, and cross-functional teams to ship maintainable solutions on time.`,
    },
    experience: {
      p: '5+ years in software development',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'Education, languages, and interests',
      h2: 'Beyond the code.',
    },
    works: {
      p: 'Selected professional work',
      h2: 'Project Case Studies.',
      content: `These anonymized case studies show how I approach backend architecture, application workflows, integrations, and team delivery. Client information, source code, screenshots, and live links remain confidential.`,
    },
    skills: {
      p: 'Tools I use to deliver',
      h2: 'Technical Skills.',
    },
  },
};
