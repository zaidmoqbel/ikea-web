export const state = () => ({
  items: []
});

export const getters = {
  totalAmount(state) {
    return state.items.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
  },
  totalItems(state) {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  },
};

export const mutations = {
  ADD_ITEM(state, product) {
    if (!product || !product.id) {
      console.error("Invalid product passed to ADD_ITEM:", product);
      return;
    }
    const existingItem = state.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      state.items.push({ ...product, quantity: 1 });
    }
  },
  REMOVE_ITEM(state, productId) {
    state.items = state.items.filter(item => item.id !== productId);
  },
  UPDATE_QUANTITY(state, { productId, quantity }) {
    const item = state.items.find(item => item.id === productId);
    if (item && quantity > 0) {
      item.quantity = quantity;
    } else if (item) {
      state.items = state.items.filter(item => item.id !== productId);
    }
  },
  INCREASE_QUANTITY(state, productId) {
    const item = state.items.find(item => item.id === productId);
    if (item) {
      item.quantity += 1;
    }
  },
  DECREASE_QUANTITY(state, productId) {
    const item = state.items.find(item => item.id === productId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else if (item) {
      state.items = state.items.filter(item => item.id !== productId);
    }
  },
  CLEAR_CART(state) {
    state.items = [];
  },
};

export const actions = {
  addItem({ commit }, product) {
    console.log('Adding product:', product);
    commit('ADD_ITEM', product);
  },
  removeItem({ commit }, productId) {
    commit('REMOVE_ITEM', productId);
  },
  updateQuantity({ commit }, { productId, quantity }) {
    commit('UPDATE_QUANTITY', { productId, quantity });
  },
  increaseQuantity({ commit }, productId) {
    commit('INCREASE_QUANTITY', productId);
  },
  decreaseQuantity({ commit }, productId) {
    commit('DECREASE_QUANTITY', productId);
  },
  clearCart({ commit }) {
    commit('CLEAR_CART');
  },
};
