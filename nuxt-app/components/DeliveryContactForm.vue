<template>
    <Input 
        name="first-name"
        :required="true"
        placeholder="10"
    >
        Jan
    </Input>
    <Input
        name="surname"
        :required="true"
        placeholder="72"
    >
        Kowalski
    </Input>
    <Input 
        name="email"
        type="email"
        :required="true"
        placeholder="przyklad@gmail.com"
    >
        E-mail
    </Input>
    <Input
        name="tel"
        type="tel"
        :required="true"
        placeholder="12-345"
    >
        Nr telefonu
    </Input>
    <Input
        name="street-number"
        placeholder="Wpisz swoją prośbę"
        :required="false"
    >
        Uwagi do zamówienia
    </Input>
    <p class="m-4 mt-6">
        <span class="text-teal-400">
            *
        </span>
        Pola obowiązkowe
    </p>
</template>