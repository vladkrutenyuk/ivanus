import styled from "styled-components"

const GalleryItem = ({ imageUrl }: { imageUrl: string }) => {
    return (
        <Img src={imageUrl} alt={imageUrl} />
    )
}

export default GalleryItem

const Img = styled.img`
    object-fit: fill;
    width: 150px;
    height: 150px;
`