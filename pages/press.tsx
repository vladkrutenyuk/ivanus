import { GetStaticProps } from "next"
import fs from 'fs'
import Post, { PostData } from "../components/Post"
import styled from "styled-components"

const PressPage = ({posts}: {posts: PostData[]}) => {
    return (
        <Feed>
            {posts.map(postData => 
                <Post key={postData.imageUrl} data={postData} />)}
        </Feed>
    )
}

export const getStaticProps: GetStaticProps = () => {
    const files = fs.readdirSync('public/posts')

    const images = files.filter(file => file.split('.')[1] !== 'txt')

    const posts: PostData[] = images.map(imageName => {
        let header = ''
        let text = ''

        try {
            const txt = fs.readFileSync(`public/posts/${imageName.split('.')[0]}.txt`).toString()
            let splitted = txt.split('@')
            if (splitted.length > 1) {
                header = splitted[0]
                text = splitted[1]
            } else {
                text = txt
            }
        } catch {

        }

        return {
            imageUrl: `/posts/${imageName}`,
            text,
            header
        } as PostData
    })

    return {
        props: {
            posts
        }
    }
}

export default PressPage

const Feed = styled.div`
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
    font-size: 17px;
    background-color: #bec2c9;
    padding: 40px 60px;

    @media (max-width: 830px) {
        margin: 0;
        padding: 12px;
        gap: 24px;
    }
`