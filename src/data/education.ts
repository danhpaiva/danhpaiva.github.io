import type { EducationEntry } from './types';

export const education: EducationEntry[] = [
  {
    degree:      'Especialização',
    field:       'Inteligência Artificial',
    institution: 'Universidade Tecnológica Federal do Paraná',
    period:      'Jun 2026 – Dez 2027',
    level:       'Specialist',
    color:       'purple',
    icon:        '🤖',
    description: 'Especialização em Inteligência Artificial com foco em algoritmos de IA, machine learning e desenvolvimento com Python.',
    skills: [
      'Inteligência Artificial', 'Machine Learning', 'Python', 'Deep Learning',
      'Redes Neurais', 'Ciência de Dados',
    ],
  },
  {
    degree:      'Pós-Graduação',
    field:       'Arquitetura de Software Distribuído',
    institution: 'PUC Minas',
    period:      'Jul 2023 – Abr 2024',
    level:       'Specialist',
    color:       'blue',
    icon:        '🎓',
    description: 'Especialização focada em arquitetura de software distribuído, padrões modernos de design de sistemas e infraestrutura cloud-native.',
    skills: [
      'Arquitetura de Software', 'Microsserviços', 'Sistemas Distribuídos',
      'Design Patterns', 'Cloud Native', 'DevOps', 'API Design', 'DDD', 'CQRS',
    ],
  },
  {
    degree:      'Tecnólogo',
    field:       'Análise e Desenvolvimento de Sistemas',
    institution: 'Centro Universitário Una',
    period:      'Jul 2019 – Dez 2021',
    level:       'Bacharel Tecnológico',
    color:       'cyan',
    icon:        '💻',
    description: 'Formação sólida em desenvolvimento de sistemas, algoritmos, estruturas de dados e engenharia de software.',
    skills: [
      'Microsserviços', 'Desenvolvimento de Software', 'Banco de Dados', 'Engenharia de Software',
    ],
  },
];
