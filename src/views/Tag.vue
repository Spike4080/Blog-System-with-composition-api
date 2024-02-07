<template>
  <div v-if="error">
      {{error}}
  </div>
  <div v-if="posts.length">
    <PostsList :posts="filteredPost"></PostsList>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import Spinner from '../components/Spinner'
import getPosts from '@/composable/getPosts'
import { computed } from 'vue'
export default {
  components: {
    PostsList, Spinner },
    props:["tag"],
    setup(props){
        let{posts,error,load} = getPosts()
        load();
        let filteredPost = computed(()=>{
            return posts.value.filter(post=>{
                return post.tags.includes(props.tag)
            })
        })
        return {posts,error,filteredPost};
    }
}
</script>

<style>

</style>