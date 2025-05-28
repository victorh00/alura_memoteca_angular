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
