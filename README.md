# Projeto Interativo: Seletor de Louvores e Gerador de Versículos

## Visão Geral

Este é um projeto pessoal desenvolvido como parte de estudos e aplicações acadêmicas, focado na prática de desenvolvimento web front-end. Ele combina duas funcionalidades principais em uma experiência de usuário fluida e moderna:

1.  **Seletor de Louvores:** Permite aos usuários escolherem músicas (louvores) de uma lista, visualizar suas letras e ouvir o áudio correspondente.
2.  **Gerador de Versículos:** Apresenta versículos bíblicos aleatórios, buscando inspiração e reflexão através da integração com uma API externa.

Ambas as seções foram desenvolvidas com foco em uma interface limpa, responsiva e agradável, utilizando HTML, CSS e JavaScript puro.

**Propósito do Projeto:**

Este projeto serve como um exercício prático para aplicar e demonstrar habilidades em:
- Manipulação do DOM com JavaScript.
- Consumo de APIs externas (Fetch API).
- Criação de interfaces de usuário interativas e responsivas.
- Estruturação de código HTML, CSS e JavaScript de forma modular.
- Utilização de variáveis CSS para temização e reusabilidade.

## Índice

1.  [Funcionalidades](#funcionalidades)
    *   [Seletor de Louvores](#seletor-de-louvores)
    *   [Gerador de Versículos](#gerador-de-versículos)
2.  [Tecnologias Utilizadas](#tecnologias-utilizadas)
3.  [Estrutura do Projeto](#estrutura-do-projeto)
4.  [Como Executar](#como-executar)
5.  [Personalização](#personalização)
    *   [Adicionando Novos Louvores](#adicionando-novos-louvores)
6.  [Autor](#autor)
7.  [Licença](#licença)

## Funcionalidades

### Seletor de Louvores

-   **Seleção de Músicas:** Um menu dropdown (`<select>`) permite ao usuário escolher entre os louvores disponíveis.
-   **Exibição de Letras:** Ao selecionar uma música e clicar no botão "Ouvir e Ler Letra", a letra correspondente é exibida dinamicamente na página.
-   **Player de Áudio:** Um player de áudio HTML5 (`<audio>`) é carregado com a música selecionada, permitindo play, pause, controle de volume, etc.
-   **Navegação:** Link direto para a seção "Gerador de Versículos".
-   **Design Responsivo:** Adaptado para visualização em diferentes tamanhos de tela.

### Gerador de Versículos

-   **Versículos Aleatórios:** Ao carregar a página ou clicar no botão "Gerar Novo Versículo", um versículo bíblico é buscado e exibido.
-   **Integração com API:** Utiliza a API do [DailyVerses.net](https://dailyverses.net/) para obter os versículos em Português (NVI-PT).
-   **Estilo de Citação:** O texto do versículo é apresentado de forma destacada, como uma citação, para melhor leitura e impacto.
-   **Referência Clara:** A referência do versículo (livro, capítulo e número) é exibida abaixo do texto.
-   **Feedback de Carregamento:** Mensagens indicam o status de carregamento ou possíveis erros na busca do versículo.
-   **Navegação:** Link direto para a seção "Seletor de Louvores".
-   **Design Responsivo.**

## Tecnologias Utilizadas

-   **HTML5:** Estrutura semântica das páginas.
-   **CSS3:** Estilização moderna, layout responsivo (Flexbox, Grid), animações e variáveis CSS para fácil manutenção do tema.
-   **JavaScript (ES6+):** Manipulação dinâmica do DOM, interatividade, lógica de seleção de músicas, consumo de API (Fetch API) e controle do player de áudio.
-   **Google Fonts:** Para as fontes `Manrope` e `Inter`, proporcionando uma tipografia elegante e legível.
-   **DailyVerses API:** Para o fornecimento dos versículos bíblicos.

## Estrutura do Projeto

```
/meu_projeto/
├── index.html                     # Página principal (Seletor de Louvores)
├── script.js                      # JavaScript para o Seletor de Louvores
├── style.css                      # CSS Global (variáveis, reset, estilos base)
├── seletor-louvores/
│   └── style.css                  # CSS específico para o Seletor de Louvores
├── gerador-versiculos/
│   ├── index.html                 # Página do Gerador de Versículos
│   ├── script.js                  # JavaScript para o Gerador de Versículos
│   └── style.css                  # CSS específico para o Gerador de Versículos
└── README.md                      # Este arquivo
```

## Como Executar

1.  Clone ou faça o download deste repositório.
2.  Abra o arquivo `index.html` (localizado na raiz do projeto) em qualquer navegador web moderno (Chrome, Firefox, Edge, Safari).
3.  Para acessar o Gerador de Versículos, clique no link correspondente na página do Seletor de Louvores, ou abra diretamente o arquivo `gerador-versiculos/index.html`.

**Observação:** O Gerador de Versículos requer uma conexão com a internet para buscar os versículos da API.

## Personalização

### Adicionando Novos Louvores

Para adicionar novas músicas ao "Seletor de Louvores":

1.  **Adicione o arquivo de áudio:** Coloque o novo arquivo MP3 na pasta `musicas/` (se você criou uma, ou ajuste o caminho no script).
2.  **Edite o arquivo `script.js` (na raiz do projeto):**
    *   No objeto `musicas`, adicione um novo título em `musicas.titulo`.
    *   Adicione a letra completa em `musicas.letra`.
    *   Adicione o nome do artista em `musicas.artista`.
    *   Adicione o caminho para o novo arquivo de áudio em `musicas.audio` (se implementado).

    Exemplo de adição para uma música "4":
    ```javascript
    const musicas = {
      titulo: {
        "1": "Bençãos que não tem fim",
        // ... outras músicas ...
        "4": "Novo Louvor Maravilhoso"
      },
      letra: {
        "1": `Letra da música 1...`,
        // ... outras letras ...
        "4": `Letra completa do novo louvor...`
      },
      artista: {
        "1": "Isadora Pompeo",
        // ... outros artistas ...
        "4": "Artista do Novo Louvor"
      },
      audio: {
        "1": "musicas/Isadora Pompeo - Bençãos Que Não Têm Fim (Counting My Blessings).mp3",
        // ... outros áudios ...
        "4": "musicas/caminho_para_o_novo_louvor.mp3" // Exemplo
      }
    }
    ```
3.  **Edite o arquivo `index.html` (na raiz do projeto):**
    *   Adicione uma nova `<option>` dentro do `<select id="seletor-louvores">`:
    ```html
    <select id="seletor-louvores" aria-label="Selecione um louvor">
      <!-- ... outras opções ... -->
      <option value="4">Novo Louvor Maravilhoso</option>
    </select>
    ```

## Autor

Desenvolvido por **Fernando Thomaz**

-   GitHub: [thomazip](https://github.com/thomazip)

