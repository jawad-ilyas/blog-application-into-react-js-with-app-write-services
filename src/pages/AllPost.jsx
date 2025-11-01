import { useEffect, useState } from "react"
import appWriteServices from "../Appwrite/configuration"
import { Container, PostCard } from "../Component/Index"

const AllPost = () => {


    const [posts, setPosts] = useState()
    useEffect(() => {
        appWriteServices.getPosts([])
            .then((post) => {
                if (post)
                    setPosts(post?.documents)
            })
            .catch((error) => {
                console.log('====================================');
                console.log("error into all post page ", error);
                console.log('====================================');
            })
    }, [])
    return (
        <div>
            <Container >
                {posts && posts?.map((post) => (
                    <div key={post.$id}>
                        <PostCard post={post} />
                    </div>
                ))}
            </Container>

        </div>
    )
}

export default AllPost
