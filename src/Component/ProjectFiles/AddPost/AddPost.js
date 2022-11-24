import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { getAllCategories } from "../../../Services/post-categories";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";
import { getCurrentUserDetails } from "../../../Auth";
import { createPost } from "../../../Services/post-services";
const AddPost = () => {
  // jodit Editor implement
  const editor = useRef(null);
  // get post items
  const [post, setPost] = useState({
    title: "",
    description: "",
    categoryId: "",
  });
  const { title, description, categoryId } = post;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };
  const handleChangeDescription = (data) => {
    // console.log(data);
    setPost({ ...post, description: data });
  };
  const [user, setUser] = useState(null);
  //fetch category api
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setUser(getCurrentUserDetails());
    getAllCategories()
      .then((response) => {
        // console.log(response);
        setCategories(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //button submit
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(post);
    setPost({
      title: "",
      description: "",
      categoryId: "",
    });
    if (title.trim() === "") {
      toast.error("Title field are required!!");
    }
    if (description.trim() === "") {
      toast.error("Description field are required!!");
    }
    if (categoryId.trim() === "") {
      toast.error("Post category field are required!!");
    }
    post["userId"] = user.id;
    // console.log(user);
    createPost(post, categories)
      .then((response) => {
        console.log(response);
        toast.success("Create Post Successfully!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {JSON.stringify(post)}
      <Card>
        <CardHeader>
          <h3 className="text-center">User Add Post</h3>
        </CardHeader>
        <CardBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label htmlFor="title">Post Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Enter here..."
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Post Description</Label>
              <JoditEditor
                ref={editor}
                // value={description}
                name="description"
                onChange={handleChangeDescription}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="categoryId">Post Category</Label>
              <Input
                type="select"
                name="categoryId"
                id="categoryId"
                onChange={handleChange}
                defaultValue={0}
              >
                <option value={0} disabled>
                  --Select Categories--
                </option>
                {categories &&
                  categories.map((category) => {
                    return (
                      <option
                        key={category.categoryId}
                        value={category.categoryId}
                      >
                        {category.categoryTitle}
                      </option>
                    );
                  })}
              </Input>
            </FormGroup>
            <Container className="text-center">
              <Button type="submit" color="success" className="me-2">
                Create Post
              </Button>
              <Button type="reset" color="danger" className="me-2">
                Reset Post
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddPost;

// import React, { useEffect, useState, useRef } from "react";
// import {
//   Button,
//   Card,
//   CardBody,
//   CardHeader,
//   Container,
//   Form,
//   FormGroup,
//   Input,
//   Label,
// } from "reactstrap";
// import JoditEditor from "jodit-react";
// import { getAllCategories } from "../../../Services/post-categories";
// import { getCurrentUserDetails } from "../../../Auth/index";
// import { createPost } from "../../../Services/post-services";
// const AddPost = () => {
//   const editor = useRef(null);
//   const [categories, setCategories] = useState([]);
//   const [user, setUser] = useState(null);
//   // console.log(user);
//   useEffect(() => {
//     setUser(getCurrentUserDetails());
//     getAllCategories()
//       .then((response) => {
//         // console.log(response);
//         setCategories(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   const [post, setPost] = useState({
//     title: "",
//     description: "",
//     categoryId: "",
//   });
//   const { title, description, categoryId } = post;
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPost({ ...post, [name]: value });
//   };
//   const handleChangeDescription = (data) => {
//     setPost({ ...post, description: data });
//   };
//   const onSubmit = (e) => {
//     e.preventDefault();
//     post["userId"] = user.id;
//     console.log(post);
//     createPost(post, categories)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div>
//       {JSON.stringify(post)}
//       <Card>
//         <CardHeader>
//           <h3 className="text-center">User Add Post</h3>
//         </CardHeader>
//         <CardBody>
//           <Form onSubmit={onSubmit}>
//             <FormGroup>
//               <Label htmlFor="title">Post Title</Label>
//               <Input
//                 type="text"
//                 name="title"
//                 id="title"
//                 placeholder="Enter here..."
//                 onChange={handleChange}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="description">Post Description</Label>
//               <JoditEditor
//                 ref={editor}
//                 // value={description}
//                 name="description"
//                 onChange={handleChangeDescription}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label htmlFor="categoryId">Post Category</Label>
//               <Input
//                 type="select"
//                 name="categoryId"
//                 id="categoryId"
//                 onChange={handleChange}
//                 defaultValue={0}
//               >
//                 <option disabled value={0}>
//                   --Select Categories--
//                 </option>
//                 {categories &&
//                   categories.map((categories) => {
//                     return (
//                       <option
//                         key={categories.categoryId}
//                         value={categories.categoryId}
//                       >
//                         {categories.categoryTitle}
//                       </option>
//                     );
//                   })}
//               </Input>
//             </FormGroup>
//             <Container className="text-center">
//               <Button type="submit" color="success" className="me-2">
//                 Create Post
//               </Button>
//               <Button type="reset" color="danger" className="me-2">
//                 Reset Post
//               </Button>
//             </Container>
//           </Form>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default AddPost;
