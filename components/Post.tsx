import { useEffect, useState } from "react"
import styled from "styled-components"

export type PostData = {
    imageUrl: string,
    text: string,
    header: string
}

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max)
}

const Post = ({ data }: { data: PostData}) => {
    const [views, setViews] = useState<number>()
    const [likes, setLikes] = useState<number>()
    const [isLiked, setIsLiked] = useState(false)

    // const views = 500 + getRandomInt(10000)
    useEffect(() => {
        setViews(getRandomInt(10000))
    }, [])

    useEffect(() => {
        if (views === undefined) return
        setLikes(getRandomInt(Math.floor(views / 2)))
    }, [views])

    const likeHandle = () => {
        if(likes === undefined) return

        if (isLiked) {
            setIsLiked(false)
            setLikes(likes - 1)
        } else {
            setLikes(likes + 1)
            setIsLiked(true)
        }
    }

    return (
        <Container>
            <span style={{fontFamily: 'monospace', fontSize: '12px'}}>24/02/1999 <i>spletnik.</i></span>
            <Title>{data.header}</Title>
            <Separator/>
            <Text>{data.text}</Text>
            <ImageContainer>
                <Img src={data.imageUrl} alt={data.text} />
                {isLiked && <MegaLike src='/images/megalike.jpg' width={100} height={100}></MegaLike>}
            </ImageContainer>
            <FlexRowBetween>
                <Views>{views} просмотров</Views>
                <LikeButton className={isLiked ? 'liked' : ''} onClick={likeHandle}>Мне нравится ({likes})</LikeButton>
            </FlexRowBetween>
        </Container>
    )
}

export default Post

const Container = styled.div`
    width: 700px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
`

const Title = styled.h1`
    margin: 0;
`

const Separator = styled.div`
    height: 1px;
    width: 100%;
    background-color: black;
`

const Text = styled.p`
    font-size: 16px;
    background-color: #bec2c9;
    color: black;
    /* color: #001AFF; */
    font-family: sans-serif;
    margin-bottom: 16px;
`


const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    /* background-color: black; */
    overflow: hidden;
    height: min-content;
`

const Img = styled.img`
    width: 100%;
    object-fit: contain;
    max-height: 700px;
`

const MegaLike = styled.img`
    position: absolute;
    bottom: 20px;
    right: 40px;
    border-radius: 50%;
    box-shadow: 0px 3px 37px rgba(0, 0, 0, 0.56);
`

const FlexRowBetween = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const LikeButton = styled.button`
    align-self: flex-end;
    color: #001AFF;
    font-size: 18px;
    padding: 2px;

    &.liked {
        background-color: #676a7f;
        border: 2px #001AFF solid;
    }
`

const Views = styled.div`
    /* opacity: 0.4; */
    color: #001AFF;
`



