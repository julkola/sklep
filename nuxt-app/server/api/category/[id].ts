const currentCategory = {
    id: 52432,
    name: "Do kąpieli",
    subCategories: [
        {
            id: 43430,
            name: "Kule do kąpieli",
        },
        {
            id: 43431,
            name: "Sole do kąpieli",
        }
    ],
    parentCategory: {
        id: 123131,
        name: "Ciało"
    }
}
export default defineEventHandler((event) => {
    return currentCategory;
})