export default {
   namespace: 'products',
   state: ['products'],
   reducers: {
     'delete'(state, { payload: id }) {
       return state.filter(item => item.id !== id)
     }
   }
}
