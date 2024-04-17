#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#define MAX_OPCOES 5 // definição do número máximo de opções por página
#define RESET -3 // definição para resetar (Emblema)

// definição da estrutura de página
typedef struct {
    char titulo[50];
    char texto[1500];
    char opcoes[MAX_OPCOES][50]; // array de opções
    int destinos[MAX_OPCOES];    // array de destinos para as opções
    int num_opcoes;              // número de opções válidas para esta página
} Pagina;

// para exibir uma página
void mostrarPagina(Pagina pagina) {
    system("clear");
    
    printf("\n  ========================\n  1923 · O MISTÉRIO DO PUB  |  %s\n  ========================\n", pagina.titulo);
    printf("%s\n", pagina.texto);
    for (int i = 0; i < pagina.num_opcoes; i++) {
        printf("  %d| %s\n", i + 1, pagina.opcoes[i]);
    }
}

void Emblema(){
    system("clear");
    sleep(1);
    printf(
            "                 _  ___ ____  _____ \n"
            "                / |/ _ \\___ \\|___ / \n"
            "                | | (_) |__) | |_ \\  \n"
            "                | |\\__, / __/ ___) | \n"
            "                |_|  /_/_____|____/  \n");
    usleep(200000);
    printf(
            "   ___    __  __ ___ ____ _____ _____ ____  ___ ___ \n"
            "  / _ \\  |  \\/  |_ _/ ___|_   _| ____|  _ \\|_ _/ _ \\ \n"
            " | | | | | |\\/| || |\\___ \\ | | |  _| | |_) || | | | |\n"
            " | |_| | | |  | || | ___) || | | |___|  _ < | | |_| |\n"
            "  \\___/  |_|  |_|___|____/ |_| |_____|_| \\_\\___\\___/ \n");
    usleep(200000);
    printf(
            "           ____   ___    ____  _   _ ____   \n"
            "          |  _ \\ / _ \\  |  _ \\| | | | __ \\ \n"
            "          | | | | | | | | |_| ) | | | |_ \\ \n"
            "          | |_| | |_| | |  __/| |_| | |_) | \n"
            "          |____/ \\___/  |_|    \\___/|____/ \n\n");
    usleep(200000);
    printf("\t\t BEM-VINDO A 1923!\n\n");
    usleep(200000);
    printf("\t\t ENTER para continuar\n");
    usleep(200000);
    printf("\t\t Q+ENTER para sair\n\t\t ");
    
    char tecla = getchar();
    if (tecla == 'q' || tecla == 'Q') {
        system("clear");
        printf(
        "                 _  ___ ____  _____ \n"
        "                / |/ _ \\___ \\|___ / \n"
        "                | | (_) |__) | |_ \\  \n"
        "                | |\\__, / __/ ___) | \n"
        "                |_|  /_/_____|____/  \n");
        
        printf(
            "   __ _  __ _ _ __ ___   ___    _____   _____ _ __     \n"
            "  / _` |/ _` | '_ ` _ \\ / _ \\  / _ \\ \\ / / _ \\ '__|    \n"
            " | (_| | (_| | | | | | |  __/ | (_) \\ V /  __/ |     _ \n"
            "  \\__, |\\__,_|_| |_| |_|\\___|  \\___/ \\_/ \\___|_|    (_)  \n"
            "   __/ |                                               \n"
            "  |___/          encerrando 1923...\n");
        
        exit(0); // termina a execução do programa
    }
}
void Abertura(){
    system("clear");
    printf("\n  ========================\n  1923 · O MISTÉRIO DO PUB\n  ========================\n");
    usleep(200000);
    system("clear");
    printf("\n  ========================\n  1923 · O MISTÉRIO DO PUB  |  BEM-VINDO A 1923!\n  ========================\n");
    sleep(1);
    printf("\n Imagine-se explorando mundos incríveis,\n"); usleep(200000); // pausa de meio segundo (500 milissegundos)
    printf(" enfrentando desafios e decidindo o destino da\n"); usleep(200000);
    printf(" história. Criados por Edward Packard na década de\n"); usleep(200000);
    printf(" 60, esses jogos conquistaram leitores de todas as\n"); usleep(200000);
    printf(" idades. Agora, é a sua vez! Torne-se o autor da sua\n"); usleep(200000);
    printf(" própria aventura no \"Mistério do Pub\", uma narrativa\n"); usleep(200000);
    printf(" interativa que coloca você no centro da trama\n"); usleep(200000);
    printf(" intrigante de 1923.\n\n"); usleep(200000);
    printf(" Este não é apenas um romance; é uma jornada\n"); usleep(200000);
    printf(" intrincada onde suas escolhas moldam o destino de\n"); usleep(200000);
    printf(" Adam Lawrence, um homem comum mergulhado em\n"); usleep(200000);
    printf(" circunstâncias extraordinárias. Em meio a um\n"); usleep(200000);
    printf(" labirinto de mentiras e segredos ocultos, suas\n"); usleep(200000);
    printf(" decisões podem ser a chave para desvendar a verdade\n"); usleep(200000);
    printf(" ou, possivelmente, encontrar um trágico destino\n"); usleep(200000);
    printf(" desconhecido.\n\n"); usleep(200000);
    printf(" Prepare-se para mergulhar em uma trama envolvente,\n"); usleep(200000);
    printf(" onde cada decisão molda o curso da história. O\n"); usleep(200000);
    printf(" destino de Adam está em suas mãos. Será você capaz\n"); usleep(200000);
    printf(" de desvendar os mistérios de setembro de 1923? A\n"); usleep(200000);
    printf(" aventura começa agora! Descubra o poder da sua\n"); usleep(200000);
    printf(" escolha com os livro-jogos \"Choose Your Own\n"); usleep(200000);
    printf(" Adventure\".\n");
    getchar();
    printf("\n  Roteiro - W.Soares | Revisão - M.H.Melo");
    printf("\n                 ☆ ☆ ☆ ☆ ☆              \n");
    getchar();
}

    void Miolo() {
        // inicialização das páginas
        Pagina paginas[] = { 
            { //0
                "pagina00", 
                    "",
                {"START\n\n  digite \"1\" e pressione \"enter\" para jogar"}, 
                {1}, 1
            },
            { //1
                "paginacapa", 
                    "\n  \"Achamos que somos livres, mas não"
                    "\n    somos, seguimos sempre o mesmo"
                    "\n               caminho.\"\n", 
                {"INICIAR JORNADA"}, 
                {2}, 1
            },
            { //2
                "paginaintroducao", // título da página
                    "\n  Em derradeiro de setembro de 1923, na manhã"
                    "\n  daquele domingo nublado, depois de tomar um café" 
                    "\n  na padaria da esquina e ler o seu jornal matinal," 
                    "\n  Adam estava caminhando para casa intrigado com a" 
                    "\n  notícia dos arrombamentos recentes.\n", 
                {"PROSSEGUIR", "VOLTAR À PADARIA"}, // opções
                {4, 5}, 2   // páginas, número de opções
            },
            { //3 
                "paginachorar", 
                    "\n   𝄞♫♪"
                    "\n   [...]"
                    "\n    Never gonna give you up"
                    "\n    Never gonna let you down"
                    "\n    Never gonna run around and desert you"
                    "\n    Never gonna make you cry"
                    "\n    Never gonna say goodbye"
                    "\n    Never gonna tell a lie and hurt you"
                    "\n   [...]\n\n", 
                {"ENXUGAR LÁGRIMAS", "IR CHORAR DE CÓCORAS NO BANHEIRO"}, 
                {2, 6}, 2
            },
            { //4
                "paginacidade", 
                "\n  A movimentada cidade em que residia, onde normalmente"
                "\n  ninguém se importaria com as singularidades de transeuntes"
                "\n  aleatórios, era o cenário perfeito para quem deseja passar" 
                "\n  despercebido.\n\n",
                {"PROSSEGUIR"}, 
                {7}, 1
            },
            { //5
                "paginapadaria", 
                "\n  O vício em cafeína, apesar de comum,"
                "\n  não é algo a ser fomentado.\n"
                "\n  Você já tomou café! Não há mais nada"
                "\n  interessante a se fazer por aqui!\n\n", 
                {"SAIR DA PADARIA", "TOMAR OUTRO CAFÉ", "JOGO ENFADONHO"}, 
                {4, 8, 6}, 3
            },
            { //6
                "paginalamuria", 
                "\n  LAMÚRIA:\n" 
                "\n  Substantivo feminino, lamentação interminável," 
                "\n  que importuna e que a nada leva; queixume, queixa.\n\n", 
                {"NOVA JORNADA", "VOLTAR AO JOGO"}, 
                {0, 5}, 2
            },
            { //7
                "paginajanela", 
                "\n  Adam Lawrence, costumava se fechar completamente para"
                "\n  as possibilidades do mundo alheias à sua rotina, entretanto," 
                "\n  era domingo, e ele percebeu um rapaz saindo pela janela do" 
                "\n  apartamento de sua vizinha, Isabella.\n\n", 
                {"SEGUIR SUSPEITO", "ARREMESSAR UMA PEDRA", "IGNORAR O SUSPEITO E VOLTAR PARA CASA"}, 
                {10, 15, 13}, 3
            },
            { //8
                "paginamortecafe", 
                "\n  Testemunhas relataram às autoridades, o comportamento"
                "\n  frenético e alucinado de Adam que enfartou ao ingerir"
                "\n  quantidades inacreditáveis do líquido preto. R.I.P.\n\n", 
                {"NOVA JORNADA", "SAIR DO JOGO"}, 
                {0, -3}, 2
            },
            { //9
                "paginalcoolatra", 
                
                "\n            *   )       *    (\n"
                "      )        (                   (\n"
                "     (          )     (             )\n"
                "      )    *           )        )  (\n"
                "     (                (        (      *\n"
                "      )      H         )        )\n"
                "            [ ]            (\n"
                "        ( * |-|       *     )     (\n"
                "   *     )  |_|        .           )\n"
                "        (   | |    .  \n"
                "   )       /   \\     .    ' .  *      *\n"
                "  (       |_____|  '  .    .      )\n"
                "   )      | ___ |  \\~~~/  ' .    (  *\n"
                "        * | \\ / |   \\_/ \\~~~/     )    '\n"
                "          | _Y_ |    Y   \\_/         . \n"
                "  *       |-----|   _|_   Y     ____   `\n"
                "          `-----`     /\\ _|_  .´   /\\ \n"
                "                      |K----<(     || \n"
                "                      \\/      `.___\\/ \n"
    
                
                "\n  Testemunhas relataram às autoridades, o"
                "\n  comportamento frenético e alucinado de"
                "\n  Adam que enfartou ao ingerir quantidades"
                "\n  inacreditáveis de álcool. R.I.P.\n\n",
                
                {"NOVA JORNADA", "SAIR DO JOGO"}, 
                {0, -3}, 2
            },
            { //10
                "paginaperseguir", 
                "\n  Despretensiosamente, Adam resolve seguir o sujeito até um pub.\n\n", 
                {"PROSSEGUIR"},
                {11}, 1
            },
            { //11
                "paginadecisaopub",  
                
                "\n  Ao chegar no pub da esquina, Adam se depara com uma"
                "\n  surpreendente coincidência: Michelle, sua colega do" 
                "\n  escritório, também estava lá.\n"
                "\n            .======================================.\n"
                "            | ___ ___ ___               _   _   _  |\n"
                "      w*W*w | \\_/ \\_/ \\_/ C|||C|||C||| |-| |-| |-| |\n"
                "      //`\\\\ | _|_ _|_ _|_  ||| ||| ||| |_| |_| |_| |,sS))S,\n"
                "     (/a a\\)'======================================')(( \"(   .\n"
                "     (\\_-_/)              {CORNER PUB 1923}       _-S); -/-_\\~/\n"
                "    .-~'='~-.      .:.   .                       _-S(SS_(_  _Y_\n"
                "   (`~`\"Y\"´~´\\    C|||' \\~/                       ((S/ _)_) /.-\n"
                "    \\(_ * _)/ \\____|||___Y________________________ )\\   /\\//\n"
                "     ))   (  \\ | _________________________________]\\|==(\\_/\n"
                "    (/\\\\_//\\_/    ____    ____    ____    ____   | (/   `\n"
                "    ´  '*' (_\\|  (____)  (____)  (____)  (____)  | |     |\n"
                "    |       | |  |    |  |    |  |    |  |    |  | |     |\n"
                "    |       | |  |    |  |    |  |    |  |    |  | /     \\\n"
                "    |       | |  |    |  |    |  |    |  |    |  |//|  | \\\\\n"
                "    |       | |  |____|  |____|  |____|  |____|  / |/   \\ |\\\n"
                "    |       | |  I====I  I====I  I====I  I====I  /  /\\| \\  \\\n"
                "    |       | |  |    |  |    |  |    |  |    |  | /.(=\\\n"
                "    |       |                                        Y\\_\\\n"
                "    |       |\n"
                "    w*W*W*W*w\n",
                
                {"CONTINUAR SEGUINDO O SUSPEITO", "FALAR COM MICHELLE", "IGNORAR MICHELLE E O SUSPEITO"},
                {17, 16, 12}, 3
            },
            { //12
                "paginaficarpub",
                "\n  Não há nada mais a se fazer por aqui!\n\n",
                {"HÁ SIM! FICAR NO PUB BEBENDO", "IR PARA CASA", "NOVA JORNADA", "SAIR DO JOGO"},
                {9, 13, 0, -3}, 4
            },
            { //13
                "paginarollsroyce",
                
                "\n\n                                . ' ' ' ' ' ' -.................     "
                "\n                              ( >>\\`zzZZZZZ _//ZZzz `.__      //"
                "\n  Adam apressou-se             \\ <<<\\     #::|:    __#:::__   |  ."
                "\n  demais para prosseguir      _,`-,\\<   #::::|::__#::::/__x_\\:|  v  "
                "\n  o seu percuso solitário    /__  . `--,''`./ '.´\"\"\"\"\"      \"\"`. | "
                "\n  e não percebeu quando     /  _`. `= |  `--,._  ' .       .  _.(O)._   .\ "
                "\n  um luxuoso Rolls-Royce   '// \\ . ' | =  .  '--,   ` .   .-. ´/üÜÜü\\`'.-.   "
                "\n  Silver Ghost 1907        -:: o |.  .|     .   __ \\_____(( )`/||||||\\(( )~ "
                "\n  o acertou em cheio!       ::   ;-,_'' .   . ,' _ ` \"\"\" \"/|\"\"\"||--||\"\"\"|\\ `\\ "
                "\n  R.I.P.                    \\ \\_/ _ :`-._ ' . ;´/ \\        `.  ||||||  .´    ; "
                "\n                             \\__.´ .´    `-.,. ; o ;`-.__  [ ]_||||||_[ ]__ / "
                "\n                              `---´          : :   ;~ ::: ~~~\\_|1923|_/~~~ :::  "
                "\n                                              \\ \\_/  / `-----------------´:; "
                "\n                                               `.__.´                `._´.´\n\n",                        
                {"NOVA JORNADA", "SAIR DO JOGO"},
                {0, -3}, 2
            },
            { //14
                "paginadesculpa",
            
                "\n  Adam tentou se desculpar, mas as desculpas não foram"
                "\n  aceitas e as autoridades foram acionadas. Trágico fim!\n"
            
                "\n  Adam foi institucionalizado.\n\n",
            
                {"NOVA JORNADA", "SAIR DO JOGO"},
                {0, -3}, 2
            },
            { //15
                "paginapedrada",
                
                "\n  Adam, se enfureceu ao ponto de atingir o suspeito com uma pedra.\n"
                
                "\n  Estranhamente, Isabella, sua vizinha, correu para socorrer o"
                "\n  suposto invasor que na verdade era um caso extraconjugal.\n\n",
                
                {"SE DESCULPAR", "NOVA JORNADA", "DESISTIR"},
                {14, 0, 23}, 3
            },
            { //16
                "paginaconversamichelle",
                
                "\n  Conversando com Michelle, Adam percebe \n"  
                "  que ela está realmente interessada nos \n" 
                "  casos de invasões domiciliares.                      w*W*w\n"
                "                                                       /_)\\\\\n"
                "  Ela relata o temor de que a cidade             .   ´(/a a\\)`\n"
                "  fique perigosa com a imigração. Adam          \\~/   (\\_-_/) \n"
                "  comenta sobre o assunto e menciona o          _Y_  .-~'='~-.\n" 
                "  que acabou de ver na janela do                Ww  /`~`\"Y\"`~`\\\n"
                "  apartamento de sua vizinha, Isabella.         \\:\\/ /(_ * _)\\ \\\n"
                "                                           ______\\ \\/__)___(__\\ \\________\n"
                "  Michelle fica empolgada e sugere que            \"\"   .:    _/:/ .:.  .:.\n"
                "  eles explorem mais a situação, talvez               C|(   (_\\/ C||| ´|||`\n"
                "  conversando com Isabella ou investigando            (__)        |||\n"
                "  sua vizinhança para entender melhor \n"  
                "  os acontecimentos recentes.\n\n", 
                
                {"ACOMPANHAR MICHELLE", "SAIR DO PUB SOZINHO, SEM MICHELLE"},
                {18, 13}, 2
            },
            { //17
                "paginaaproximacao",
                
                "\n  Adam se aproxima para obter mais informações e, em um momento"
                "\n  inesperado, acaba se envolvendo em um confronto com o invasor.\n"
                
                "\n  As coisas podem ficar perigosas, e Adam terá que tomar decisões"
                "\n  rápidas para lidar com a situação.\n\n",
                
                {"PRENDER O SUSPEITO", "FAZER ACORDO COM O SUSPEITO", "DEIXAR O SUSPEITO ESCAPAR", "INTIMIDAR O SUSPEITO"},
                {20, 21, 22, 24}, 4
            },   
            { //18
                "paginadetetives",
                
                "\n  A dupla de detetives amadores, Michelle e Adam, decidem"
                "\n  iniciar suas investigações, mergulhando no mistério que"
                "\n  envolve o suspeito e o que está acontecendo com Isabella.\n"
                
                "\n  Eles suspeitam que há segredos ocultos a serem descobertos"
                "\n  e estão determinados a descobrir a verdade, mesmo que isso"
                "\n  os leve a lugares obscuros e perigosos na cidade.\n\n",
                
                {"PROSSEGUIR COM MICHELLE", "TOMAR CACHAÇA NO PUB", "SAIR POR AÍ"},
                {19, 9, 13}, 3
            },
            { //19
                "paginaisabella",
                "\n  Michelle e Adam decidem procurar Isabella para esclarecer a"
                "\n  situação e obter mais informações. Ao se aproximarem dela com"
                "\n  cautela, Isabella começa a revelar gradualmente os segredos"
                "\n  que ela estava escondendo, levando-os a perceber que há um"
                "\n  conflito oculto acontecendo nos bastidores, do qual ela é"
                "\n  parte fundamental.\n\n",
                {"ADAM X ISABELLA", "MICHELLE X ISABELLA"},
                {32, 33}, 2
            },
            { //20
                "paginaprender",
                "\n  Adam, após o confronto, decide entregar o suspeito às"
                "\n  autoridades. O invasor é preso preventivamente, mas Adam"
                "\n  continua ignorante sobre sua verdadeira identidade. A"
                "\n  polícia agradece a colaboração de Adam e promete investigar"
                "\n  o caso com seriedade.\n\n",
                {"NOVA JORNADA", "SAIR DO JOGO"},
                {0, -3}, 2
            },
            { //21
                "paginacordo",
                
                "\n  Em vez de entregá-lo à polícia, Adam decide fazer um acordo"
                "\n  com o suspeito, negociando informações em troca de sua liberdade.\n"
                
                "\n  O suspeito concorda em revelar detalhes sobre sua relação"
                "\n  extraconjugal com Isabella e suas atividades suspeitas.\n\n",
                
                {"CAIR NO PAPINHO", "CAIR MATANDO"},
                {25, 29}, 3
            },
            { //22
                "paginafuga",
                "\n  Adam, em um momento de dúvida, permite que o suspeito fuja do"
                "\n  confronto. O suspeito desaparece na escuridão, deixando Adam"
                "\n  com mais perguntas do que respostas.\n\n",
                {"DESISTIR DA INVESTIGAÇÃO", "FAZER ALGO MAIS INTERESSANTE"},
                {23, 26}, 2
            },
            { //23
                "paginaperdedor",
                "\n      \“No vasto universo das"
                "\n      possibilidades da vida, abraçar a"
                "\n      designiação de perdedor pode ser,"
                "\n      paradoxalmente, o primeiro passo em"
                "\n      direção à descoberta da verdadeira"
                "\n      essência da vitória - o trinufo da"
                "\n      autoaceitação e a coragem de forjar"
                "\n      um caminho unicamente seu.\”\n"
                "\n  - disse Ninguém.\n\n",
                {"REINICIAR JORNADA", "CONTINUAR SENDO PERDEDOR"},
                {0, -3}, 2
            },
            { //24
                "paginareputacao",
                "\n  As ações de Adam têm consequências. Ele pode enfrentar"
                "\n  acusações de perturbação da ordem pública e briga de bar."
                "\n  Sua imagem e reputação podem ser afetadas\n\n",
                {"ESPANCAR O SUSPEITO", "DEIXAR O SUSPEITO ESCAPAR", "OBTER INFORMAÇÕES A PULSO"},
                {29, 22, 25}, 3
            },
            { //25
                "paginafuienganado",
                
                "\n  As informações fornecidas pelo suspeito eram falsas, e os"
                "\n  criminosos aproveitaram a confiança de Adam para encobrir"
                "\n  suas atividades.\n"
                
                "\n  Os culpados escapam impunes, a conspiração se aprofunda"
                "\n  e a cidade continua a ser assolada pelos arrombamentos.\n"
                
                "\n  Adam enfrenta a devastação de ter confiado nas informações"
                "\n  erradas, e a verdadeira figura por trás dos crimes" 
                "\n  permanece oculta.\n\n",
                
                {"NOVA JORNADA"},
                {0}, 1
            },
            { //26
                "paginaescape",
                "\n  Adam desiste da investigação e procura por"
                "\n  entretenimento em uma livraria local.\n\n",
                {"CAIR FORA DA ESPELUNCA", "JOGO-LIVRO INTERATIVO"},
                {13, 27}, 2
            },        
            { //27
                "paginalivreto",
                
                "\n  No final da visita à livraria, Adam se depara com um"
                "\n  livro-jogo interativo que captura completamente a sua"
                "\n  atenção. À medida que avança na leitura, uma sensação"
                "\n  peculiar o envolve:\n"
                
                "\n  A história do jogo descreve um detetive que toma as mesmas"
                "\n  decisões que ele, até mesmo as que ele só cogitou fazer.\n"
                
                "\n  Essa descoberta o deixa intrigado, e ele começa a suspeitar"
                "\n  que há uma conspiração muito mais profunda e sinistra"
                "\n  em jogo na sua vida.\n\n",
                
                {"MATRIX · 1923", "NOVA JORNADA", "SAIR DA MATRIX"},
                {28, 0, -3}, 3
            },
            { //28
                "paginabifurcacoesmatrix",
                {"VOLTAR"},
                {27}, 1
            },
            { //29
                "paginaespancar",
                "\n  Após a escalada das hostilidades, o caos se instala no pub."
                "\n  Adam, em sua tentativa de obter informações do invasor, se vê"
                "\n  preso na confusão e acaba detido pelas autoridades locais.\n\n",
                {"NOVA JORNADA", "SAIR DO JOGO"},
                {0, -3}, 2
            },
            { //30
                "paginamibella",
                "\n  Enquanto investigam os vínculos do relacionamento de"
                "\n  Isabella com seu amante, Sandro, Michelle dobra a aposta"
                "\n  e acaba descobrindo que Isabella é, na verdade, a filha de"
                "\n  Don Vincenzo Romano, um mafioso poderoso na cidade.\n\n",
                {"EXTRAIR CONFISSÃO"},
                {31}, 1
            },
            { //31
                "paginaconfissao",
                "\n  Isabella acaba confessando que está sendo ameaçada como parte"
                "\n  dos planos de uma seita que busca influência na máfia local e"
                "\n  ganhar acesso às atividades criminosas de seu pai, Don Vincenzo.\n\n",
                {"DETALHES"},
                {35}, 1
            },
            { //32
                "paginadella",
                
                "\n  Isabella mostrou uma notável resistência em compartilhar"
                "\n  informações com Adam.\n"
                
                "\n  Cada vez que ele tentava se aproximar do cerne do mistério,"
                "\n  ela parecia habilmente desviar suas perguntas ou fornecer"
                "\n  respostas evasivas.\n"
                
                "\n  Ela mantinha uma muralha de segredos em torno de sua vida e"
                "\n  dos perigos que enfrentava, fazendo com que Adam se sentisse"
                "\n  constantemente em desvantagem.\n\n",
                
                {"BLÁ-BLÁ-BLÁ ENCHEU O SACO", "MICHELLE X ISABELLA"},
                {34, 33}, 2
            },
            { //33
                "paginamichella",
                "\n  Michelle sabia que a situação era delicada, e sua abordagem"
                "\n  seria crucial para obter informações valiosas. Com cuidado e"
                "\n  empatia, Michelle começou a dar as suas investidas em Isabella.\n\n",
                {"DOBRAR APOSTA", "ADAM X ISABELLA", "MELHOR TOMAR GORÓ"},
                {30, 32, 9}, 3
            },
            { //34
                "paginacavalo",
                "\n                                            _>>\\.\n"
                "                                            ´/_  )`.\n"
                "  No mundo dos jogos, o jogador             /  _)`^)`.   _.---. _\n"
                "  mais chato muitas vezes é chamado        (_,´ \\  `^·)\"\"      `\\. \n"
                "  de cavalo pelo narrador onisciente.            |              | \\\n"
                "  Por que você pergunta? Porque ele              \\              / |\n"
                "  simplesmente continua a cavalgar              / \\  /.___.'\\  (\\ (_\n"
                "  pelo jogo, causando caos e não               < ,\"||     \\ |`. \\`-´ \n"
                "  se divertindo com ele.                        \\\\ ()      )|  )/\n"
                "                                                |_>|>     /_] //\n"
                "                                                  /_]        /_]\n\n",
                {"MARCHAR PARA TRÁS", "MARCHAR EM RETIRADA"},
                {32, 0}, 2
            },
            { //35
                "paginaquasefinal",
                "\n  Os invasores roubam documentos confidenciais, registros"
                "\n  financeiros e informações pessoais que podem ser usados"
                "\n  como alavancagem contra figuras poderosas da cidade.\n"
                
                "\n  Invasões paralelas foram planejadas para criar distrações" 
                "\n  e desviar a atenção das atividades de chantagem e"
                "\n  conspiração do grupo.\n\n",
                {"AJUDAR ISABELLA", "PROBLEMA DELA"},
                {37, 36}, 2
            },
            { //36
                "paginafodasela",
                "\n  Com Michelle e Adam decidindo deixar Isabella à própria sorte,"
                "\n  ela se vê sozinha em sua luta contra a seita e suas ameaças.\n"
                
                "\n  Isabella, desesperada para proteger a si e à integridade de"
                "\n  seu amante, Sandro, é forçada a tomar decisões difíceis e a"
                "\n  manter um equilíbrio delicado entre proteger seu relacionamento"
                "\n  e ajudar os chantagistas.\n"
                
                "\n  Enquanto isso, as invasões paralelas continuam a criar"
                "\n  distrações na cidade, desviando a atenção das atividades de"
                "\n  chantagem e conspiração do grupo secreto.\n"
                
                "\n  Figuras poderosas da cidade começam a ser alvo das chantagens,"
                "\n  resultando em tensões crescentes e potenciais consequências"
                "\n  devastadoras para a cidade\n\n",
                
                {"MUDAR DE IDEIA E AJUDAR ISABELLA", "ACEITAR AS CONSEQUÊNCIAS"},
                {37, 40}, 2
            },
            { //37
                "paginajuda",
                
                "\n  Michelle, Adam e Isabella se reúnem, formando uma equipe"
                "\n  improvável, trabalham juntos, para investigar e identificar"
                "\n  os membros da seita e coletar evidências contra eles,"
                "\n  conseguindo desvendar os segredos da seita e expor suas"
                "\n  atividades criminosas.\n" 
                
                "\n  Em uma confrontação final com os líderes da máfia, Michelle,"
                "\n  Adam e Isabella, apoiados por evidências irrefutáveis, conseguem"
                "\n  expor a verdade, frustrando os planos conspiratórios e"
                "\n  desmantelando a organização criminosa.\n"
                
                "\n  A cidade é salva do caos instalado pelas chantagens e do"
                "\n  controle da seita, e as figuras poderosas envolvidas podem"
                "\n  ser responsabilizadas por seus crimes.\n\n",
                {"E O CORNO ?", "E A MÁFIA DO ROMANO ?", "SEGREDOS DO JOGO", "RESET", "SAIR DO JOGO"},
                {38, 39, 42, 0, -3}, 5
            },
            { //38
                "paginacasamento",
                "\n  Quanto ao casamento marcado da filha de Don Vincenzo Romano..."
                "\n  bem, este entrou em ruína, após Isabella se mandar para a"
                "\n  Itália com seu amante Sandro.\n\n",
                {"VOLTAR"},
                {37}, 1
            },
            { //39
                "pagina404",
            
                "\n  404\n"
                "  ▓█████  ██▀███   ██▀███   ▒█████▒   ██▀███ \n"
                "  ▓█   ▀ ▓██ ▒ ██▒▓██ ▒ ██▒▒█▒  ▒█▒▒▓██ ▒ ██▒\n"
                "  ▒███   ▓██ ░▄█ ▒▓██ ░▄█ ▒▒██░ ░██▒▓██ ░▄█ ▒\n"
                "  ▒▓█  ▄ ▒██▀▀█▄  ▒██▀▀█▄  ▒██   ██░▒██▀▀█▄  \n"
                "  ░▒████▒░██▓ ▒██▒░██▓ ▒██▒░ ████▓▒░░██▓ ▒██▒\n"
                "  ░░ ▒░ ░░ ▒▓ ░▒▓░░ ▒▓ ░▒▓░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░\n"
                "   ░ ░  ░  ░▒ ░ ▒░  ░▒ ░ ▒░  ░ ▒ ▒░   ░▒ ░ ▒░\n"
                "     ░     ░░   ░   ░░   ░ ░ ░ ░ ▒    ░░   ░ \n"
                "     ░  ░   ░        ░         ░ ░     ░     \n"
                "                               file not found\n"
                
                "\n  Os scripts desta seção foram tragicamente"
                "\n  perdidos quando Kenia se esbarrou nos cabos"
                "\n  do computador no laboratório.\n\n",
                
                {"VOLTAR"},
                {37}, 1
            },
            { //40
                "paginaconsequencias",
                
                "\n  Adam e Michelle  optam por não se envolverem mais na situação"
                "\n  e continuar com suas vidas cotidianas, ignorando as crescentes"
                "\n  tensões na cidade e as atividades da seita.\n"
                
                "\n  Eles acreditam que não é responsabilidade deles lidar com a"
                "\n  situação e tentam manter distância dos acontecimentos.\n\n",
                
                {"NOVA JORNADA", "SAIR DO JOGO"},
                {0, -3}, 2
            },
            { //41
                "paginaideia",
    
                "\n  À medida que a situação na cidade fica insustentável,"
                "\n  Michelle e Adam, consumidos pelo remorso e preocupados"
                "\n  com o destino de Isabella e da cidade, decidem"
                "\n  finalmente se envolver.\n" 
                
                "\n  Eles reconhecem que a seita representa uma ameaça"
                "\n  significativa e que sua ajuda é crucial para impedir"
                "\n  as chantagens e conspirações.\n\n",
    
                {"AJUDAR ISABELLA"},
                {37}, 1
            },
            { //42
                "paginabifurcacoes",
                
                "\n              ___           _,.---,---.,_\n"
                "              |         ,;~'             '~;,\n"
                "              |       ,;                     ;,\n"
                "     Frontal  |      ;                         ; ,--- Supraorbital Foramen\n"
                "      Bone    |     ,'                         /'\n"
                "              |    ,;                        /' ;,\n"
                "              |    ; ;      .           . <-'  ; |\n"
                "              |__  | ;   ______       ______   ;<----- Coronal Suture\n"
                "             ___   |  '/~\"     ~\" . \"~     \"~\\'  |\n"
                "             |     |  ~  ,-~~~^~, | ,~^~~~-,  ~  |\n"
                "   Maxilla,  |      |   |        }:{        | <------ Orbit\n"
                "  Nasal and  |      |   l       / | \\       !   |\n"
                "  Zygomatic  |      .~  (__,.--\" .^. \"--.,__)  ~.\n"
                "    Bones    |      |    ----;' / | \\ `;-<--------- Infraorbital Foramen\n"
                "             |__     \\__.       \\/^\\/       .__/\n"
                "                ___   V| \\                 / |V <--- Mastoid Process\n"
                "                |      | |T~\\___!___!___/~T| |\n"
                "                |      | |`IIII_I_I_I_IIII'| |\n"
                "       Mandible |      |  \\,III I I I III,/  |\n"
                "                |       \\   `~~~~~~~~~~'    /\n"
                "                |         \\   .       . <-x---- Mental Foramen\n"
                "                |__         \\   .       .  \n"
                "                              ^~~~^~~~^        \n\n",
    	        
                {"VOLTAR"},
                {37}, 1   
            },    
        };
        
        int paginaAtual = 0;
        
        // loop principal do jogo-livro
        while (1) {
            mostrarPagina(paginas[paginaAtual]);
        
            int escolha;
            printf("\n  ");
            scanf("%d", &escolha);
        
            if (escolha >= 1 && escolha <= paginas[paginaAtual].num_opcoes) {
                int destino = paginas[paginaAtual].destinos[escolha - 1];
                if (destino == RESET) {
                    getchar();
                    Emblema();
                    Abertura();
                    Miolo();
                    continue; // volta ao início do loop sem avançar para a próxima página
                } else {
                    paginaAtual = destino;
                }
            } else {
                printf("Escolha inválida. Tente novamente.\n");
            }
        
            if (paginaAtual == -1) {
                printf("Fim do jogo.\n");
                break;
            }
        }
    }
    
int main() {
    
    Emblema();
    Abertura();
    Miolo();

    return 0;
}
