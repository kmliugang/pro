<template>
  <div id="app">
    <router-view />

    <div class="menu">
      <ul>
        <template v-for="item in routers">

          <li :key="item.path" v-if="!item.hidden">
            <router-link :to="item.path">{{ item.meta.title || item.name }}</router-link>
          </li>
        </template>


      </ul>

    </div>

  </div>
</template>

<script>
import { routes } from '@/router';
export default {
  data() {
    return {
      routers: routes
    }
  }


}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-right: 200px;
}

.menu {
  position: fixed;
  right: 0;
  top: 0;
  width: 200px;
  height: 100%;
  border: 50%;
  background: #f0f0f0;

  li {
    padding: 6px 0;
  }
}
</style>
