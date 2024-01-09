# 👟Gerenciador de Reposição de Calçados

Esse foi o meu primeiro trabalho com análise de dados, onde busquei aplicar alguns conhecimentos e utilizar algumas ferramentas que estava estudando no momento. Trata-se de um estudo sobre a reposiçãoo o piso de vendas de uma loja Nike na qual trabalhei por um tempo.

## ⚠️Introdução

Quem trabalha com o varejo sabe que passamos o ano inteiro se programando e preparando para os dois últimos meses do ano, mês de Black Friday e Natal. Mas esse período não é só feito dessas sazonalidades, algumas pessoas entram de férias, algumas recebem seu décimo terceiro, e isso tudo contribui para tornar essa época o período de maior vendas no ano.

Além disso, a loja em questão estava passando por um momento de alta nas vendas, aumentando muito o giro dos produtos no piso de vendas, e inviabilizando a forma como a reposição estava sendo feita até então. Com isso em mente, propûs ao meu gerente realizar um estudo sobre tal processo e entendermos qual a melhor forma de otimizarmos para, mesmo com o constante aumento do giro de produtos, mantermos o piso de vendas reposto

## 🗺️Mapeamento dos processos

Para entender como melhorar esse processo primeiro eu precisava entender como poderia mapear os dados que eram gerados, mesmo que de forma "analógica". Digo de forma analógica pois até então a reposição era feita manualmente por um colaborador que passava anotando os itens faltantes. Esse processo além de ser demorado era muito suscetível a erro humano, o que acabava atrasando ainda mais o processo.

Além disso, não tínhamos algumas informações básicas como:
- Quais os dias que mais precisam de reposição?
  - Sábado precisa mais que domingo ou é o inverso?
- Qual o tempo médio leva uma reposição?
- Quantas caixas precisam ser repostas por lista de reposição?

O primeiro passo foi automatizar a lista de reposição, e para isso, definimos horários específicos para realizar a reposição, sendo:
<br>
**09:00 - 12:00 - 14:00 - 16:00 - 18:00 - 20:00**
<br>

E para os saber quais os produtos vendidos, decidimos, em cada um desses intervalos de horário, puxar um relatório de quais os produtos vendidos. O próprio ERP que a empresa usa fornece a opção de exportar esse relatório em CSV, e esse relatório é consumido por uma planilha no google que já faz o tratamento e monta uma visualização organizada desses dados, levando em consideração:

- Se esse item é um calçado ou outro tipo de item
- Se, no estoque consta mais que 31 itens, já que é a quantidade mínima para a exposição do produto
- Quais os tamanhos vendidos
- Qual a quantidade desse item em estoque 

Análises:
- O primeiro passo foi tentar entender qual o comportamento das métricas obtidas durante os dias da semana
- Depois busquei entender se havia alguma relação entre a quantidade de caixas e a velocidade da reposição
- Também era interessante saber qual o período com a maior quantidade de caixas para a reposição

## 🛠️Experimente você mesmo
<div align="center">
  
[Clique aqui para acessar o projeto no Google Sheets](https://docs.google.com/spreadsheets/d/1mn2a6rvmRmbTJAmvRnIfbKGJGaze0Z7smsbyiP1VMl4/edit?usp=sharing)
[Clique aqui para acessar o Dashboard do projeto](https://lookerstudio.google.com/reporting/7ec11540-5f47-497a-9a0e-6b90426d62bc)
<br>
_(Para os scripts funcionarem corretamente, crie uma cópia na sua própria pasta do Google Drive)_
<br>
[Aprenda como dar permissões à sua conta para a execução dos scripts](https://github.com/gudaoliveira/apps_scripts_permissions)
<br><br>
![como fazer uma cópia](img/make_a_copy.png) </div>

---

## 📸Captura de Tela
<div align="center">
  
![Captura de Tela](img/screenshot.png)</div>

## 💻Como funciona?

- Simplesmente altere os valores nas células **"D2"** e **"H2"** para o número de linhas e colunas do tabuleiro, respectivamente, e clique no botão **"GERAR"**.
- Isso é tudo, agora espere a planilha imprimir o tabuleiro.
- Observe que o botão **GERAR** deve ter o script _[start.gs](https://github.com/gudaoliveira/dinamic_chess_board/blob/main/start.gs)_ atribuído para funcionar.

## 🧠Problemas Conhecidos
Este é uma ótima peça de portifólio para mim, mas poderia ser uma ótima peça para nós! Portanto, sinta-se à vontade para contribuir de qualquer maneira que você ache que melhoraria o projeto.

- Uma coisa que observei é que com valores grandes, a planilha pode ficar um pouco lenta, então, isso seria interessante a se melhorar.
- Além disso, talvez adicionar mais opções de formatação seria uma boa ideia.

Feito com 💞 no Brasil💚💛
