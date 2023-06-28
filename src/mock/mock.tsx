function mock() {
  return [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/jaocordeiro.png',
        name: 'Joao Vitor',
        role: 'Front-end Developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera' },
        { type: 'paragraph', content: 'Acabei de postar um novo artigo, espero que gostem, estudei e me apliquei muito no mesmo. vlw' },
        { type: 'link', content: 'site.dev/jaocordeiro' },
      ],
      publishedAt: new Date('2023-06-27 20:28:39')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/Gabriel-Mori.png',
        name: 'Gabriel Mori',
        role: 'Desenvolvedor Front-end'
      },
      content: [
        { type: 'paragraph', content: 'Boa noite rede' },
        { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit accusamus illum libero eaque officia! Aperiam quos ex qui illo, natus dolor est? Architecto repellendus totam perspiciatis nemo molestiae sunt aspernatur?' },
        { type: 'link', content: 'site.dev/gabrielmori' },
      ],
      publishedAt: new Date('2023-06-23 15:03:21')
    }
  ]
}

export default mock;