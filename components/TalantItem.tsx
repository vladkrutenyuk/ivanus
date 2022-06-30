import styled from "styled-components"

export type TalantData = {
    title: string,
    text: string,
    imageUrl: string
}

const TalantItem = ({ data }: { data: TalantData }) => {
    return (
        <Container>
            <TextGroupFlexItem>
                <Title>{data.title}</Title>
                <Text>{data.text}</Text>
            </TextGroupFlexItem>
            <ImageFlexItem>
                <img src={data.imageUrl} alt={data.title}/>
            </ImageFlexItem>
        </Container>
    )
}

export default TalantItem

const Container = styled.div`
    display: flex;
    max-width: 824px;
    gap: 60px;
`

const TextGroupFlexItem = styled.div`
    flex-grow: 1;
`

const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    font-family: 'Arial';
    font-weight: 400;
    font-size: 47px;
    color: white;
    text-shadow: 0px 4px 2px #000000;
`

const Text = styled.p`
    font-family: 'Arial';
    font-weight: 400;
    font-size: 18px;
    text-align: justify;
    text-overflow: ellipsis;

    color: #FFFFFF;

    text-shadow: 0px 4px 2px #000000;
`

const ImageFlexItem = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
`