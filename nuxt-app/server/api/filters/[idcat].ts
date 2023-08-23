const filters = [
{
    groupId: "1",
    name: "Działanie",
    options: [
        {
            id: 13432,
            name: "Nawilżające"
        },
        {
            id: 13433,
            name: "Oczyszczające"
        },
        {
            id: 13434,
            name: "Odżywcze"
        },
        {
            id: 13435,
            name: "Wygładzające"
        }
    ]
},
{
    groupId: "2",
    name: "Składniki aktywe",
    options: [
        {
            id: 43432,
            name: "Aloes"
        },
        {
            id: 43433,
            name: "Peptydy"
        },
        {
            id: 43434,
            name: "Proteiny"
        }
    ]
}
]
export default defineEventHandler((event) => {
    const idCategory = getQuery(event).idCategory;
    return filters;
})