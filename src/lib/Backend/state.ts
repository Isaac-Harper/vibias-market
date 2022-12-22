import { readable, writable, type Readable } from 'svelte/store'


let empty: any[] | undefined = []
let emptyA = {}

export let current_market = writable({
	id: 0,
	creator_id: "",
	patrons: [],
	name: "",
	description: "",
	join_id: "",
	starting_coins: 0
})

export let current_shop = writable({
	id: 0,
	creator_id: "",
	market_id: "",
	name: "",
	description: ""
})

export let current_item = writable({
	id: 0,
	creator_id: "",
	shop_id: "",
	name: "",
	description: "",
	price: 0
})

export let current_patron = writable({
	id: 0,
	player_id: "",
	market_id: 0,
	name: "",
	coins: 0,
	inventory_ids: []
})

export let inventory = writable([])


export let market_list = writable(empty)
export let shop_list = writable(empty)
export let item_list = writable(empty)
export let patron_list = writable(empty)





export let state = writable({
	market_open: false,
	shop_open: false,
	item_open: false,

	edit_market_open: false,
	edit_shop_open: false,
	edit_item_open: false,

	join_market_open: false,

	create_market_open: false,
	create_shop_open: false,
	create_item_open: false,
})

export function resetState() {
	state.set({
		market_open: false,
		shop_open: false,
		item_open: false,

		edit_market_open: false,
		edit_shop_open: false,
		edit_item_open: false,

		join_market_open: false,

		create_market_open: false,
		create_shop_open: false,
		create_item_open: false,
	})
}

export function openMarket() {
	state.set({
		market_open: true,
		shop_open: false,
		item_open: false,

		edit_market_open: false,
		edit_shop_open: false,
		edit_item_open: false,

		join_market_open: false,

		create_market_open: false,
		create_shop_open: false,
		create_item_open: false,
	})
}

export function openShop() {
	state.set({
		market_open: true,
		shop_open: true,
		item_open: false,

		edit_market_open: false,
		edit_shop_open: false,
		edit_item_open: false,

		join_market_open: false,

		create_market_open: false,
		create_shop_open: false,
		create_item_open: false,
	})
}

export function openItem() {
	state.set({
		market_open: true,
		shop_open: true,
		item_open: true,

		edit_market_open: false,
		edit_shop_open: false,
		edit_item_open: false,

		join_market_open: false,

		create_market_open: false,
		create_shop_open: false,
		create_item_open: false,
	})
}

export function openMarketEdit() {
	state.set({
		market_open: true,
		shop_open: false,
		item_open: false,

		edit_market_open: true,
		edit_shop_open: false,
		edit_item_open: false,

		join_market_open: false,

		create_market_open: false,
		create_shop_open: false,
		create_item_open: false,
	})
}

export function openShopEdit() {
	state.set({
		market_open: true,
		shop_open: true,
		item_open: false,

		edit_market_open: false,
		edit_shop_open: true,
		edit_item_open: false,

		join_market_open: false,

		create_market_open: false,
		create_shop_open: false,
		create_item_open: false,
	})
}

export function openItemEdit() {
	state.set({
		market_open: true,
		shop_open: true,
		item_open: true,

		edit_market_open: false,
		edit_shop_open: false,
		edit_item_open: true,

		join_market_open: false,

		create_market_open: false,
		create_shop_open: false,
		create_item_open: false,
	})
}

export function openMarketJoin() {
	state.set({
		market_open: false,
		shop_open: false,
		item_open: false,

		edit_market_open: false,
		edit_shop_open: false,
		edit_item_open: false,

		join_market_open: true,

		create_market_open: false,
		create_shop_open: false,
		create_item_open: false,
	})
}

export function openMarketCreate() {
	state.set({
		market_open: false,
		shop_open: false,
		item_open: false,

		edit_market_open: false,
		edit_shop_open: false,
		edit_item_open: false,

		join_market_open: false,

		create_market_open: true,
		create_shop_open: false,
		create_item_open: false,
	})
}

export function openShopCreate() {
	state.set({
		market_open: true,
		shop_open: false,
		item_open: false,

		edit_market_open: false,
		edit_shop_open: false,
		edit_item_open: false,

		join_market_open: false,

		create_market_open: false,
		create_shop_open: true,
		create_item_open: false,
	})
}

export function openItemCreate() {
	state.set({
		market_open: true,
		shop_open: true,
		item_open: false,

		edit_market_open: false,
		edit_shop_open: false,
		edit_item_open: false,

		join_market_open: false,

		create_market_open: false,
		create_shop_open: false,
		create_item_open: true,
	})
}




export async function resetMarket() {
	current_market.set({
		id: 0,
		creator_id: "",
		patrons: [],
		name: "",
		description: "",
		join_id: "",
		starting_coins: 0
	})

	resetShop()

	resetPatron()
}

export async function resetShop() {
	current_shop.set({
		id: 0,
		creator_id: "",
		market_id: "",
		name: "",
		description: ""
	})
	resetItem()
}

export async function resetItem() {
	current_item.set({
		id: 0,
		creator_id: "",
		shop_id: "",
		name: "",
		description: "",
		price: 0
	})
}

export async function resetPatron() {
	current_patron.set({
		id: 0,
		player_id: "",
		market_id: 0,
		name: "",
		coins: 0,
		inventory_ids: []
	})
}