# ABS - Automated Beverage Server

## Descrição

Este projeto simula um sistema automatizado de servir bebidas (ABS). O sistema recebe pedidos contendo o tipo de bebida, sabor, tamanho, tipo de ordem (para viagem ou comer no local) e se deve ou não conter gelo. Com base nessas informações, ele valida o pedido e imprime a descrição da bebida preparada.

---

## Regras do Sistema

- **Tipos de Bebidas:**
  - Refrigerante
  - Suco

- **Sabores Disponíveis:**
  - Refrigerantes: Coca, Guaraná
  - Sucos: Suco de Uva, Suco de Laranja

- **Tamanhos Permitidos:**
  - Refrigerantes: 300ml, 500ml, 700ml
  - Sucos: 300ml, 500ml

- **Copo:**
  - Refrigerante: Copo de Papel
  - Suco: Copo de Plástico

- **Gelo:**
  - Refrigerante: 6 pedras de gelo
  - Suco: 12 pedras de gelo
  - Pode ser servido sem gelo

- **Tipo de Ordem:**
  - Para Viagem: Tampa sem furo
  - Comer Aqui: Tampa com furo

- Caso haja incompatibilidade nas informações (exemplo: Refrigerante com sabor de suco), o sistema deve informar: **"Bebida Inválida"**
