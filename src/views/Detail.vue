<template>
  <div v-if="post">
    <h1>{{post.title}}</h1>
    <p>{{post.body}}</p>
  </div>
  <div v-else>
    loading..
  </div>
</template>

<script>
import getPost from "../composable/getPost"
export default {
    props: ['id'],
    setup(props){
        let{post,error,load} = getPost(props.id);
        load();

        return {post,error};
    }
}
</script>

<style>

</style>