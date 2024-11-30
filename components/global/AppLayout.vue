<template>
    <div class="layout">
        <v-layout>
            <CartDrawer />   
            <AppNav/>     
            <FixedNav />
            <v-main style="padding-top: 150px;">
                <slot></slot>
            </v-main>         
        </v-layout>
        <AppFooter />
    </div>
    
</template>

<script>
import AppNav from './AppNav.vue';
import FixedNav from './FixedNav.vue';
import CartDrawer from './CartDrawer.vue';
import AppFooter from './AppFooter.vue';

export default {
    data:() => ({
        drawer:false,
    }),
    components: {
        AppNav,
        CartDrawer,
        FixedNav,
        AppFooter
    }
}

</script>