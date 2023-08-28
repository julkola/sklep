<template>
    <Input 
        name="street"
        :required="true"
        placeholder="Przykładowa"
    >
        Ulica
    </Input>
    <div class="flex">
        <Input 
            name="street-number"
            :required="true"
            placeholder="10"
            class="flex-1 mr-4"
        >
            Nr domu
        </Input>
        <Input
            name="flat-number"
            :required="true"
            placeholder="72"
            class="flex-1"
        >
            Nr mieszkania
        </Input>
    </div>
    <Input
        name="postal-code"
        :required="true"
        placeholder="12-345"
    >
        Kod pocztowy
    </Input>
    <Input
        name="city"
        :required="true"
        placeholder="Ciechocinek"
    >
        Miejscowość
    </Input>
    <Input
        name="courier-phone"
        placeholder="+48 123 456 789"
        :required="false"
        type="tel"
    >
        Nr telefonu dla kuriera
    </Input>
    <p class="m-4 mt-6">
        <span class="text-teal-400">
            *
        </span>
        Pola obowiązkowe
    </p>
</template>