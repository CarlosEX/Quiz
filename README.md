# Desafio - 1 Descubra o Pattern
Descubra o padrão e selecione a resposta que melhor se encaixa no campo solicitado.


Dada a seguinte sequência: D2IO, _____, DI4O, DIO5, D6IO , qual das alternativas abaixo contém o elemento que completa a lacuna?

Opção  | Valor do exemplo
--------- | ------
A | D2I9O
B | DI3O
C | D8I3O
D | D3IO
E | D1IO

Qual seria a opção certa?

----

## Resolução

A primeira coisa que tentei indentificar foi os padrões mais simples. E se analisarmos, temos um padrão que corresponde a ordem sequencial de caracteres numéricos 2, ,4,5,6. Embora, estejam e posições diferentes nas suas respectivas strings.

Com essa verificação simples, consegui deduzir que independente da posição na string, ele queria qualquer texto que tivesse um **3 "três"**, que era o número da sequência lógica.
> D [2]() IO, _____, DI[4]()O, DIO[5](), D[6]()IO

Na segunda etapa, identifiquei outro padrão extremamente importante: todas as opções do enunciado, tem a mesma quantidade de caracteres 5 "cinco". Com isso em mente já pude identificar que as opções _A "D2I9O"_ e _C "D8I3O"_, já não atendiam ao padrão, pois contiam , daí sobraram a penas as opções: _B "DI3O", D "D3IO" e E "D1IO"_.
