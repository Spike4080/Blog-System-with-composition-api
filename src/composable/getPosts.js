import { ref } from "vue";

let getPosts = () => {
  let posts = ref([]);
  let error = ref(""); // show error message
  let load = async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
      });
      let response = await fetch("http://localhost:3000/posts");
      if (response.status === 404) {
        throw new Error("not found url");
      }
      let datas = await response.json();
      posts.value = datas;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load }; // send data to home
};
export default getPosts;
