import Image from "next/image"
import styled from "styled-components"

const GalleryItem = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <Container>
            <Image src={imageUrl} objectFit='fill' layout='fill' alt={imageUrl} />
        </Container>
            
    )
}

export default GalleryItem

const Container = styled.div`
    position: relative;
    width: 150px;
    height: 150px;
`