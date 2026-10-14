# Raízes do Nordeste — Etapa 18

Projeto acadêmico de Front-end para a Rede Raízes do Nordeste.

## Stack
- HTML5 semântico
- CSS3 responsivo / mobile-first
- JavaScript
- localStorage para mock de dados
- Integração de pagamento apenas simulada

## Etapa 8
- Página de Privacidade e LGPD
- Melhorias de foco e navegação por teclado
- Mensagens de validação e estados de erro
- Respeito a `prefers-reduced-motion`
- Meta descriptions e labels/ARIA nas áreas principais
- Avisos explícitos sobre dados fictícios e pagamento simulado

## Como executar
Abra `index.html` no navegador. Para publicação, o projeto pode ser hospedado no GitHub Pages.

> Ambiente acadêmico: não inserir dados bancários, senhas reais ou informações sensíveis.

## Etapa 9 — Testes e publicação
- Plano de testes: `TESTES.md`
- Guia de publicação: `GITHUB_PAGES.md`
- Controle de versão: Git/GitHub
- Hospedagem prevista: GitHub Pages

## Correções da Etapa 9.1
- Seleção de unidade corrigida: as unidades agora aparecem corretamente e podem ser pesquisadas por nome ou endereço.
- O cardápio não assume mais a Unidade Centro quando nenhuma unidade foi escolhida.
- O usuário é direcionado para a seleção de unidade antes de adicionar produtos.
- Área administrativa protegida por login simulado com sessão no navegador.
- Incluído logout administrativo.
- Imagens do cardápio foram mantidas como fotografias ilustrativas externas; descrições continuam sendo a referência textual do produto.


### Etapa 12 — Imagens de produtos
O painel administrativo permite substituir a imagem de um produto escolhendo um arquivo local (JPG, PNG ou WEBP, até 2 MB) ou informando uma URL. O arquivo local é convertido para Data URL e armazenado no localStorage para a demonstração acadêmica, com pré-visualização antes do salvamento.

## Etapa 13 — Persistência de produtos
- Produtos administrados usam `localStorage` como fonte única de dados no front-end.
- Edição e cadastro permitem imagem por arquivo (Base64) ou URL.
- Status ativo/inativo é persistido e respeitado pelo cardápio.
- Alterações de nome, descrição, preço, categoria e imagem permanecem após recarregar a página.

## Armazenamento de imagens — Etapa 15
As imagens escolhidas pelo painel administrativo não são mais armazenadas em `localStorage`. O projeto utiliza IndexedDB para os arquivos de imagem e mantém no `localStorage` apenas os dados leves dos produtos. Isso evita atingir rapidamente o limite de armazenamento do navegador ao cadastrar várias fotos.


### Auditoria e correções — Etapa 16
- Pedidos aprovados agora são registrados na coleção `orders`, permitindo que o painel administrativo visualize e altere o status.
- Checkout passou a demonstrar os três retornos do serviço externo: aprovado, recusado e indisponível.
- Perfil ganhou histórico de pedidos e limpeza dos dados simulados.
- Painel administrativo ganhou configuração demonstrativa de fidelidade (RF20).
- A modalidade continua sendo retirada na unidade; delivery permanece fora do escopo.

### Etapa 17 — Experiência multicanal
- Criada `pages/canais.html` para demonstrar Web, App e Totem.
- Documentada a adaptação de interface por contexto de uso em `MULTICANAL.md`.
- Jornada principal apresentada em um único fluxo visual.
- Corrigidos links de Promoções e Unidades na página inicial.


### Etapa 18 — Auditoria e rastreabilidade
- Auditoria da solução contra a rubrica oficial em `AUDITORIA_RUBRICA.md`.
- Matriz de rastreabilidade RF01–RF24 em `MATRIZ_RF.md`.
- Fluxos de pagamento aprovado, recusado e indisponível revisados.
- Pedido aprovado passa a ser registrado corretamente no histórico.
- Testes 19–23 adicionados ao plano de validação.
