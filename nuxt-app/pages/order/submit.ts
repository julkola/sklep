import { router } from './delivery.vue';

export function submit(e: SubmitEvent) {
const form = e.currentTarget as HTMLFormElement;
const data = new FormData(form);
const params: Map<string, string> = new Map();
data.forEach((value, key) => {
params.set(key, value);
});
router.push({
path: "/order/payment",
params: params
});
}
