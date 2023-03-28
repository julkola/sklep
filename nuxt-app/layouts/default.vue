<template>
    <div class="flex flex-col h-full">
        <TheHeader/>
        <div class="flex-1">
          <slot/>
        </div>
        <TheFooter/>
        <TheCart/>
    </div>
</template>