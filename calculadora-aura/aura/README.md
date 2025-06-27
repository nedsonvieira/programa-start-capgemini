## 🧮 Calculadora Simples em Aura - Salesforce

Este projeto é uma calculadora simples desenvolvida usando o framework **Aura** do Salesforce. Ele permite realizar operações básicas como adição, subtração, multiplicação e divisão diretamente na interface do Lightning.

### 🎓 Contexto

Este projeto foi desenvolvido como **solução para o desafio proposto no programa Start by Capgemini**, durante a trilha de **Salesforce** e o curso de **Aura Components**. Ele demonstra o uso prático dos conhecimentos adquiridos ao longo da formação.

### 📁 Estrutura do Projeto

```bash
aura/
├── CalcApplication/
│   ├── CalcApplication.app
│   └── CalcApplication.app-meta.xml
├── CalcComponent/
│   ├── CalcComponent.cmp                # Markup do componente principal
│   ├── CalcComponent.cmp-meta.xml       # Arquivo de metadados
│   ├── CalcComponent.css                # Estilo do componente
│   ├── CalcComponentController.js       # Controlador client-side
│   └── CalcComponentHelper.js           # Funções auxiliares
```


### ⚙️ Como funciona

- **CalcApplication.app**: Define a aplicação Lightning Aura que carrega o componente principal.
    
- **CalcComponent.cmp**: Define o layout e os elementos de entrada da calculadora.
    
- **CalcComponentController.js**: Controla os eventos acionados pelos botões.
    
- **CalcComponentHelper.js**: Implementa a lógica de cálculo.
    
- **CalcComponent.css**: Aplica o estilo visual ao componente.
    

### ▶️ Como usar

1. Importe os arquivos no seu ambiente Salesforce Developer, usando o Developer Console ou uma IDE como o VS Code com o Salesforce CLI.
    
2. Implante os arquivos da pasta `aura/` na sua org.
    
3. Acesse a aplicação via `CalcApplication.app` para visualizar a calculadora em funcionamento.
    

### 🧠 Funcionalidades

- Interface simples e interativa.
    
- Operações de:
    
    - Soma (+)
        
    - Subtração (−)
        
    - Multiplicação (×)
        
    - Divisão (÷)
        
- Limpeza de valores e exibição de resultados imediatos.
    

### 🛠️ Requisitos

- Salesforce Developer Edition
    
- Permissão para criar e editar componentes Aura
