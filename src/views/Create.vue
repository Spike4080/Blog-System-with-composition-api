<template>
    <form>
        <label>Title</label>
        <input type="text" required v-model="title">

        <label>Body</label>
        <textarea required v-model="body"></textarea>

        <label>Tags(hit enter to add a tag)</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="keydownHandler">
        
        <div v-for="tag in tags" :key="tag" class="pill">
            {{tag}}
        </div>

        <button>add post</button>
    </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);
        let keydownHandler = ()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }
            tag.value = "";
        }

        return {title,body,tag,tags,keydownHandler};
    }
}
</script>

<style>
    .pill {
        display: inline-block;
        margin: 10px 10px 10px 0;
        color: #444;
        background: #ddd;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
    }

    body {
            font-family: 'Arial', sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        form {
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            border-radius: 8px;
            width: 300px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #333;
        }

        input,
        textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            display: block;
            width: 100%;
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

    
    
</style>