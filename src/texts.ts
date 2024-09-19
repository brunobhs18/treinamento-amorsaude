

interface TextosProps {
    num: number;
}

interface ConteudoProps {
    count: number;
}

export function Textos({ num }: TextosProps) {
    switch (num) {
        case 1:
            return "Digite seu Usuário: Clique dentro do campo e digite seu usuário."
        case 2:
            return "Digite sua Senha: Clique dentro do campo e digite sua senha."
        case 3:
            return "Clique em Entrar ou Aperte Enter: Após preencher os campos de usuário e senha, clique no botão 'Entrar'. Alternativamente, você pode simplesmente apertar a tecla 'Enter' no seu teclado."
        case 4:
            return "Permita o acesso ao microfone."
        case 5:
            return "Clique em 'Iniciar Atendimento': Para começar a receber novos casos ou tratar casos em aberto no Backlog. "
        case 6:
            return "EM CONSTRUÇÃO! EM BREVE TODO O PASSO A PASSO!"
        // case 6:
        //     return "Clique em 'Acessar': Para logar no canal de voz."
        // case 7:
        //     return "Sua tela irá ficar desse jeito até ser atribuído um caso a você."
        // case 8: 
        //     return "Criar Caso Manual: Você pode clicar nesse botão para criar um novo caso! "
        // case 9:
        //     return "Selecione o Formulário de criar Caso Manual. E no opção de nome do paciente pode fazer uma busca pelo nome, contanto ou documento do paciente, caso o mesmo já esteja cadastrado no cVortex."
        // case 10:
        //     return "Se o paciente não tiver cadastrado, poderá inserior o cadastro dele clicando no botão azul com icone de boneco."
        // case 11: 
        //     return "Insira o nome do paciente, documento é opcional, e clique em Adicionar Contato para conseguir incluir o Telefone."
        // case 12: 
        //     return "Agora basta clicar em Cria caso que ele será gerado na sua tela."
        // case 13: 
        //     return "Quando um caso é atribuído a você perceba que temos a sua esquerda as informações do caso."
        // case 14: 
        //     return "Acima das informações temos os dados do contato."
        // case 15: 
        //     return "A sua direita temos as ações disponíveis para o tratamemto do caso."
    }

}

export function TexDiv({ num }: TextosProps) {
    let a
    switch (num) {
        case 0:
            return a = `mt-[1.5%] w-[25%] h-[20%] ml-[38%] visible`
        case 1:
            return a = `mt-[2.5%] w-[25%] h-[8%] ml-[12.05%]`
        case 2:
            return a = `mt-[7.3%] w-[25%] h-[8%] ml-[12.05%]`
        case 3:
            return a = `mt-[6.25%] w-[12%] h-[6%] ml-[25.6%]`
        case 4:
            return a = `mt-[2.43%] w-[17.5%] h-[6.25%] ml-[9.33%]`
        case 5:
            return a = `mt-[4.5%] w-[10.5%] h-[6.25%] ml-[44.6%]`
    }
}

export function ContentDiv({ num }: TextosProps) {
    let a
    switch (num) {
        case 0:
            return a = `mt-[10.49%] ml-[9.6%] invisible`
        case 1:
            return a = `mt-[10.49%] ml-[9.6%] `
        case 2:
            return a = `mt-[11.49%] ml-[9.6%] `
        case 3:
            return a = `mt-[16.5%] ml-[9.6%]`
        case 4:
            return a = `ml-[17%]`
        case 5:
            return a = `mt-[20.65%] ml-[32%] `
    }

}

export function ImagenText({ num }: TextosProps) {
    let a: string = '';
    if (num < 4) {
        a = `/Inicio.png`;
    } else if (num === 4) {
        a = `/Tela2.png`;
    } else if (num > 4) {
        a = `/Tela3.png`;
    }

    return a;

}

export function ConteudoDiv({ count }: ConteudoProps){
    switch (count) {
        case 1:
            return  '<h1 style="text-align: center; margin: 2rem; font-size: 1.6rem; font-weight: bold">Entrando no Ambiente cVortex </h1><p style="text-align: justify; padding: 2rem">Antes de iniciarmos e visualizarmos a nossa página de <strong>LogIn</strong>, precisamos saber que todas as funcionalidades da nossa plataforma cVortex são otimizadas e homologadas para o navegador <strong>Google Chrome</strong>, então para garantir uma melhor experiência recomendamos o seu uso. O uso de outros navegadores pode resultar em comportamento inadequado da plataforma.<br>Com o seu navegador aberto acesse a página www.amorsaude.cvortex.com, essa é a nossa página de LogIn. Na primeira opção onde está escrito <strong>Usuário</strong> coloque o seu usuário e abaixo onde está escrito <strong>Senha</strong> insira a sua senha, após isso clique no <strong>Botão Entrar</strong> e assim temos a visualização da primeira página de atendimento.<br>Para praticar vamos fazer os passos indicados acima entrando no <strong>Ambiente de Treinamento</strong>, para isso clique no link <a style="color:blue" href="https://amorsaude-treinamento.cvortex.com/" target="blank">https://amorsaude-treinamento.cvortex.com/</a> ou digite em uma nova aba. Para entrar, o seu usuário será o que lhe foi enviado.<br>Após clicar no Botão Entrar a sua plataforma de atendimento será carregada, logo ao abrir receberá uma notificação de permissão para uso do microfone, clique em permitir para garantir o acesso ao seu microfone pela plataforma.<br>Para dar início a sua jornada de atendimento teremos duas opções a sua disposição, sendo elas atendimento via texto e via voz. Para iniciarmos o por canais de texto será necessário clicar no Botão Central na Tela <strong>Iniciar Atendimento</strong>.<br>Já para começarmos o Atendimento por Voz, precisaremos nos direcionar ao canto superior esquerdo, se necessário inserir a senha no Campo Senha, e clicar no <strong>Botão Acessar</strong> </p>'
        case 2:
            return '<h1 style="text-align: center; margin: 2rem; font-size: 1.6rem; font-weight: bold">Primeiro atendimento</h1> <p style="text-align: justify; padding: 2rem">Chegamos ao ponto da nossa jornada de treinamento em que abriremos o nosso primeiro caso de atendimento. Se você ainda não entrou no seu ambiente de treinamento cVortex, volte a pagina anteriors e veja o que fazer para entrar.<br>Ao entrar você deve ter percebido que no seu ambiente cVortex de treinamento já existe um caso criado. Acompanhe o vídeo e explore as opções no seu ambiente de atendimento.</p> <div style="display: flex; justify-content: center"><iframe width="560" height="315" src="https://www.youtube.com/embed/BLBgEnA61Kw?si=NIqVhV7lWxrvkLGx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
        case 4:
            return '<h1 style="text-align: center; margin: 2rem; font-size: 1.6rem; font-weight: bold">Enviando mensagem no canal de texto</h1><p style="text-align: justify; padding: 2rem">Compreender como funcionam as formas de envio de mensagem é um ponto crucial para ter o domínio da sua ferramenta de trabalho. No vídeo abaixo explicaremos como você pode otimizar o seu tempo, usando mensagens pré-definidas, encaminhando áudios e ou arquivos para seu cliente. Lembre-se de acompanhar o conteúdo explorando o seu ambiente de treinamento.</p><div style="display: flex; justify-content: center"><iframe width="560" height="315" src="https://www.youtube.com/embed/D9B5p_XtCPA?si=ajCNqEj26tS3AJUs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
        case 5:
            return '<h1 style="text-align: center; margin: 2rem; font-size: 1.6rem; font-weight: bold">Ações de Atendimento</h1><p style="text-align: justify; padding: 2rem">Durante um atendimento pode ser necessário a realização de alguma ação, seja ela confirmar um agendamento ou transferir a ligação para outro setor responsável. Pensando nisso, no vídeo abaixo, explicamos as ações disponíveis e como usá-las.</p><div style="display: flex; justify-content: center"><iframe width="560" height="315" src="https://www.youtube.com/embed/f-x7aro8Q58?si=_s_KiHjZUhOPTldx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
        case 6:
            return '<h1 style="text-align: center; margin: 2rem; font-size: 1.6rem; font-weight: bold">Criando Atendimento</h1><p style="text-align: justify; padding: 2rem">No seu dia a dia de trabalho pode ser necessário criar um atendimento manualmente, dentro do ambiente cVortex existem diferentes formas de criar um atendimento manual. No vídeo abaixo você pode acompanhar a explicação das opções disponíveis para criação de caso e como iniciar o atendimento do mesmo. No seu ambiente de treinamento crie um caso manual no canal de texto, para isso use a opção que adiciona um usuário, cadastre um com o seu número de WhatsApp e veja como é a interação na visão do cliente e na visão do atendente.</p><div style="display: flex; justify-content: center"><iframe width="560" height="315" src="https://www.youtube.com/embed/8iXODGrqwdc?si=nldUB3wMZGsTG77a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
        case 7:
            return '<h1 style="text-align: center; margin: 2rem; font-size: 1.6rem; font-weight: bold">Solicitando Pausa e Fazendo LogOut</h1><p style="text-align: justify; padding: 2rem">Uma das funções mais usadas pelo atendente é a PAUSA, seja para ir ao almoço ou uma pausa de emergência. Apesar de ser algo simples de entender e de usar, é importante que seja mostrado como é o seu funcionamento dentro da plataforma. Outra função que também será usada diariamente é a Logout, que dentro da plataforma está com o nome de FINALIZAR JORNADA, neste vídeo te mostraremos onde encontrar essa função.</p><div style="display: flex; justify-content: center"><iframe width="560" height="315" src="https://www.youtube.com/embed/A9i8yRmbKkg?si=x1FYrazE-zWOWLlH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
        case 8:
            return '<h1 style="text-align: center; margin: 2rem; font-size: 1.6rem; font-weight: bold">Formas de Atendimento pelo Canal de Voz</h1><p style="text-align: justify; padding: 2rem">O cVortex é um ambiente completo para o seu atendimento, por isso não poderia faltar dentro do nosso treinamento o atendimento pelo Canal de Voz. No vídeo abaixo te explicaremos todas as funções do atendimento por voz, como colocar a chamada em espera, como transferir a chamada, como iniciar um atendimento fazendo uma ligação e muitas outras funções. Por esse conteúdo ser um pouco mais denso, fique bem atento, se necessário reveja o vídeo, explore as mesmas opções no seu ambiente de treinamento simulando uma ligação para o seu número.</p><div style="display: flex; justify-content: center"><iframe width="560" height="315" src="https://www.youtube.com/embed/Z9C4gZHS_l0?si=bVQSB-nnWlFuNqFz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
        case 9:
            return '<h1 style="text-align: center; margin: 2rem; font-size: 1.6rem; font-weight: bold">Dicas e Extras: O que fazer antes de abrir um chamado</h1><p style="text-align: justify; padding: 2rem">Diariamente os atendentes abrem chamados e ou enviam mensagens para nossos analistas, em geral para resolverem situações as quais são de simples resolução. Pensando nesses casos, fizemos esse vídeo de dicas simples para que vocês tenham mais conhecimento e autonomia dentro do seu ambiente.</p><div style="display: flex; justify-content: center"><iframe width="560" height="315" src="https://www.youtube.com/embed/mqX4slaxxTA?si=x4JKETwTe35Xm9IQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>'
        default: 
            return ''

        }
}