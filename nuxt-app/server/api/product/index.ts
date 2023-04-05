const products = [
    {
        id: "1231",
        name: "Anwen - Spanwen - Kula do Kąpieli o Zapachu Magnolia - 100g",
        desc: "Kula do kąpieli o zapachu Magnolia",
        price: 28.30,
        available: 12,
        poducerId: "123",
        producerName: "SkinTra",
        variants: [
            {
                id: "1231",
                variantName: "Magnolia"
            },
            {
                id: "1232",
                variantName: "Róża"
            },
            {
                id: "1234",
                variantName: "Bez"
            },
        ]
    },
    {
        id: "1232",
        name: "Anwen - Spanwen - Kula do Kąpieli o Zapachu Róża - 100g",
        desc: "Kula do kąpieli o zapachu Róża",
        price: 28.30,
        available: 12,
        poducerId: "123",
        producerName: "SkinTra",
        variants: [
            {
                id: "1231",
                variantName: "Magnolia"
            },
            {
                id: "1232",
                variantName: "Róża"
            },
            {
                id: "1234",
                variantName: "Bez"
            },
        ]
    },
    {
        id: "1234",
        name: "Anwen - Spanwen - Kula do Kąpieli o Zapachu Bez - 100g",
        desc: "Kula do kąpieli o zapachu Bez",
        price: 28.30,
        available: 12,
        poducerId: "123",
        producerName: "SkinTra",
        variants: [
            {
                id: "1231",
                variantName: "Magnolia"
            },
            {
                id: "1232",
                variantName: "Róża"
            },
            {
                id: "1234",
                variantName: "Bez"
            },
        ]
    }
]
export default defineEventHandler((event) => {
    return products
})