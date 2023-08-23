<template>
    <Modal :show="showModal" @close="showModal = false">
        <template #header>
          Polityka prywatności
        </template>
        <template #default>
            <p>
                Jeśli chcesz poznać więcej informacji o poszczególnych kategoriach plików cookies, które stosujemy w serwisie znajdziesz na stronie <a href="">Polityka prywatności</a>
            </p>
            <h2>
                Zarządzaj preferencjami zgody
            </h2>
            <div class="grid gap-2">
                <Accordion v-for="[key, policy] in policies">
                    <template #header>
                        <span class="flex items-center font-semibold text-lg">
                            <BasketIcon class="mr-4"/>
                            {{ policy.name }}
                        </span>
                        <Switch :name="key"/>
                    </template>
                    <template #default>
                        {{ policy.lorem }}
                    </template>
                </Accordion>
            </div>
        </template>
      </Modal>
</template>
<script setup lang="ts">
const showModal = ref(true);
const policies = new Map<string, {name: string, lorem:string}>([
    [
        'analitycal',
        {
            name: "Analityczne pliki cookies",
            lorem: "Analityczne pliki cookie pozwalają na zbieranie informacji o częstotliwości i ilości wizyt, sposobie wykorzystywania strony przez użytkownika oraz o źródłach ruchu na witrynie narzedzia.pl. Zebrane dane pomagają w zrozumieniu naszych użytkowników, ukazują sposób ich poruszania się po witrynie oraz pozwalają na ulepszanie strony internetowej. Zbierane przez pliki cookie informacje są sumowane i ich celem nie jest ustalenie tożsamości osoby odwiedzającej witrynę. Nieudzielenie zgody będzie skutkować  brakiem informacji o wizytach na naszej witrynie oraz uniemożliwi poprawianie jej wydajności."
        }
    ],
    [   
        'functional',
        {
            name: "Funkcjonalne pliki cookies",
            lorem: "Analityczne pliki cookie pozwalają na zbieranie informacji o częstotliwości i ilości wizyt, sposobie wykorzystywania strony przez użytkownika oraz o źródłach ruchu na witrynie narzedzia.pl. Zebrane dane pomagają."
        },
    ],
    [
        'advertismental',
        {
            name: "Reklamowe pliki cookies",
            lorem: "Analityczne pliki cookie pozwalają na zbieranie informacji o częstotliwości i ilości wizyt, sposobie wykorzystywania strony przez użytkownika oraz o źródłach ruchu na witrynie narzedzia.pl. Zebrane dane pomagają."
        }
    ]
])

</script>