import { myAxios } from "./helper";

export const createPost = (post, categories) => {
  console.log(categories[0]?.categoryId);
  console.log(post);
  return myAxios
    .post(
      `/api/post/userId/${post.userId}/categoryId/${categories[0]?.categoryId}`,
      post
    )
    .then((response) => response.data);
};
