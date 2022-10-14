import { createClient } from '@supabase/supabase-js'
import { readable, writable, type Readable } from 'svelte/store'

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

export let user = readable(supabase.auth.user(), set => {
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == 'SIGNED_OUT') {
      set(null)
    } 
    if (session != null) {
      set(session.user)
    } 
  })
})

export let current_market_id = writable(0)
export let current_shop_id = writable(0)
export let current_item_id = writable(0)

let empty: any[] | undefined = []
export let current_markets = writable(empty)
export let current_shops = writable(empty)
export let current_items = writable(empty)

export let markets_list = writable(empty)
export let shops_list = writable(empty)
export let items_list = writable(empty)
export let patron_list = writable(empty)




export const auth = supabase.auth


///////////////////////////////////////
//
//        GET
//
///////////////////////////////////////

export async function getMarkets() {
  const { data, error } = await supabase
    .from('markets')
    .select()
  if (error) throw new Error(error.message)
  return data
}

export async function getShops() {
  const { data, error } = await supabase
    .from('shops')
    .select()
  if (error) throw new Error(error.message)
  return data
}

export async function getItems() {
  const { data, error } = await supabase
    .from('items')
    .select()
  if (error) throw new Error(error.message)
  return data
}

export async function getPatrons() {
  const { data, error } = await supabase
    .from('patrons')
    .select()
  if (error) throw new Error(error.message)
  return data
}

///////////////////////////////////////
//
//        INSERT
//
///////////////////////////////////////

export async function newMarket(name:string, description:string, creator_id: string) {
  const { data, error } = await supabase
    .from('markets')
    .insert([
      { name: name, description: description, creator_id: creator_id}
    ])
  if (error) {
    alert(error.message)
    throw new Error(error.message)    
  }

  current_markets.set(await getMarkets())
  current_shops.set(await getShops())
  current_items.set(await getItems())
}

export async function newShop(name:string, description:string, creator_id: string, market_id: number) {
  const { data, error } = await supabase
    .from('shops')
    .insert([
      { name: name, description: description, creator_id: creator_id, market_id: market_id}
    ])
  if (error) {
    alert(error.message)
    throw new Error(error.message)    
  }

  current_shops.set(await getShops())
  current_items.set(await getItems())
}

export async function newItem(name:string, description:string, price:number, creator_id: string, shop_id: number) {
  const { data, error } = await supabase
    .from('items')
    .insert([
      { name: name, description: description, price: price, creator_id: creator_id, shop_id: shop_id}
    ])
  if (error) {
    alert(error.message)
    throw new Error(error.message)    
  }

  current_items.set(await getItems())
}

///////////////////////////////////////
//
//        DELETE
//
///////////////////////////////////////

export async function deleteMarket(id:number) {
  const {data, error } = await supabase
    .from('markets')
    .delete()
    .eq('id', id)
  

  current_markets.set(await getMarkets())
}

export async function deleteShop(id:number) {
  const {data, error } = await supabase
    .from('shops')
    .delete()
    .eq('id', id)
  if (error) {
    alert(error.message)
    throw new Error(error.message)
    
  }

  current_shops.set(await getShops())
}

export async function deleteItem(id:number) {
  const {data, error } = await supabase
    .from('items')
    .delete()
    .eq('id', id)
  if (error) {
    alert(error.message)
    throw new Error(error.message)
    
  }

  current_items.set(await getItems())
}




///////////////////////////////////////
//
//        SPECIALTY
//
///////////////////////////////////////

//export async function buyItem(item_id: number) {
//  const {data, error } = await supabase {
//    .from()
//
//  }
//}