# Etapa 9 — Plano de Testes e Preparação para Publicação

## 1. Objetivo
Validar os principais fluxos do protótipo da Rede Raízes do Nordeste antes da publicação, verificando funcionalidade, usabilidade, responsividade, acessibilidade, privacidade e consistência dos dados simulados.

## 2. Ambiente de teste
- Navegadores: Chrome, Edge e Firefox (versões atuais).
- Dispositivos: celular, tablet e desktop.
- Tecnologias: HTML5, CSS3, JavaScript e localStorage.
- Pagamento: exclusivamente simulado; nenhum dado bancário real deve ser utilizado.

## 3. Casos de teste
| ID | Cenário | Procedimento | Resultado esperado |
|---|---|---|---|
| T01 | Seleção de unidade | Acessar Unidades e selecionar uma unidade | Unidade é armazenada e o cardápio correspondente é aberto |
| T02 | Busca de produto | Pesquisar pelo nome de um produto | Apenas itens compatíveis são exibidos |
| T03 | Filtro por categoria | Selecionar uma categoria | Catálogo é filtrado corretamente |
| T04 | Adicionar produto | Clicar em adicionar ao carrinho | Produto e quantidade aparecem no carrinho |
| T05 | Alterar quantidade | Usar + e - no carrinho | Quantidade e total são atualizados |
| T06 | Remover produto | Remover um item | Item desaparece e valores são recalculados |
| T07 | Cupom | Aplicar RAIZES10 | Desconto demonstrativo é aplicado |
| T08 | Fidelidade | Usar pontos disponíveis | Desconto de fidelidade aparece no total |
| T09 | Checkout | Preencher dados obrigatórios | Formulário permite avançar somente com dados válidos |
| T10 | LGPD | Tentar finalizar sem consentimento | Sistema impede a conclusão e informa a necessidade do consentimento |
| T11 | Pagamento aprovado | Selecionar uma forma e finalizar com retorno aprovado | Pedido é registrado e número é exibido |
| T19 | Pagamento recusado | Selecionar retorno recusado | Sistema não confirma pedido e informa tentativa/forma alternativa |
| T20 | Serviço indisponível | Selecionar retorno indisponível | Sistema informa falha de comunicação e permite nova tentativa |
| T12 | Pedido | Após pagamento aprovado, abrir acompanhamento | Número e status do pedido são exibidos |
| T13 | Status operacional | Alterar status no painel administrativo | Status atualizado para o fluxo da cozinha |
| T14 | Cadastro | Criar conta com dados válidos | Cliente fica autenticado no protótipo |
| T15 | Login | Entrar com cadastro existente | Perfil do cliente é carregado |
| T16 | Responsividade | Redimensionar para mobile/tablet/desktop | Conteúdo permanece utilizável sem rolagem horizontal indevida |
| T17 | Teclado | Navegar usando Tab/Enter | Elementos interativos possuem foco visível e podem ser acionados |
| T18 | Privacidade | Abrir Política de Privacidade | Informações sobre finalidade, consentimento e dados são apresentadas |

## 4. Critérios de aceite
- Nenhum fluxo principal deve apresentar link local quebrado.
- Formulários devem indicar campos obrigatórios e mensagens de erro.
- Dados de pagamento devem permanecer apenas como simulação local.
- O consentimento de privacidade deve ser explícito.
- O layout deve funcionar em telas pequenas e grandes.
- A navegação principal deve permanecer compreensível.

## 5. Checklist antes do GitHub Pages
- [ ] Testar `index.html`.
- [ ] Testar seleção de unidade.
- [ ] Testar cardápio e carrinho.
- [ ] Testar checkout e pagamento simulado.
- [ ] Testar acompanhamento do pedido.
- [ ] Testar cadastro/login/perfil/fidelidade.
- [ ] Testar painel administrativo.
- [ ] Testar política de privacidade.
- [ ] Conferir console do navegador sem erros JavaScript.
- [ ] Conferir links internos.
- [ ] Conferir imagens externas.
- [ ] Criar repositório público no GitHub.
- [ ] Publicar com GitHub Pages.
- [ ] Abrir a URL pública em janela anônima e repetir o fluxo principal.

## 6. Limitações conhecidas
Este projeto é um protótipo acadêmico front-end. Não existe banco de dados ou back-end real, a autenticação é simulada com localStorage e o pagamento não é processado por uma instituição financeira. A integração externa é representada conceitualmente para demonstrar o fluxo de solicitação, processamento e retorno.

## Validação adicional — Etapa 18

19. **Pagamento recusado:** selecionar o retorno simulado `recusado`; esperado: pedido não é confirmado, número não é gerado e mensagem orienta nova tentativa.
20. **Pagamento indisponível:** selecionar `indisponível`; esperado: pedido não é confirmado e a interface informa falha de comunicação com o serviço externo.
21. **Pagamento aprovado e histórico:** selecionar `aprovado`; esperado: pedido recebe ID, aparece no histórico e fica disponível para acompanhamento.
22. **Atualização administrativa do pedido:** alterar status no painel; esperado: o novo status é persistido no navegador.
23. **Limpeza de dados:** usar a ação de limpeza do perfil; esperado: dados simulados de usuário, carrinho, pedidos e preferências são removidos.
