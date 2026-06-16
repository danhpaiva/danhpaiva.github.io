/** @type {import('@lhci/cli').LhciConfig} */
module.exports = {
  ci: {
    collect: {
      // Roda contra o build estático local — sem depender de deploy externo
      staticDistDir: './dist',
      numberOfRuns: 2,
    },

    assert: {
      // 'error' → falha o CI   |   'warn' → avisa mas não bloqueia
      assertions: {
        // Acessibilidade e SEO são inegociáveis para um portfólio profissional
        'categories:accessibility':  ['error', { minScore: 0.9 }],
        'categories:seo':            ['error', { minScore: 0.9 }],

        // Performance e boas práticas viram warning — variações de rede não devem bloquear
        'categories:performance':    ['warn',  { minScore: 0.85 }],
        'categories:best-practices': ['warn',  { minScore: 0.9 }],
      },
    },

    upload: {
      // Gera link público com o relatório completo acessível direto no PR/push
      target: 'temporary-public-storage',
    },
  },
};
