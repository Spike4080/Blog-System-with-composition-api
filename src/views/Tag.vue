<template>
    <div class="tag">
        <div v-if="error">
        {{error}}
        </div>
        <div v-if="posts.length" class="layout">
            <div>
            <PostsList :posts="filteredPost"></PostsList>
            </div>
            <div>
                <TagCloud></TagCloud>
            </div>
        </div>
        <div v-else>
            <Spinner></Spinner>
        </div>
    </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import PostsList from '../components/PostsList'
import Spinner from '../components/Spinner'
import getPosts from '@/composable/getPosts'
import { computed } from 'vue'
export default {
  components: {
    TagCloud,
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
    .tag {
        max-width: 1200px;
        margin: 0 auto;
    }
</style>