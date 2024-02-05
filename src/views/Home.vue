<template>
  <div class="home">
      <div>
        <h1>{{error}}</h1>
      </div>
      <div v-if="posts.length>0">
        <PostsList :posts="posts"></PostsList>
      </div>
      <div v-else>
        Loading.....
      </div>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import getPosts from '../composable/getPosts'
import { ref } from 'vue';
export default {
  components: { PostsList },
  setup() {
    let {posts,error,load} = getPosts();
    load();
    return {posts,error};
  }
}
</script>
