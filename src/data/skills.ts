import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend & Frameworks',
    icon:     '⚙️',
    color:    'blue',
    skills: [
      { name: '.NET 10 / Core',   level: 95 },
      { name: 'ASP.NET Web API',  level: 95 },
      { name: 'C#',               level: 95 },
      { name: '.NET Aspire',      level: 75 },
      { name: 'TDD / Unit Testing', level: 90 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon:     '☁️',
    color:    'cyan',
    skills: [
      { name: 'AWS (S3, SES, Cognito)', level: 85 },
      { name: 'Azure / Azure DevOps',   level: 80 },
      { name: 'Docker / Swarmpit',      level: 90 },
      { name: 'CI/CD Pipelines',        level: 85 },
      { name: 'CloudFormation (IaC)',   level: 70 },
    ],
  },
  {
    category: 'Banco de Dados',
    icon:     '🗄️',
    color:    'green',
    skills: [
      { name: 'SQL Server',        level: 90 },
      { name: 'Dapper',            level: 90 },
      { name: 'MongoDB',           level: 75 },
      { name: 'Redis (Cache)',     level: 85 },
      { name: 'Flyway (Migrations)', level: 80 },
    ],
  },
  {
    category: 'Mensageria & Eventos',
    icon:     '📨',
    color:    'purple',
    skills: [
      { name: 'Apache Kafka',      level: 80 },
      { name: 'RabbitMQ',         level: 85 },
      { name: 'Event-Driven Design', level: 80 },
    ],
  },
  {
    category: 'Arquitetura & Qualidade',
    icon:     '🏗️',
    color:    'orange',
    skills: [
      { name: 'Microserviços',        level: 90 },
      { name: 'Clean Architecture',   level: 90 },
      { name: 'DDD',                  level: 85 },
      { name: 'SonarQube / Sonar',    level: 85 },
      { name: 'Serilog / Observabilidade', level: 80 },
    ],
  },
  {
    category: 'Ferramentas & Outros',
    icon:     '🛠️',
    color:    'blue',
    skills: [
      { name: 'Linux',                   level: 80 },
      { name: 'Portainer / Registry',    level: 75 },
      { name: 'SSH.NET / SFTP',          level: 75 },
      { name: 'Application Insights',    level: 80 },
      { name: 'Scrum / Kanban',          level: 90 },
    ],
  },
];

export const techBadges: string[] = [
  '.NET 10', 'C#', 'ASP.NET Core', 'Dapper', 'SQL Server', 'MongoDB',
  'Redis', 'Kafka', 'RabbitMQ', 'AWS', 'Azure', 'Docker', 'CI/CD',
  'TDD', 'DDD', 'Microservices', 'Serilog', 'Sonar', 'Linux', 'Scrum',
];
