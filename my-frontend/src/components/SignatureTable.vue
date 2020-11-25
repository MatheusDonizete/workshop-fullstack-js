<template>
  <h2>{{titleUpperCase}}</h2>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Custo</th>
        <th>Imagem</th>
        <th>Data de vencimento</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="signature of signatures" :key="signature.id">
        <td>{{ signature.name }}</td>
        <td>{{ formatCurrency(signature.cost) }}</td>
        <td>{{ signature.imageURL }}</td>
        <td>{{ signature.dueDate }}</td>
        <td></td>
      </tr>
    </tbody>
    </table>
</template>

<script>
import { computed } from 'vue';
import { getAll } from '@/services/signatures.service.js';
import { formatCurrency } from '@/utils/formatter';

export default {
  name: 'SignatureTable',
  async setup() {
    const signatures = await getAll();

    const titleUpperCase = computed(() => {
      return 'Título Upper'.toUpperCase();
    });

    return { signatures, formatCurrency, titleUpperCase };
  }
}
</script>