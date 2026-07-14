![Capa do jogo](img/1695944210662.png)

# 1923 • O Mistério do Pub

**1923 • O Mistério do Pub** é um GameBook interativo desenvolvido utilizando **HTML, CSS e JavaScript puro**.

O jogador acompanha a história de **Adam Lawrence**, um homem comum que, em uma manhã de domingo do ano de 1923, se depara com acontecimentos misteriosos envolvendo sua vizinha Isabella e uma sequência de eventos que podem mudar completamente seu destino.

A narrativa é construída no formato de uma aventura interativa, onde cada escolha conduz o jogador por diferentes caminhos, criando múltiplas possibilidades dentro da história.

---

## 🎮 Jogue

Acesse o jogo:

https://jazzysemolina.netlify.app/

---

## 🎬 Trailer

Assista ao trailer do projeto:

https://youtube.com/watch?v=syOUS7RAIds

---

## 🔀 Estrutura narrativa

A história possui uma estrutura de bifurcações, permitindo que o jogador escolha diferentes caminhos e descubra consequências variadas.

Mapa das possibilidades narrativas:

![Bifurcações](img/projectmapXmind.png)

Mapa completo:

https://xmind.ai/share/EtwQxTt2

---

## Tecnologias utilizadas

- **HTML5**  
  Estrutura das páginas e elementos da interface.

- **CSS3**  
  Estilização visual, organização dos elementos e ambientação do jogo.

- **JavaScript**  
  Responsável pela lógica do GameBook, controle das cenas narrativas, criação dinâmica dos botões, efeito de digitação e gerenciamento dos áudios.

---

## Funcionalidades

- Sistema de cenas narrativas dinâmicas;
- Escolhas interativas através de botões;
- Múltiplos caminhos narrativos;
- Alteração dinâmica de imagens de fundo;
- Narração em áudio para cenas específicas;
- Efeito de digitação no texto;
- Efeito sonoro ao selecionar opções.

---

## Organização do projeto

```text
1923-main/
│
├── index.html
│
├── css/
│   └── index.css
│
├── js/
│   └── index.js
│
├── img/
│   └── imagens utilizadas no jogo
│
├── audio/
│   └── trilhas e narrações
│
└── README.md
```

---

## Funcionamento

O conteúdo da história é armazenado em um objeto JavaScript chamado `historia`.

Cada cena possui:

- texto narrativo;
- ilustração de fundo;
- áudio de narração;
- opções disponíveis para o jogador.

Exemplo:

```javascript
paginaintroducao: {
    texto: "Em derradeiro de setembro de 1923...",
    imagemFundo: "img/1695940199833.jpg",
    audioNarracao: "audio/inicio-de-facto.mp3",
    opcoes: [
        {
            texto: "PROSSEGUIR",
            proximaPagina: "paginacidade"
        }
    ]
}
```

---

## Desenvolvimento

O projeto foi desenvolvido como uma aplicação web estática, sem utilização de frameworks ou bibliotecas externas. A proposta foi explorar os fundamentos da programação web:

- programação funcional;
- criação dinâmica de elementos;
- eventos de clique;
- controle de áudio;
- organização de dados em objetos JavaScript;
- lógica de navegação entre estados.

---

## Autor

**Roteiro** - W. Soares | **Revisão** - M. H. Melo