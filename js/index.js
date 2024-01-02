// esta é a parte funcional, ou seja, o "script" em JavaScript, engraçado que até o coisinha de comentar já muda de "<-- -->" para "//"
const historia = {// criando uma constante, chamada historia para armazenar o conteúdo de cada "página" do GameBook
    
    paginainicial: {
        texto: " ",
        imagemFundo: "",
        opcoes: [{texto: "1923 • O MISTÉRIO DO PUB ", proximaPagina: "pagina0_0"}]
    },

    // história I - a seguir as páginas da primeira história - o mistério do pub

    pagina0_0: // esta parte definirá o conteúdo presente em cada etapa "página" do jogo, no caso, "página 0_0" será a interface inicial.
    {          // note que "pagina 0_0" foi nomeada com _ para não comprometer o reconhecimento pelo editor
        imagemFundo: "img/1695944210662.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1vuLgF3ts0ad6LBeFSc_g9I7TAvDeQ_aO",
        opcoes: [ // lembra que "opcoes" já foi visto anteriormente no HTML? posteriormente veremos também a sua definição em JS
            {     // aqui, dentro das chaves, cada opção terá um texto, visível no quadradinho, e "página" referenete a ele
                texto: "START",    // eis aqui o texto do enunciado, que no caso, é a opção que será utilizada para iniciar a jogada, ou seja, levar para a interface
                proximaPagina: "paginacapa"   // e aqui, a página que ele buscará
            },
            {
                texto: "MENU",
                proximaPagina: "paginainicial"
            }       
        ]
    },
    paginacapa:
    {
        texto: '"Achamos que somos livres, mas não somos, seguimos sempre o mesmo caminho."',
        imagemFundo: "img/1695914779418.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1IBuP3qrvArGylqPASH0-f9sn2YN65rFZ",
        opcoes: [
            {
                texto: "INICIAR JORNADA",
                proximaPagina: "paginaintroducao"
            }
        ]
    },
    paginaintroducao: { // nessa página, 1_0, já haverá mais de uma opção
        texto: "Em derradeiro de setembro de 1923, na manhã daquele domingo nublado, depois de tomar um café na padaria da esquina e ler o seu jornal matinal, Adam estava caminhando para casa intrigado com a notícia dos arrombamentos recentes.",
        imagemFundo: "img/1695940199833.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1GFEmtZl5Sp2ohbPFUQN8R2uz0rWVMVEC",
        opcoes: [
            {
                texto: "PROSSEGUIR",
                proximaPagina: "paginacidade"
            }, // naturalmente as opções são separadas aqui com o uso de vírgulas ","
            {
                texto: "VOLTAR À PADARIA", // aqui, por exemplo, o texto traz uma possibilidade para o jogador curioso
                proximaPagina: "paginapadaria"
            },
            {
                texto: "JÁ ME ENCHEU O SACO", // nessa opção, por exemplo, o texto traz uma possibilidade de enredo imprevisível, para surpreender o jogador
                proximaPagina: "paginachorar"
            }
        ]
    },
    paginachorar: {
        imagemFundo: "img/1695965488200.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1XVsQHD8u7NECskF-rC7jDifUzuhknk22",
        opcoes: [
            {
                texto: "ENXUGAR LÁGRIMAS",
                proximaPagina: "paginaintroducao"
            },
            {
                texto: "IR CHORAR DE CÓCORAS NO BANHEIRO",
                proximaPagina: "paginaperdedor"
            }
        ]
    },
    paginacidade: {
        texto: "A movimentada cidade em que residia, onde normalmente ninguém se importaria com as singularidades de transeuntes aleatórios, era o cenário perfeito para quem deseja passar despercebido.",
        imagemFundo: "img/1695914522582.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1gik7PDY_QyowWUyWj1VMPqJWqYpeLkDe",
        opcoes: [
            {
                texto: "PROSSEGUIR",
                proximaPagina: "paginajanela"
            }
        ]
    },
    paginapadaria: {
        texto: "Você já tomou café! Não há mais nada interessante a se fazer por aqui!",
        imagemFundo: "img/1695915249171.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1AUCS2rEvg_YEgEPPKPM5r_K9zHuO7oPi",
        opcoes: [
            {
                texto: "SAIR DA PADARIA",
                proximaPagina: "paginacidade"
            },
            {
                texto: "TOMAR OUTRO CAFÉ",
                proximaPagina: "paginamortecafe"
            },
            {
                texto: "JOGO ENFADONHO",
                proximaPagina: "paginalamuria"
            }
        ]
    },
    paginalamuria: {
        texto: "LAMÚRIA: Substantivo feminino, lamentação interminável, que importuna e que a nada leva; queixume, queixa. Semelhantes: lamentação, lenga-lenga, alarida...",
        imagemFundo: "img/1695857292156.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1voegEdvtBsoWk0N2stzhhAZXN3Tq1P-2",
        opcoes: [
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "VOLTAR AO JOGO",
                proximaPagina: "paginapadaria"
            }
        ]
    },
    paginajanela: {
        texto: "Adam Lawrence, costumava se fechar completamente para as possibilidades do mundo alheias à sua rotina, entretanto, era domingo, e ele percebeu um rapaz saindo pela janela do apartamento de sua vizinha, Isabella.",
        imagemFundo: "img/1695913322388.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1XHurrLU9_htxlxCijoUOOd7XdrA-D1xb",
        opcoes: [
            {
                texto: "SEGUIR SUSPEITO",
                proximaPagina: "paginaperseguir"
            },
            {
                texto: "ARREMESSAR UMA PEDRA",
                proximaPagina: "paginapedrada"
            },
            {
                texto: "IGNORAR O SUSPEITO E VOLTAR PARA CASA",
                proximaPagina: "paginarollsroyce"
            }
        ]
    },        
    paginamortecafe: {
        texto: "Testemunhas relataram às autoridades, o comportamento frenético e alucinado de Adam que enfartou ao ingerir quantidades inacreditáveis do líquido preto. R.I.P.",
        imagemFundo: "img/1696206485223.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1p2G6FtMseJ1xw0ct5BxwmpldOFuuWjNX",
        opcoes: [
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "paginainicial"
            }
        ]
    },
    paginalcoolatra: {
        texto: "Testemunhas relataram às autoridades, o comportamento frenético e alucinado de Adam que enfartou ao ingerir quantidades inacreditáveis de álcool. R.I.P.",
        imagemFundo: "img/1696341316245.jpg",
        audioNarracao: "https://drive.google.com/uc?id=17Lp8c-Oap8FLidshpVML6anPo7ClXwJr",
        opcoes: [
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "paginainicial"
            }
        ]
    },
    paginaperseguir: {
        texto: "Despretensiosamente, Adam resolve seguir o sujeito até um pub.",
        imagemFundo: "img/1695912713682.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1o23ZyOb4KsRrlbeiipE56Al75iY9hvFg",
        opcoes: [
            {
                texto: "PROSSEGUIR",
                proximaPagina: "paginadecisaopub"
            }
        ]
    },        
    paginadecisaopub: {    
        texto: "Ao chegar no pub da esquina, Adam se depara com uma surpreendente coincidência: Michelle, sua colega do escritório, também estava lá.",
        imagemFundo: "img/1695917266664.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1JQrDEJvecC7jiYOoAfm-QJ_iP2Djlve-",
        opcoes: [
            {
                texto: "CONTINUAR SEGUINDO O SUSPEITO",
                proximaPagina: "paginaaproximacao"
            },
            {
                texto: "FALAR COM MICHELLE",
                proximaPagina: "paginaconversamichelle"
            },
            {
                texto: "IGNORAR MICHELLE E O SUSPEITO",
                proximaPagina: "paginaficarpub"
            }
        ]
    },
    paginaficarpub: {
        texto: "Não há nada mais a se fazer por aqui !",
        imagemFundo: "img/1695912911360.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1vLFRqImv1itgdLiDdJWPSj3Y9Ek8h-st",
        opcoes: [
            {
                texto: "HÁ SIM! FICAR NO PUB BEBENDO",
                proximaPagina: "paginalcoolatra"
            },
            {
                texto: "IR PARA CASA",
                proximaPagina: "paginarollsroyce"
            },
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            { texto: "SAIR DO JOGO",
            proximaPagina: "paginainicial"

            }
        ]
    },
    paginarollsroyce: {
        texto: "Adam se apressou demais para prosseguir o seu percuso solitário e não percebeu quando um luxuoso Rolls-Royce Silver Ghost 1907 o acertou em cheio! R.I.P.",
        imagemFundo: "img/1695947537750.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1yV93djm623JcwO7Zjk5-XzqaGsxkqQCq",
        opcoes: [
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "paginainicial"
            }
        ]
    },
    paginadesculpa: {
        texto: "Adam tentou se desculpar, mas as desculpas não foram aceitas e as autoridades foram acionadas. Trágico fim! Adam foi institucionalizado.",
        imagemFundo: "img/1695913198641.jpg",
        audioNarracao: "https://drive.google.com/uc?id=12bnps8v5BssumBju38RqbsCP5Cd7q0vD",
        opcoes: [
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "paginainicial"
            }
        ]
    },
    paginapedrada: {
        texto: "Adam, se enfureceu ao ponto de atingir o suspeito com uma pedra. Estranhamente, Isabella, sua vizinha, correu para socorrer o suposto invasor que na verdade era um caso extraconjugal.",
        imagemFundo: "img/1695913441959.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1eD1XvWf3rzYG_4X6Kt1FJ7-adK-EbSzL",
        opcoes: [
            {
                texto: "SE DESCULPAR",
                proximaPagina: "paginadesculpa"
            },
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "DESISTIR",
                proximaPagina: "paginaperdedor"
            }
        ]
    },
    paginaconversamichelle: {
        texto: "Conversando com Michelle, Adam percebe que ela está realmente interessada nos casos de invasões domiciliares. Ela relata o temor de que a cidade fique perigosa com a imigração. Adam comenta sobre o assunto e menciona o que acabou de ver na janela do apartamento de sua vizinha, Isabella. Michelle fica empolgada e sugere que eles explorem mais a situação, talvez conversando com Isabella ou investigando sua vizinhança para entender melhor os acontecimentos recentes.",
        imagemFundo: "img/1696197189659.jpg",
        audioNarracao: "https://drive.google.com/uc?id=10jICZ0Yuqdeg7x-L4EMe3BvA8XQ3vTbX",
        opcoes: [
            {
                texto: "ACOMPANHAR MICHELLE",
                proximaPagina: "paginadetetives"
            },
            {
                texto: "SAIR DO PUB SOZINHO, SEM MICHELLE",
                proximaPagina: "paginarollsroyce"
            }
        ]
    },
    paginaaproximacao: {
        texto: "Adam se aproxima para obter mais informações e, em um momento inesperado, acaba se envolvendo em um confronto com o invasor. As coisas podem ficar perigosas, e Adam terá que tomar decisões rápidas para lidar com a situação.",
        imagemFundo: "img/1696304104865.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1j9hXLqDExNmjDHTbDUzI0BTa9sRyJhU9",
        opcoes: [
            {
                texto: "PRENDER O SUSPEITO",
                proximaPagina: "paginaprender"
            },
            {
                texto: "FAZER ACORDO COM O SUSPEITO",
                proximaPagina: "paginacordo"
            },
            {
                texto: "DEIXAR O SUSPEITO ESCAPAR",
                proximaPagina: "paginafuga"
            },
            {
                texto: "INTIMIDAR O SUSPEITO",
                proximaPagina: "paginareputacao"
            }
        ]
    },   
    paginadetetives: {
        texto: "A dupla de detetives amadores, Michelle e Adam, decidem iniciar suas investigações, mergulhando no mistério que envolve o suspeito e o que está acontecendo com Isabella. Eles suspeitam que há segredos ocultos a serem descobertos e estão determinados a descobrir a verdade, mesmo que isso os leve a lugares obscuros e perigosos na cidade.",
        imagemFundo: "img/1696300868578.jpg",
        audioNarracao: "https://drive.google.com/uc?id=15LDawKUFARoKAJ-3bxxPBzuYKPqPmkXK",
        opcoes: [
            {
                texto: "PROSSEGUIR COM MICHELLE",
                proximaPagina: "paginaisabella"
            },
            {
                texto: "TOMAR CACHAÇA NO PUB",
                proximaPagina: "paginalcoolatra"
            },
            {
                texto: "SAIR POR AÍ",
                proximaPagina: "paginarollsroyce"
            }
        ]
    },
    paginaisabella: {
        texto: "Michelle e Adam decidem procurar Isabella para esclarecer a situação e obter mais informações. Ao se aproximarem dela com cautela, Isabella começa a revelar gradualmente os segredos que ela estava escondendo, levando-os a perceber que há um conflito oculto acontecendo nos bastidores, do qual ela é parte fundamental.",
        imagemFundo: "img/1696368591573.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1x2RGGypIXhKRBM1Mp4eH9z5DrqR8rQP-",
        opcoes: [
            {
                texto: "ADAM X ISABELLA",
                proximaPagina: "paginadella"
            },
            {
                texto: "MICHELLE X ISABELLA",
                proximaPagina: "paginamichella"
            }
        ]
    },
    paginaprender: {
        texto: "Adam, após o confronto, decide entregar o suspeito às autoridades. O invasor é preso preventivamente, mas Adam continua ignorante sobre sua verdadeira identidade. A polícia agradece a colaboração de Adam e promete investigar o caso com seriedade.",
        imagemFundo: "img/1696300338954.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1mw9GAym7HhapvC7Z-E8U0Z_1-8yfGGF-",
        opcoes: [
            {
            texto: "NOVA JORNADA",
            proximaPagina: "pagina0_0"
            },
            {
                texto: " SAIR DO JOGO   ",
                proximaPagina: "paginainicial"
            }
        ]
    },
    paginacordo: {
        texto: "Em vez de entregá-lo à polícia, Adam decide fazer um acordo com o suspeito, negociando informações em troca de sua liberdade. O suspeito concorda em revelar detalhes sobre sua relação extraconjugal com Isabella e suas atividades suspeitas.",
        imagemFundo: "img/1696306816603.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1HYYmcbiAj8qimqD0ISPGP3jtK0wVydKk",
        opcoes: [
            {
                texto: "CAIR NO PAPINHO",
                proximaPagina: "paginafuienganado"
            },
            {
                texto: "CAIR MATANDO",
                proximaPagina: "paginaespancar"
            }
        ]
    },
    paginafuga: {
        texto: "Adam, em um momento de dúvida, permite que o suspeito fuja do confronto. O suspeito desaparece na escuridão, deixando Adam com mais perguntas do que respostas.",
        imagemFundo: "img/1696306422063.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1_s2E2FRxSmmncp71mrW71rJsQEkamJhb",
        opcoes: [
            {
                texto: "DESISTIR DA INVESTIGAÇÃO",
                proximaPagina: "paginaperdedor"
            },
            {
                texto: "FAZER ALGO MAIS INTERESSANTE",
                proximaPagina: "paginaescape"
            }
        ]
    },
    paginaperdedor: {
        imagemFundo: "img/1695966060027.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1F1gaBu8Xx5QX-3OpKNxDpcpA18wHcuG1",
        opcoes: [
            {
                texto: "REINICIAR JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "CONTINUAR SENDO PERDEDOR",
                proximaPagina: "paginainicial"
            }
        ]
    },
    paginareputacao: {
        texto: "As ações de Adam têm consequências. Ele pode enfrentar acusações de perturbação da ordem pública e briga de bar. Sua imagem e reputação podem ser afetadas",
        imagemFundo: "img/1696313795581.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1PaoUDA0lHU4_vQoerr_DkyHip1coxp4b",
        opcoes: [
            {
                texto: "ESPANCAR O SUSPEITO",
                proximaPagina: "paginaespancar"
            },
            {
                texto: "DEIXAR O SUSPEITO ESCAPAR",
                proximaPagina: "paginafuga"
            },
            {
                texto: "OBTER INFORMAÇÕES A PULSO",
                proximaPagina: "paginafuienganado"    
            }
        ]
    },
    paginafuienganado: {
        texto: "As informações fornecidas pelo suspeito eram falsas, e os criminosos aproveitaram a confiança de Adam para encobrir suas atividades. Os culpados escapam impunes, a conspiração se aprofunda e a cidade continua a ser assolada pelos arrombamentos. Adam enfrenta a devastação de ter confiado nas informações erradas, e a verdadeira figura por trás dos crimes permanece oculta.",
        imagemFundo: "img/1696299541511.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1Mb2gTKpWu9YDW4hmXlfEHukdacsbeLE9",
        opcoes: [
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            }
        ]
    },
    paginaescape: {
        texto: "Adam desiste da investigação e procura por entretenimento em uma livraria local.",
        imagemFundo: "img/1696299862883.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1g498etUylGHHTcCZR1H-84yotnMn508T",
        opcoes:[
            {
                texto: "CAIR FORA DA ESPELUNCA",
                proximaPagina: "paginarollsroyce"
            },
            {
                texto: "JOGO-LIVRO INTERATIVO",
                proximaPagina: "paginalivreto"
            }
        ]
    },        
    paginalivreto: {
        texto: "No final da visita à livraria, Adam se depara com um livro-jogo interativo que captura completamente a sua atenção. À medida que avança na leitura, uma sensação peculiar o envolve: a história do jogo descreve um detetive que toma as mesmas decisões que ele, até mesmo as que ele só cogitou fazer. Essa descoberta o deixa intrigado, e ele começa a suspeitar que há uma conspiração muito mais profunda e sinistra em jogo na sua vida.",
        imagemFundo: "img/1696188351396.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1J6mqRJXfMKb4C5RmjBh9svh7l67F-aYH",
        opcoes:[
            {
                texto: "MATRIX • 1923",
                proximaPagina: "paginabifurcacoesmatrix"
            },
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DA MATRIX",
                proximaPagina: "paginainicial"
            }
        ]
    },
    paginabifurcacoesmatrix: {
        imagemFundo: "img/projectmapXmind.png",
        audioNarracao: "https://drive.google.com/uc?id=1vuLgF3ts0ad6LBeFSc_g9I7TAvDeQ_aO",
        opcoes: [
            {   
                texto: "VOLTAR",
                proximaPagina: "paginalivreto"
            }
        ]   
    },
    paginaespancar: {
        texto: "Após a escalada das hostilidades, o caos se instala no pub. Adam, em sua tentativa de obter informações do invasor, se vê preso na confusão e acaba detido pelas autoridades locais.",
        imagemFundo: "img/1696299241766.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1IkveaHLxa9yAYFT8iH6FPKCAttXyWzak",
        opcoes: [
            {
                texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "paginainicial"
            }
        ]
    },
    paginamibella: {
        texto: "Enquanto investigam os vínculos do relacionamento de Isabella com seu amante, Sandro, Michelle dobra a aposta e acaba descobrindo que Isabella é, na verdade, a filha de Don Vincenzo Romano, um mafioso poderoso na cidade.",
        imagemFundo: "img/1695912285937.jpg",
        audioNarracao: "https://drive.google.com/uc?id=19MElMusOYF_g0YPQdAFnPZNuyecdnC_h",
        opcoes: [
            {
                texto: "EXTRAIR CONFISSÃO",
                proximaPagina: "paginaconfissao"
            }
        ]
    },
    paginaconfissao: {
        texto: "Isabella acaba confessando que está sendo ameaçada como parte dos planos de uma seita que busca influência na máfia local e ganhar acesso às atividades criminosas de seu pai, Don Vincenzo.",
        imagemFundo: "img/1696248222676.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1aeX1I5mZR8MRA6T-yI9YIZWdg4bqpC8W",
        opcoes: [
            {
                texto: "DETALHES",
                proximaPagina: "paginaquasefinal"
            }
        ]
    },
    paginadella: {
        texto: "Isabella mostrou uma notável resistência em compartilhar informações com Adam. Cada vez que ele tentava se aproximar do cerne do mistério, ela parecia habilmente desviar suas perguntas ou fornecer respostas evasivas. Ela mantinha uma muralha de segredos em torno de sua vida e dos perigos que enfrentava, fazendo com que Adam se sentisse constantemente em desvantagem.",
        imagemFundo: "img/1696299624171.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1rczb-AntsXK-w-y_o_jLyswFke_mrGOM",
        opcoes: [
            {
                texto: "BLÁ-BLÁ-BLÁ ENCHEU O SACO",
                proximaPagina: "paginacavalo"
            },
            {
                texto: "MICHELLE X ISABELLA",
                proximaPagina: "paginamichella"
            }
        ]
    },
    paginamichella: {
        texto: "Michelle sabia que a situação era delicada, e sua abordagem seria crucial para obter informações valiosas. Com cuidado e empatia, Michelle começou a dar as suas investidas em Isabella.",
        imagemFundo: "img/1696299671087.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1w-k3GyAthrsJ7hf5eg5XMIdu1GwIoi0I",
        opcoes: [
            {
                texto: "DOBRAR APOSTA",
                proximaPagina: "paginamibella"
            },
            {
                texto: "ADAM X ISABELLA",
                proximaPagina: "paginadella"
            },
            {
                texto: "MELHOR TOMAR GORÓ",
                proximaPagina: "paginalcoolatra"
            },
        ]
    },
    paginacavalo: {
        imagemFundo: "img/1695857509772.jpg",
        audioNarracao: "https://drive.google.com/uc?id=11qfddPOTInDvyK7ArsiJhjs2O4IUN5BR",
        opcoes: [
            {
                texto: "MARCHAR PARA TRÁS",
                proximaPagina: "paginadella"
            },
            {
                texto: "MARCHAR EM RETIRADA",
                proximaPagina: "pagina0_0"
            }
        ]
    },
    paginaquasefinal: {
        texto: "Os invasores roubam documentos confidenciais, registros financeiros e informações pessoais que podem ser usados como alavancagem contra figuras poderosas da cidade. Invasões paralelas foram planejadas para criar distrações e desviar a atenção das atividades de chantagem e conspiração do grupo.",
        imagemFundo:"img/1695912433879.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1jPliW-crrS14CiiVIpTHDSKqP52Ga3ih",
        opcoes: [
            {
                texto: "AJUDAR ISABELLA",
                proximaPagina: "paginajuda"
            },
            {
                texto: "PROBLEMA DELA",
                proximaPagina: "paginafodasela"
            }
        ]
    },
    paginafodasela: {
        texto: "Com Michelle e Adam decidindo deixar Isabella à própria sorte, ela se vê sozinha em sua luta contra a seita e suas ameaças. Isabella, desesperada para proteger a si e à integridade de seu amante, Sandro, é forçada a tomar decisões difíceis e a manter um equilíbrio delicado entre proteger seu relacionamento e ajudar os chantagistas. Enquanto isso, as invasões paralelas continuam a criar distrações na cidade, desviando a atenção das atividades de chantagem e conspiração do grupo secreto. Figuras poderosas da cidade começam a ser alvo das chantagens, resultando em tensões crescentes e potenciais consequências devastadoras para a cidade",
        imagemFundo: "img/1696248690215.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1XFF2l5aAVis4mA1eoe9HxDpRNBwUMsLO",
        opcoes: [
            {
                texto: "MUDAR DE IDEIA E AJUDAR ISABELLA",
                proximaPagina: "paginaideia"
            },
            {
                texto: "ACEITAR AS CONSEQUÊNCIAS",
                proximaPagina: "paginaconsequencias"
            }
        ]
    },
    paginajuda: {
        texto: "Michelle, Adam e Isabella se reúnem, formando uma equipe improvável, trabalham juntos, para investigar e identificar os membros da seita e coletar evidências contra eles, conseguindo desvendar os segredos da seita e expor suas atividades criminosas. Em uma confrontação final com os líderes da máfia, Michelle, Adam e Isabella, apoiados por evidências irrefutáveis, conseguem expor a verdade, frustrando os planos conspiratórios e desmantelando a organização criminosa. A cidade é salva do caos instalado pelas chantagens e do controle da seita, e as figuras poderosas envolvidas podem ser responsabilizadas por seus crimes.",
        imagemFundo: "img/1695951325278.jpg",
        audioNarracao: "https://drive.google.com/uc?id=15U4mrczj2VzufEa6cL_WI89vPAEMVE3g",
        opcoes: [
            {
                texto: "E O CORNO ?",
                proximaPagina: "paginacasamento"
            },
            {
                texto: "E A MÁFIA DO ROMANO ?",
                proximaPagina: "pagina404"
            },
            {
                texto: "SEGREDOS DO JOGO",
                proximaPagina: "paginabifurcacoes"
            },
            {
                texto: "RESET",
                proximaPagina: "pagina0_0"
            },
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "paginainicial"
            }
        ]
    },
    paginacasamento: {
        texto: "Quanto ao casamento marcado da filha de Don Vincenzo Romano... bem, este entrou em ruína, após Isabella se mandar para a Itália com seu amante Sandro. ",
        imagemFundo: "img/1695924517708.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1oGU7ODW19PdpXQM8GrUVi5AqIdgaYt_7",
        opcoes: [
            {
                texto: "VOLTAR",
                proximaPagina: "paginajuda"
            }
        ]
    },
    pagina404: {
        texto: "( 404 error: File not found ) Os scripts desta seção foram tragicamente perdidos quando Kalil se esbarrou nos cabos do computador no laboratório.",
        imagemFundo: "img/e91d644760b495a829a062ffcfd73edb.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1bCV6g9_BFCuomw6Fy17N4uFYTHwh0ua-",
        opcoes: [
            {
                texto: "VOLTAR",
                proximaPagina: "paginajuda"
            }
        ]
    },
    paginaconsequencias: {
        texto: "Adam e Michelle  optam por não se envolverem mais na situação e continuar com suas vidas cotidianas, ignorando as crescentes tensões na cidade e as atividades da seita. Eles acreditam que não é responsabilidade deles lidar com a situação e tentam manter distância dos acontecimentos.",
        imagemFundo: "img/1695913542075.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1Bpjn-MHUr-_J9yRUH8rqMXTEbYJJWK44",
        opcoes: [
            {
               texto: "NOVA JORNADA",
                proximaPagina: "pagina0_0"
            }, 
            {
                texto: "SAIR DO JOGO",
                proximaPagina: "paginainicial"
            }
        ]
    },
    paginaideia: {
        texto: "À medida que a situação na cidade fica insustentável, Michelle e Adam, consumidos pelo remorso e preocupados com o destino de Isabella e da cidade, decidem finalmente se envolver. Eles reconhecem que a seita representa uma ameaça significativa e que sua ajuda é crucial para impedir as chantagens e conspirações.",
        imagemFundo: "img/1695942959531.jpg",
        audioNarracao: "https://drive.google.com/uc?id=1n9SwtzFzJyt5xwLy-SvRbOxiHvPaUEmy",
        opcoes: [
            {
                texto: "AJUDAR ISABELLA",
                proximaPagina: "paginajuda"
            }
        ]
    },
    paginabifurcacoes: {
        imagemFundo: "img/projectmapXmind.png",
        audioNarracao: "https://drive.google.com/uc?id=1vuLgF3ts0ad6LBeFSc_g9I7TAvDeQ_aO",
        opcoes: [
            {   
                texto: "VOLTAR",
                proximaPagina: "paginajuda"
            }
        ]   
    }
};

function mostrarPagina (pagina) {  // como diz o nome, esta função tem como argumento "(página)" serve para  exibir a página, ou seja,  atualiza a interface do jogo com o texto da página atual e opções disponíveis na página.
const ElementoTextoHistoria = document.getElementById("narrativa") // esta linha buscará o referencial "Id" identificado acima, para este caso, busca o elemento narrativa
const ElementoOpcoes = document.getElementById("opcoes") // já esta linha, buscará o referencial "Id" também identificado acima, para este caso, busca o elemento opções
const paginaAtualObj = historia[pagina] // aqui, se obtém a seção que representa a página atual do jogo
ElementoTextoHistoria.textContent = paginaAtualObj.texto // esta linha atualiza o conteúdo do elemento com o texto da página atual, ou seja,  com o "Id" narrativa
document.getElementById("jogo-container").style.backgroundImage = `url('${paginaAtualObj.imagemFundo}')` || 'none';

const audioNarracao = document.getElementById("audioNarracao") // nesta seção será definido o elemento de áudio com o ID "audioNarracao" no documento HTML anterior
audioNarracao.pause() // chamando o "pause()"" no elemento de áudio para pausar a reprodução do áudio atual, se, somente se, houver algum
audioNarracao.currentTime = 0 // é importente redefinir o tempo de reprodução do áudio para o segundo 0 para garantir que, quando o áudio for reproduzido novamente, ele comece do início
if (paginaAtualObj.audioNarracao) { // nesta linha, será verificada se a página atual "paginaAtualObj" possui o audio, propriedade que definimos como "audioNarracao", ou seja, se houver um URL de áudio definido para a página, o código dentro deste bloco será executado
audioNarracao.src = paginaAtualObj.audioNarracao // definindo o atributo "src" do elemento de áudio com o URL do arquivo de áudio da página atual
audioNarracao.play() // aqui, "play()" será executado no elemento de áudio para iniciar a reprodução do áudio da página atual
}

// é necessário limpar as opções anteriores quando se escolhe a próxima, para isso utiliza-se innerHTML
ElementoOpcoes.innerHTML = "" // a princípio, tentei implementar o código  sem o conhecimento desta propriedade, mas, na interface acontecia algo inesperado com os botões - ficavam se acumulando indiscriminadamente

function criarOpcoes (opcoes) { // função para adicionar botões para as opções usando recursividade
    if (opcoes.length === 0) { // traduzindo, quando o tamanho (length que serve como um medidor) for igual a 0, ou seja, quando não houver,
        return                // ele deverá retornar (return) o processo a seguir para trazer novos botoes de opções
    }
    const opcaoAtual = opcoes[0] // consta que a opção atual é [0], ou seja, a primeira do grupo
    const botao = document.createElement("button") // temos aqui uma constante chamada "botao" que armazena uma referência ao elemento "button". (tentei fazer botao mas não deu certo, acho que o )
    botao.textContent = opcaoAtual.texto // aqui, o botão usará a propriedade para acessar o conteúdo em HTML.
    botao.addEventListener("click", () => escolherOpcao(opcaoAtual.proximaPagina)) // o botão usará um manipulador de eventos, o EventListener,  para associar o botão a um evento específico, no caso clicar "click" no elemento "button" que definimos anteriormente no CSS
    ElementoOpcoes.appendChild(botao) // adiciona o botão à seção onde as opções do jogo são exibidas em sua interface
    // chamada recursiva para criar botões para as opções restantes
    criarOpcoes(opcoes.slice(1)) // ela pegará uma fatia do total de opções (referentes aos botões) excluindo a primeira e retornando a si mesma novamente até não haver mais opções, ou seja, até que todos os botões tenham sido criados, aí então, a recursividade será encerrada.
}

if (paginaAtualObj.opcoes.length > 0) { // este é o momento exato em que o encerramento da recursividade é definido, quando o tamanho "length" (quantidade) de opcoes atuais seja igual a zero,
    criarOpcoes(paginaAtualObj.opcoes) // portanto, ela será executada enquanto o número de opções for maior que zero (>0)
}
    efeitoDigitacao(paginaAtualObj.texto) // chamando a função que da o efeito de digitalização ao texto.
}

// função para efeito de digitação no texto
function efeitoDigitacao (texto) { // Define a função dando a ela um argumento 'texto'.
    // Verifica se o elemento narrativa atual existe.
    const elementoNarrativaAtual = document.getElementById('narrativa'); // Procura o elemento com id 'narrativa' e o armazena em 'elementoNarrativaAtual'
    if (elementoNarrativaAtual) { // Verifica se ele existe.
        elementoNarrativaAtual.remove(); // Se ele existe, o remove o da pagina, para evitar que os textos das paginas se mesclem, caso o jogador avance muito rapido.
    }
    // Criando um novo elemento paragrafo:
    const jogoContainer = document.getElementById('jogo-container'); // Procura o elemento com id 'jogo-conatiner' e o armazena em 'jogoContainer'.
    const novoElemento = document.createElement('p'); // Cria um novo paragrafo e o armazena em 'novoElemento'.
    novoElemento.id = 'narrativa'; // Define o qual o ID do novoElemento, que sera a narrativa.

    // Adiciona o novo paragrafo antes da div de opções. Isso faz com que as opções sempre apareçam abaixo do texto. 
    const opcoesDiv = document.getElementById('opcoes');
    if (opcoesDiv) { 
        jogoContainer.insertBefore(novoElemento, opcoesDiv);
    }
    // Inicializa o texto da narrativa como vazio, para que as letras sejam adicionadas com o efeito.
    novoElemento.innerHTML = '';
    // A seguir, convertimento de texto por meio do split("") "casa"-->["c","a","s", "a"]
    const textoParaArray= texto.split("")
    if(textoParaArray){//a seguir, por meio do reduce, haverá a adição na tela letra a letra, para tal, usou-se também a função temporizadora do js setTimeout. note que novo elemento está dentro dela.
        textoParaArray.reduce((acumuador,letra,indiceletra)=>{
            setTimeout(()=>{
                novoElemento.innerHTML+=letra;
            },75*indiceletra)
        },null)
}
}

function escolherOpcao (proximaPagina) { // esta função é responsável por exibir, "mostrar" a póxima página

if (historia[proximaPagina]) { // a condicional é haver uma próxima página da história a ser retornada pela opcao
    mostrarPagina(proximaPagina) // em caso afirmativo, ela retorna, "mostra" a próxima página
} else { // caso contrário,
    mostrarPagina("paginainicial")// Retorna ao menu inicial
}

const efeitoSonoro = document.getElementById("efeitoSonoro") // ao escolher a opção, essa constante reproduz o efeito sonoro espcíficado acima ao clicar em uma opção
efeitoSonoro.play() // como o nome diz, executará o arquivo de áudio específicado
}

document.addEventListener("DOMContentLoaded", function () {
    mostrarPagina("paginainicial");
  })