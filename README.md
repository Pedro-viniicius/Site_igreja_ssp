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

## Informações que ainda precisam ser preenchidas

Os campos abaixo usam **placeholders** no código. Substitua antes de publicar:

1. **WhatsApp oficial** — procure por `[INSERIR_NUMERO_OFICIAL]` em `index.html`
   e troque pelo número no formato internacional, ex.: `5535999999999`.
   Os links seguem o padrão `https://wa.me/5535999999999`.
2. **Logo em alta resolução** — o arquivo atual (`assets/logo.png`) é a imagem
   fornecida. Se houver uma versão em maior resolução ou sem fundo, substitua o
   arquivo mantendo o mesmo nome.
3. **Nomes dos pastores** — não foram incluídos para não inventar dados. Caso a
   igreja queira exibi-los, podem ser adicionados nas seções "Quem Somos" ou
   "Gabinete Pastoral".

## Conteúdo / fontes utilizadas

- Endereço, Instagram, YouTube e cores da identidade visual: dados oficiais
  fornecidos pela igreja.
- História presbiteriana e Confissão de Fé de Westminster: descrições
  educacionais, neutras e introdutórias.
- Nenhum telefone, nome de pastor ou fato histórico foi inventado.

## Cores da identidade

- Verde primário: `#0D5131`
- Branco: `#FFFFFF`
