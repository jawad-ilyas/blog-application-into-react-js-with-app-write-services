import { useEffect, useState } from "react"
import appWriteServices from "../Appwrite/configuration"
import { Container, PostForm } from "../Component/Index"
import { useNavigate, useParams } from "react-router-dom"


const EditPost = () => {

    const [posts, setPosts] = useState(null)
    const { slug } = useParams();
    const navigate = useNavigate();


    useEffect(() => {

        if (slug) {
            appWriteServices.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        }
        else {
            navigate("/")
        }
    }, [])
    return posts ? (<div> <Container>
        <PostForm post={posts} />

    </Container></div>) : null
}

export default EditPost
