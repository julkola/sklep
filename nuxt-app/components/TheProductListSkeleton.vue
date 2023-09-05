<template>
    <div class="flex flex-wrap">
        <div v-for="n in 10" class=" mr-4 mb-4 w-52 flex flex-col">
            <div class="w-52 h-52 relative"> 
                <img
                    :src="`/products/loader.jpg`"
                    class="w-52 h-52 bg-gray-50 rounded"
                >
                <button
                    disabled
                    class="rounded-full bg-gray-400 shadow text-white w-8 h-8 flex justify-center items-center absolute bottom-3 right-3"
                >
                    <BasketIcon/>
                </button>
            </div>
            <div class="h-3.5 w-full my-1.5 bg-gray-300 animate-pulse rounded-full" ></div>
            <div class="h-3.5 w-3/4 bg-gray-300 animate-pulse rounded-full" ></div>
            <div class="text-right flex-1 flex items-end justify-end">
                <div class="h-4 w-12 my-2 bg-gray-300 animate-pulse rounded-full" >
                </div>
            </div>
        </div>
    </div>
</template>