import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    items: [
        {
           
        }
    ]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = {
                id: nanoid(),
                name: action.payload,
                quantity: 1,
            }
            state.items.push(item)
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
        },
        updateItem: (state, action) => {
            const {id, name} = action.payload
            state.items = state.items.map(
                (item) => (item.id === id ? {...item, name: name} : item)
            )
        }
    }
})

export const {addItem, deleteItem, updateItem} = cartSlice.actions

export default cartSlice.reducer