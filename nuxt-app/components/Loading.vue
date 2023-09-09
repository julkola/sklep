<template>
    <Transition name="loader" appear >
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 group">
            <div class="-ml-10 first-dot w-6 h-6 rounded-full bg-gradient-to-br from-gray-200 to-indigo-200 m-2 shadow-lg scale-0"></div>
            <div class="dot w-6 h-6 rounded-full bg-gradient-to-br from-gray-200 to-indigo-200 m-2 shadow-lg "></div>
            <div class="dot w-6 h-6 rounded-full bg-gradient-to-br from-gray-200 to-indigo-200 m-2 shadow-lg  "></div>
            <div class="last-dot w-6 h-6 rounded-full bg-gradient-to-br from-gray-200 to-indigo-200 m-2 shadow-lg"></div>
        </div>
    </Transition>
</template>
<style>
.dot {
    animation: 1000ms 0ms infinite forwards dots;
}
.first-dot {
    animation: 1000ms 0ms infinite forwards firstdot;
}
.last-dot {
    animation: 1000ms 0ms infinite forwards lastdot;
}
    @keyframes dots {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(40px);
        }
    }
    @keyframes firstdot {
        0% {
            transform:translateX(0) scale(0) ;
        }
        100% {
            transform: translateX(40px) scale(100%);
        }
    }
    @keyframes lastdot {
        0% {
            transform: translateX(0) scale(100%);
        }
        100% {
            transform: translateX(40px) scale(0);
        }
    }

</style>