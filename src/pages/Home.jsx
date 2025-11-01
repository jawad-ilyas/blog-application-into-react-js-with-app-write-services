import { useEffect, useState } from "react";
import appWriteServices from "../Appwrite/configuration";
import { Container, PostCard } from "../Component/Index";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appWriteServices
      .getPosts()
      .then((response) => {
        if (response?.documents) {
          setPosts(response.documents);
        }
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      });
  }, []);

  if (posts.length === 0) {
    return <p>Login to react post</p>;
  }

  return (
    <div>
      <Container>
        {posts.map((post) => (
          <div key={post.$id}>
            <PostCard {...post} />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Home;
