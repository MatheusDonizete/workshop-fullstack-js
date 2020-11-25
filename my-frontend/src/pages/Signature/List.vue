<template>
    <h1>Assinaturas</h1>
    <Suspense>
      <template #default>
        <SignatureTable />
      </template>
      <template #fallback>Loading...</template>
    </Suspense>    
</template>

<script>

import SignatureTable from '@/components/SignatureTable';

export default {
    name: 'List',
    components: {
      SignatureTable
    }
};
</script>