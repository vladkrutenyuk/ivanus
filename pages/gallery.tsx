import { GetStaticProps } from "next"
import fs from 'fs'
import styled from "styled-components"
import GalleryItem from "../components/GalleryItem"

const GalleryPage = ({ images }: { images: string[] }) => {
    return (
        <Container>
            {images?.map(image => 
                <GalleryItem key={image} imageUrl={image}/>)}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
    margin-top: 60px;
    margin-bottom: 100px;
`

export const getStaticProps: GetStaticProps = () => {
    let images = fs.readdirSync('public/gallery')

    images = images.map(image => `/gallery/${image}`)

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