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
  SET_ITEMS(state, items) {
    state.items = items;
  },
  ADD_ITEM(state, product) {
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
  CLEAR_CART(state) {
    state.items = [];
  },
};

export const actions = {
  loadCart({ commit }) {
    if (process.client) {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        commit('SET_ITEMS', JSON.parse(savedCart));
      }
    }
  },
  saveCart({ state }) {
    if (process.client) {
      localStorage.setItem('cart', JSON.stringify(state.items));
    }
  },
  addItem({ commit, dispatch }, product) {
    commit('ADD_ITEM', product);
    dispatch('saveCart');
  },
  removeItem({ commit, dispatch }, productId) {
    commit('REMOVE_ITEM', productId);
    dispatch('saveCart');
  },
  updateQuantity({ commit, dispatch }, { productId, quantity }) {
    commit('UPDATE_QUANTITY', { productId, quantity });
    dispatch('saveCart');
  },
  clearCart({ commit, dispatch }) {
    commit('CLEAR_CART');
    dispatch('saveCart');
  },
};
