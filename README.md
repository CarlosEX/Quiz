# Desafio - 1 Descubra o Pattern
Descubra o padrão e selecione a resposta que melhor se encaixa no campo solicitado.


Dada a seguinte sequência: D2FO, _____, DF4O, DFO5, D6FO , qual das alternativas abaixo contém o elemento que completa a lacuna?

Opção  | Valor do exemplo
--------- | ------
A | D2F9O
B | DF3O
C | D8F3O
D | D3FO
E | D1FO

Qual seria a opção certa?

----

## Resolução

A primeira coisa que tentei indentificar foi os padrões mais simples. E se analisarmos, temos um padrão que corresponde a ordem sequencial de caracteres numéricos 2, ,4,5,6. Embora, estejam e posições diferentes nas suas respectivas strings.

Com essa verificação simples, consegui deduzir que independente da posição na string, ele queria qualquer texto que tivesse um **3 "três"**, que era o número da sequência lógica.
> D [2]() FO, _____, DF[4]()O, DFO[5](), D[6]()FO

Na segunda etapa, identifiquei outro padrão extremamente importante: todas as opções do enunciado, tem a mesma quantidade de caracteres 5 "cinco". Com isso em mente já pude identificar que as opções _A "D2F9O"_ e _C "D8F3O"_, já não atendiam ao padrão, pois contiam , daí sobraram a penas as opções: _B "DF3O", D "D3FO" e E "D1FO"_.
