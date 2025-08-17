# Levantamento de Requisitos - SaaS Pareamento Card Games

> **Status**: Draft  
> **Data**: 17/08/2025  
> **Versão**: 1.0

## 1. Visão Geral do Produto

### Propósito
Sistema SaaS para criação e gerenciamento de chaves de pareamento para campeonatos de card games, com funcionalidades para cadastro de jogadores, decks e organização de torneios.

### Stack Tecnológica
- **Frontend**: Next.js
- **Backend**: Next.js API Routes
- **Banco de Dados**: PostgreSQL

## 2. Funcionalidades Principais

### MVP (Versão Inicial)
- Cadastro e gerenciamento de jogadores
- Criação e configuração de campeonatos
- Geração automática de chaves de pareamento
- Acompanhamento de resultados das partidas

### Futuras Implementações
- Cadastro e gerenciamento de decks por jogador
- Análise de meta-game
- Estatísticas avançadas
- Sistema de ranking

## 3. Requisitos Funcionais

### 3.1 Gerenciamento de Jogadores
- **RF001**: Cadastrar jogador com informações básicas (nome, email, nickname)
- **RF002**: Editar informações do jogador
- **RF003**: Visualizar lista de jogadores cadastrados
- **RF004**: Buscar jogadores por nome/nickname
- **RF005**: Desativar/reativar jogadores

### 3.2 Gerenciamento de Campeonatos
- **RF006**: Criar novo campeonato com configurações básicas
- **RF007**: Definir formato do torneio (eliminação simples, dupla, round robin)
- **RF008**: Configurar número máximo de participantes
- **RF009**: Definir data/hora do evento
- **RF010**: Inscrever jogadores no campeonato
- **RF011**: Gerar chave de pareamento automaticamente
- **RF012**: Visualizar bracket/chave do torneio

### 3.3 Controle de Partidas
- **RF013**: Registrar resultado das partidas
- **RF014**: Avançar jogadores para próximas fases
- **RF015**: Determinar campeão automaticamente
- **RF016**: Histórico de partidas do campeonato

### 3.4 Futuro - Gerenciamento de Decks
- **RF017**: Cadastrar deck por jogador
- **RF018**: Associar deck específico a um campeonato
- **RF019**: Visualizar composição do deck
- **RF020**: Estatísticas de performance por deck

## 4. Requisitos Não Funcionais

### 4.1 Performance
- **RNF001**: Sistema deve suportar até 100 jogadores simultâneos por campeonato
- **RNF002**: Tempo de resposta máximo de 2 segundos para operações básicas
- **RNF003**: Geração de chaves deve ocorrer em menos de 5 segundos

### 4.2 Usabilidade
- **RNF004**: Interface responsiva para desktop e mobile
- **RNF005**: Sistema intuitivo, sem necessidade de treinamento
- **RNF006**: Suporte a português brasileiro

### 4.3 Confiabilidade
- **RNF007**: Disponibilidade de 99% do tempo
- **RNF008**: Backup automático dos dados
- **RNF009**: Sistema de logs para auditoria

### 4.4 Segurança
- **RNF010**: Autenticação de usuários
- **RNF011**: Autorização por níveis (admin, organizador, jogador)
- **RNF012**: Criptografia de dados sensíveis

## 5. Modelo de Dados

### 5.1 Principais Entidades

#### Tabela: players
- id (PK)
- name
- email
- nickname
- created_at
- updated_at
- active

#### Tabela: championships
- id (PK)
- name
- description
- format (elimination_simple, elimination_double, round_robin)
- max_participants
- status (draft, open, in_progress, finished)
- start_date
- end_date
- created_at
- updated_at

#### Tabela: championship_players
- id (PK)
- championship_id (FK)
- player_id (FK)
- registration_date
- position_final

#### Tabela: matches
- id (PK)
- championship_id (FK)
- player1_id (FK)
- player2_id (FK)
- winner_id (FK, nullable)
- round_number
- match_order
- status (pending, in_progress, finished)
- created_at
- updated_at

#### Tabela: decks (Futuro)
- id (PK)
- player_id (FK)
- name
- format
- deck_list (JSON)
- created_at
- updated_at

#### Tabela: championship_decks (Futuro)
- id (PK)
- championship_id (FK)
- player_id (FK)
- deck_id (FK)

### 5.2 Relacionamentos
- Um jogador pode participar de vários campeonatos
- Um campeonato pode ter vários jogadores
- Um jogador pode ter vários decks
- Cada participação em campeonato pode usar um deck específico
- Uma partida relaciona dois jogadores em um campeonato específico

## 6. Casos de Uso Principais

### 6.1 Criar Campeonato
1. Organizador acessa sistema
2. Clica em "Novo Campeonato"
3. Preenche informações básicas
4. Define formato e configurações
5. Salva campeonato como rascunho

### 6.2 Inscrever Jogadores
1. Organizador abre campeonato
2. Adiciona jogadores da lista ou cadastra novos
3. Confirma inscrições
4. Sistema valida número máximo de participantes

### 6.3 Gerar Chave de Pareamento
1. Organizador finaliza inscrições
2. Sistema valida pré-requisitos
3. Gera pareamentos baseado no formato escolhido
4. Exibe chave para conferência
5. Confirma e inicia campeonato

### 6.4 Registrar Resultados
1. Organizador ou jogador acessa partida
2. Informa resultado
3. Sistema valida entrada
4. Atualiza chave automaticamente
5. Avança vencedor para próxima fase

## 7. Regras de Negócio

### 7.1 Campeonatos
- **RN001**: Campeonato só pode ser iniciado com número par de jogadores (para eliminação simples)
- **RN002**: Apenas organizador pode alterar resultados
- **RN003**: Jogador não pode ser removido após início do campeonato
- **RN004**: Campeonato finalizado não pode ser alterado

### 7.2 Pareamentos
- **RN005**: Sistema deve evitar rematches quando possível
- **RN006**: Em caso de número ímpar, um jogador recebe "bye"
- **RN007**: Seeding inicial pode ser aleatório ou manual

## 8. Integrações Futuras

### 8.1 Possíveis Integrações
- API de card games específicos para validação de decks
- Sistema de pagamento para inscrições
- Notificações via email/SMS
- Streaming/broadcast integration
- Exportação para plataformas de torneios

## 9. Monetização

### 9.1 Modelos Possíveis
- Freemium (campeonatos limitados gratuitos)
- Assinatura mensal/anual
- Taxa por campeonato
- Funcionalidades premium (estatísticas avançadas, customização)

## 10. Próximos Passos

1. **Prototipagem**: Criar wireframes das telas principais
2. **Arquitetura**: Definir estrutura do projeto Next.js
3. **Banco de Dados**: Criar scripts de migração PostgreSQL
4. **MVP**: Implementar funcionalidades básicas primeiro
5. **Testes**: Validar com comunidade de card games local
