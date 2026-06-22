# Igreja Presbiteriana Central de São Sebastião do Paraíso — Website

Site institucional estático, moderno, minimalista, responsivo e acessível.
Construído com HTML, CSS e JavaScript puros — sem build step.

## Estrutura

```
site/
├── index.html        # Página única com todas as seções
├── css/
│   └── styles.css    # Estilos (CSS variables, mobile-first, responsivo)
├── js/
│   └── main.js       # Menu mobile + ano automático no rodapé
├── assets/
│   └── logo.png      # Logo da Igreja Presbiteriana do Brasil
└── README.md
```

## Como abrir / testar

Basta abrir o arquivo `index.html` no navegador:

- Dê um duplo clique em `site/index.html`, **ou**
- Sirva localmente (recomendado para testar):

  ```bash
  cd site
  python3 -m http.server 8000
  # acesse http://localhost:8000
  ```

> As fontes (Google Fonts) carregam pela internet. Sem conexão, o site usa
> automaticamente fontes do sistema como alternativa.

## WhatsApp configurado

O número oficial informado foi `(35) 9 8898-5464`, usado nos links no formato
internacional: `https://wa.me/5535988985464`.

> ⚠️ **Confirme o número antes de divulgar.** O número fornecido tinha 8 dígitos
> na parte local; assumimos que se trata de um celular e adicionamos o `9` inicial
> (padrão exigido pelo WhatsApp). Para alterar, substitua `5535988985464` em todos
> os links `https://wa.me/...` de `index.html` e no campo `telephone` do JSON-LD.
> Há um comentário no topo do `<body>` indicando exatamente onde alterar.

## Informações que ainda precisam ser preenchidas

1. **Confirmação do WhatsApp** — validar se `5535988985464` está correto (ver acima).
2. **Logo em alta resolução** — o arquivo atual (`assets/logo.png`) é a imagem
   fornecida. Se houver uma versão em maior resolução ou sem fundo, substitua o
   arquivo mantendo o mesmo nome.
3. **Nomes dos pastores** — não foram incluídos para não inventar dados. Caso a
   igreja queira exibi-los, podem ser adicionados nas seções "Quem Somos" ou
   "Gabinete Pastoral".
4. **Fotos reais da comunidade** — não há imagens reais no projeto além do logo.
   Quando disponíveis, podem ser usadas no hero ou em uma seção "Nossa comunidade".

## Conteúdo / fontes utilizadas

- Endereço, Instagram, YouTube e cores da identidade visual: dados oficiais
  fornecidos pela igreja.
- História presbiteriana e Confissão de Fé de Westminster: descrições
  educacionais, neutras e introdutórias.
- Nenhum telefone, nome de pastor ou fato histórico foi inventado.

## Cores da identidade

- Verde primário: `#0D5131`
- Branco: `#FFFFFF`
