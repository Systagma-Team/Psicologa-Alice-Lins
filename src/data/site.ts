/**
 * Dados profissionais e de contato — fonte única.
 * Só entram aqui dados confirmados (client-profile/ ou informados pelo cliente).
 * O que ainda depende da Alice fica marcado como pendente (docs/PENDING.md).
 */
export const site = {
  name: 'Alice Lins',
  fullName: 'Alice Lins Mendes Barreto',
  role: 'Psicóloga',
  crp: 'CRP 17/9333',
  approach: 'Fenomenologia-existencial',
  education: { degree: 'Psicologia', institution: 'UFRN', campus: 'Natal' },
  tagline: 'Psicologia ancorada pela fenomenologia-existencial.',
  description:
    'Alice Lins, psicóloga (CRP 17/9333), formada pela UFRN. Um espaço de escuta, presença e acolhimento a partir da fenomenologia-existencial.',

  contact: {
    whatsapp: {
      // Informado como "+55 84 9707-1178"; o 9º dígito foi acrescentado após o DDD por orientação do cliente.
      display: '+55 84 99707-1178',
      e164: '5584997071178',
      message: 'Olá, Alice! Vim pelo seu site e gostaria de conversar.',
    },
    email: 'alicelins@gmail.com',
    instagram: {
      handle: '@psialicelins',
      url: 'https://www.instagram.com/psialicelins',
    },
  },

  /**
   * Seções cujo conteúdo ainda depende de confirmação da Alice
   * (como funciona o primeiro contato, modalidades). Com `false`,
   * elas somem da página — usar `false` para publicar enquanto pendentes.
   */
  showDraftSections: true,
} as const;

export const whatsappUrl = `https://wa.me/${site.contact.whatsapp.e164}?text=${encodeURIComponent(
  site.contact.whatsapp.message,
)}`;

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Símbolo', href: '#simbolo' },
  { label: 'Dúvidas', href: '#duvidas' },
] as const;
