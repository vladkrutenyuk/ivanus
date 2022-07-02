import { GetStaticProps } from "next"
import fs from 'fs'
import styled from "styled-components"
import GalleryItem from "../components/GalleryItem"

const GalleryPage = ({ images }: { images: string[] }) => {
    return (
        <Container>
            {images?.map((image, index) => 
                <GalleryItem key={`image${index}`} imageUrl={image}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    align-items: center;
    gap: 40px;
    margin-top: 60px;
    margin-bottom: 100px;

    @media (max-width: 500px) {
    gap: 6px;
        margin-top: 8px;
        margin-bottom: 60px;
    }
`

export const getStaticProps: GetStaticProps = () => {
    let images = fs.readdirSync('public/ivans')

    images = images.map(image => `/ivans/${image}`)

    // images = shuffle(images)

    return {
        props: {
            images: [...shuffle(images), ...shuffle(images), ...shuffle(images), ...shuffle(images)]
        }
    }
}

function shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default GalleryPage