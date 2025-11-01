import { useCallback } from 'react'
import { useForm, Watch } from 'react-hook-form'
import { Input, Button, RTE } from "../Index"
import appWriteServices from '../../Appwrite/configuration'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

const PostForm = ({ post }) => {
    const userData = useSelector(state => state.auth.userData)

    const naviagtor = useNavigate();
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || '',
            content: post?.content || '',
            status: post.status || 'active'
        },
    });


    const submit = async (data) => {

        if (post) {
            const file = data.image[0] ? appWriteServices.uploadFile(data.image[0]) : null
            if (file) {
                appWriteServices.deleteFile(post.featuredImage)
            }

            const dbPost = await appWriteServices.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined
            })

            if (dbPost) {
                naviagtor(`/post/${dbPost.$id}`)
            }
        }
        else {
            const file = await appWriteServices.uploadFile(data?.image[0])
            const fileId = file.$id;
            data.featuredImage = fileId
            const dbPost = await appWriteServices.createPost({ ...data, userId: userData?.$id })
            if(dbPost)
            {
                naviagtor(`/post/${dbPost.$id}`)
            }
        }
    }

    const slugTransform = useCallback((value) => {

        if (value && value === 'string') {
            return value
                .trim()
                .toLowerCase()
                .replace(/^[a-zA-Z\d\s]+/g, '-')
        }
        return ''
    }, [])


    useEffect(() => {
        const subsciprtion = watch((value, { name }) => {

            if (name == 'title') {
                setValue('slug', slugTransform(value?.title))
            }
        })



        return () => {
            subsciprtion.unsubscribe();
        }
    }, [Watch, slugTransform, setValue])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <Input
                    label="title"
                    placeholder="Title"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug : "
                    placeholder="slug"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true })
                    }}
                />
                <RTE label="content " name="content" control={control} defaultValues={getValues("content")} />
            </div>
            <div>
                <Input
                    label="Featured Image "
                    type="file"
                    accept="image/png , image/jpg ,image/jpeg , image/gif"
                    {...register("image", { required: true })}
                />
                {post && (
                    <div>
                        <img
                            src={appWriteServices.filePreview(post.featuredImage)}
                            alt={post.title}
                        />
                    </div>
                )}
                <Select
                    options={["active", 'inactive']}
                    label="status"
                    {...register("status", { required: true })}

                />

                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} >
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    )
}

export default PostForm
