/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
  'leia-me.txt': {
    file: {
      contents: `
      Bem-vindo ao Yoru.js - web terminal!

      Este é um terminal interativo baseado na web que suporta comandos em JavaScript. Ele foi criado para ser extensível e flexível, permitindo que você personalize sua experiência no terminal com suas próprias funções e scripts.
      
      Atualmente, estamos trabalhando em adicionar recursos como desenvolvimento de aplicativos em node.js, e estamos ansiosos para compartilhar com você em atualizações futuras.
      
      Obrigado por usar o Yoru.js! Se você tiver alguma dúvida ou sugestão, não hesite em nos contatar. Aproveite sua experiência no terminal!
      `,
    },
  },
  'hello-world.js': {
    file: {
      contents: `
     console.log("hello World 🌎")
      `,
    },
  },
  'utils': {
    directory: {
      'obter-data-e-hora.js': {
        file: {
          contents: `
          const dataAtual = new Date();
          console.log('Data e hora atual:', dataAtual.toLocaleString());
          `,
        },
      },
      'imprimir-argumento.js': {
        file: {
          contents:
            `
            const argumento = process.argv[2];
  
  if (argumento) {
    console.log('O usuário passou o argumento:', argumento);
  } else {
    console.log('O usuário não passou nenhum argumento.');
  }
            `,

        },

      },

    },

  },
  'api-express': {

    directory: {
      'server.js': {
        file: {
          contents: `import express from 'express';

          const app = express();
          const port = 3111;
          
          app.get('/', (req, res) => {
            res.send('Bem-vindo ao Yuro.js 🔥');
          });
          
          app.listen(port, () => {
            console.log(\`Server running on http://localhost:\${port}\`);
          });`,
        },
      },
      'package.json': {
        file: {
          contents: `{
            "name": "api-express",
            "type": "module",
            "dependencies": {
              "express": "latest",
              "nodemon": "latest"
            },
            "scripts": {
              "start": "nodemon --watch './' server.js"
            }
          }`,
        },
      },
    },
  },
};
