const orders = [
    {
        id: "1243132",
        uid: "43",
        placementDate: new Date(),
        status: "odebrane",
        sum: 43.40,
        paymentMethod: "blik",
    },

]
export default defineEventHandler((event) => {
    return orders.find((order)=> order.uid === `${event.context.params!.uid}`)
})