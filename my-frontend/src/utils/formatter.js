const formatterCurrency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export const formatCurrency = (value) => formatterCurrency.format(value);