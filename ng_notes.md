# angular top down

- angular components
- dependency injection
- fine-grained model, signals
- server side rendering (SSR), static site generation (SSG), DOM hydration, defer -> good performance metrics, SEO
- single page applications (SPA), routing
- forms: reactive and template-driven
- angular cli (check the stackblitz tool)
- angular browser devtools
- angular language service for IDE
- suitability for scale
- internationalization
- pipeline, vite, esbuild
- open-source

# Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD

## Aula 1

- **def**: focado em criação de SPA (Single Page Application), porém completo, plataforma de desenv integrada
- **links**:

  - ng cheatsheet: https://cheatography.com/jakblak/cheat-sheets/angular-cli/
  - repo alura https://github.com/alura-cursos/2438-angular-memoteca/tree/aula-6/src
  - assets https://cdn3.gnarususercontent.com.br/2438-angular-comecando-framework/01/imagens-angular.zip
  - figma https://www.figma.com/community/file/1418670443401480388
  - docs cli https://v17.angular.io/cli

- **versions & setup**

  - node 16.14.2
  - npm 8.5.0
  - nvm 0.40.1
  - `npm install -g @angular/cli@14.0.0` instalação glob., permite ng no terminal, otherwise, "npx ng \<comando\>"
  - `ng new memoteca` create project
  - `ng serve` similar ao live server, roda proj no browser

- **estrutura de arquivos**

  - .root
    - `angular.json` do projeto angular
    - `karma.conf.js` do executor de testes
    - `package.json` dependências do projeto, configs do node
    - `.browserslistrc` lista de browsers suportados
    - `tsconfig.app.json` conf do TS
    - `tsconfig.json` conf do TS
    - `tsconfig.spec.json` conf do TS
    - `node_modules` dir padrão de dependências
    - `src` arquivos do projeto, user defined
      - `assets` dir de assets padrão
      - `environments` dir de conf de amb de desenv e prod
      - `index.html` home de html a single page que foi gerada
      - `main.ts` home de ts/js
      - `styles.css` home de css, apenas estilos globais cada componente tem arquivo próprio)
      - `polyfills.ts` funções que ajudam na compatib. com browsers
      - `test.ts` arq. do karma para exec de testes
      - `app` root dos components do projeto
        - `app.component.html` root template que usa as tags de componentes para estruturar o projeto
        - `app.component.css` estilos globais do projeto
        - `app.component.ts` \* home do componente ts
        - `app.component.spec.ts` especificações de testes unitários
        - `app-routing.module.ts` configurar rotas da aplicação
        - `app.module.ts` \*\* organização lógica da aplicação
        - `home` diretório de um componentes com nome "home"
          - `home.component.ts` ts do component
        - `home.component.css` css específico do component
          - `home.component.html` template do component
          - `home.component.spec.ts` conf de testes

- **app.component.ts** e todos os .ts de component

  - `@component` anotation usada sobre a classe que definirá o component. contém as properties abaixo
  - `selector` nome da tag html que representará todo o template do component. se usada em outro template, injetará o código integralmente
  - `templateUrl` caminho até o template do component
  - `styleUrls` lista de caminhos p/ arq. css do component

- **app.module.ts**

  - `declarations` lista das classes dos componentes
  - `imports` ??
  - `providers` ??
  - `bootstrap` declara classe que será ponto inicial da aplicação
  - o main.ts é real ponto de entrada e executa o AppModule via:
    `platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));`
  - o app.module.ts executa a classe definida na propriedade 'bootstrap':
    `bootstrap: [AppComponent]`
    - o app component renderiza o root template (tag \<app-root\>) e estilos definidos na anotation @Component

- **criar novo componente**
  - `ng generate component nomeDoComponente`
  - `ng g c nomeDoComponente`
    - cria pasta 'nomeDoComponente' dentro da pasta 'app' contendo o .html, .css, .ts e .spec.ts
    - no .ts, cria a classe 'NomeDoComponente'
    - adiciona nome da nova classe declarations do 'app.module.ts'

# Aula 2

- **one-way property binding**
  - serve para enviar valores do component.ts para o template.html, conectando variáveis do componente às propriedades dos elementos HTML dinâmicos.
  - Atributos são definidos no HTML, são estáticos e utilizados apenas na leitura inicial do elemento.
  - Já as propriedades são a representação dinâmica desses atributos no DOM e podem ser modificadas programaticamente durante a execução da aplicação.
  - e.g. msgErro é uma variável definida no component.ts.
  - injetar texto diretamente: usar interpolação
    - `<span>Mensagem de erro!</span>` -----> `<span>{{ msgErro }}</span>`
    - `<input value='Meu texto! ' />` -----> `<input value={{ msgErro }}' />`
  - modificar atributo do html
    - `<input value='Meu texto! ' />` -----> `<input [value]='msgErro' />`
  - misturando literais e variáveis - `<input [value]="'Erro: ' + msgErro" />` - `<span>meu texto {{ msgErro }} aqui</span>`
  - exemplos equivalentes:
    ```
    <div class="card-perfil">
    <p>{{usuario.nome}}</p>
    <img src="{{usuario.imgPerfil}}" alt="Imagem de perfil">
    </div>
    ```
    e
    ```
    <div class="card-perfil">
    <p [textContent]="usuario.nome"></p>
    <img [src]="usuario.imgPerfil" alt="Imagem de perfil">
    </div>
    ```
- **event binding**

  - parecido com addEventListener(trigger, func)
  - sintaxe usada para condicionar um comportamento do html a um evento:

  ```
  <div class="acoes">
      <button class="botao">Salvar</button>
      <button class="botao">Cancelar</button>
    </div>
  ```

  vira

  ```
    <div class="acoes">
      <button (click)='criarPensamento()' class="botao">Salvar</button>
      <button (click)='cancelarPensamento()' class="botao">Cancelar</button>
    </div>
  ```

  - mnemônico

  ```
  TEMPLATE ------------------- COMPONENT

      <--- {{ var }}
      <--- [propr] = 'var'

            (evento)='metodo()' --->
            [(ngModel)]='propr' --->

  ```

- **two-way data binding**
  - diretivas:
    - classes declaradas com o decorator @Directive
    - conseguem modificar os elementos na aplicação
  - 2W binding:
    - se o valor da variável mudar no componente, o template é atualizado. se o usuário alterar o valor no template (por exemplo, digitando em um input), o valor da variável no componente também é atualizado.
    - O Angular está fazendo binding de propriedade ([value]="nome") e binding de evento ((input)="nome = $event.target.value") ao mesmo tempo — por isso a sintaxe especial com colchetes e parênteses: [(...)]
  - usa a diretiva ngModel para alterar a propriedade "value"
    - 1W binding: `[value] = 'pensamento.id'`
    - 1W binding: ` value =  {{ pensamento.id }}`
    - 2W binding: `[(ngMode)] = 'pensamento.conteudo'`
  - O evento input do DOM é disparado sincronicamente quando o valor (`value`) de um elemento \<input\>, \<select\>, ou \<textarea\> é alterado.

# Aula 3

- **Arquivo de rotas**

  - configura as mudanças de tela/apresentação da aplicação
  - define rotas entre componentes
  - `app-routing.module.ts`
    - definir pares path-component.
    - o "path" é a url inserida no browser, excluindo o endereço do root
      - end. completo: `http://127.0.0.1:4200/a/b/c/`
      - url: `/a/b/c/`
    - a propriedade pathMatch define o critério de comparação:
      - `pathMatch: 'prefix'` (default): considera match se primeiro elemento da url for igual, logo, /a/b/c/ = /a/b/d/
      - `pathMatch: 'full'`: considera match se string completa for igual, logo, /a/b/c/ != /a/b/d/
      - o path vazio ('') é prefixo de TODAS as urls. se usado. usar match 'full' para o path vazio.
      ```
      const routes: Routes = [
      {
          path: '',
          redirectTo: 'criar-pensamento',
      }
      {
          path: 'criar-pensamento',
          component: CriarPensamentoComponent,
      },
      {
          path: 'listar-pensamento',
          component: ListarPensamentosComponent,
      },
      ];
      ```
  - `routerLink` propriedade que transforma elem. html em âncora para outro path. e.g. abaixo redir. para url root/p1/. Parece com href, mas não induz refresh da página, que deve ser evitado para SPA (single page app).

  ```
  <button routerLink='p1'>Meu botão</button>
  ```

  - `routerLinkActive`: diretiva. usada como propriedade em um elemento html que contenha a diretiva `routerLink`. define uma classe css que será adicionada ao elemento quando seu link estiver ativo.

  ```
    <a routerLink="/home" routerLinkActive="ativo">Home</a>
    <a routerLink="/sobre" routerLinkActive="ativo">Sobre</a>

    // tendo os estilos abaixo

    .ativo {
    font-weight: bold;
    color: blue;
    }
    .logo.active {
        padding-bottom: 13px;
    }
  ```

# Aula 4

- **Diretivas**

  - Instruções que alteram o comportamento ou a aparência de elementos no DOM.
  - Tipos
    - Estruturais
      - Alteram a **estrutura** do DOM (adicionam, removem ou substituem elementos)
      - Prefixo comum: \*
      - `*ngIf`: adiciona ou remove elementos conforme uma condição.
      - `*ngFor`: repete um elemento para cada item de uma lista.
      - `*ngSwitch`: renderiza elementos com base em múltiplas condições.
    - De atributo:
    - Personalizadas:

- **Diretiva \*ngFor**

  - Repete um elemento do template para cada item do iterável
  - Usado em uma div que contenha tag de template
  - Recebe uma expressão como argumento
  - O iterável (listaPensamentos) é um objeto do component.ts
  - O item pode ser nomeado como preferir
  - Inicialmente, temos:
    ```
    <div *ngFor="let item of listaPensamentos">
      <app-pensamento></app-pensamento>
    </div>
    ```
  - Pensamento representa um card único de pensamento. Para que o \*ngFor faça aja, preciso que Pensamento assuma os valores dos "itens".
  - O template do PensamentoComponent é apenas um card, que apresenta os dados do objeto interno Pensamento.
  - Para ocorrer a iteração, é necessário um property binding que faça o objeto pensamento receber os dados dos _itens_ para cada iteração. Marco o que vai receber itens com @Input():
    ```
    @Input() pensamento = {
      conteudo: 'I love Angular!!!',
      autoria: 'Google',
      modelo: 'modelo3',
    };
    ```
  - E faço bind dessa propriedade
    ```
    <div \*ngFor="let item of listaPensamentos">
      <app-pensamento [pensamento] = "item"></app-pensamento>
    </div>
    ```
  - Dessa forma, logo depois que o HTML for renderizado com os dados iniciais do PensamentoComponent, o DOM será modificado pelo \*ngFor e receberá todos os elementos encontrados no iterável.

- **Smart e Dumb Components**

  - Como o PensamentoComponent é substituido e recebe todos os dados de fora, é chamado de Dumb/Presentational/Isolated Component. = Componente Filho, recebe @Input() na propriedade.
  - ListarPensamentos, nesse caso, funciona como Smart Component, pois seria responsável pela manipulação de dados, interagir com serviços etc. Componente pai, vai no template e sofre ação do \*ngFor.
  - [Smart Components vs Presentational Components](https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/)

- **Diretiva \*ngIf**
  - Quando aplicado em um elemento HTML, este só será apresentado quando atendido o critério.
  - Recebe expressão booleana.
    ```
    <div class="mural" *ngIf="listaPensamentos.length > 0">
      <div \*ngFor="let item of listaPensamentos">
        <app-pensamento [pensamento] = "item"></app-pensamento>
      </div>
    </div>
    ```
