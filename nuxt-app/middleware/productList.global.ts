export default defineNuxtRouteMiddleware((to, from) => {
    const capturingRegex = /category\/(?<categoryId>[0-9]*)/;
    const match = to.path.match(capturingRegex);
    const categoryId = match ? match.groups?.categoryId : null;
    if (categoryId) {
        return navigateTo({path: "/products", query: {
            category: 10
        }})
    }
})