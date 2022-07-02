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
                <Img src={data.imageUrl} alt={data.title}/>
            </ImageFlexItem>
        </Container>
    )
}

export default TalantItem

const Container = styled.div`
    display: flex;
    max-width: 824px;
    gap: 40px;
    padding: 0 16px;

    @media (max-width: 800px) {
        flex-wrap: wrap;
        gap: 20px;
    }
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

    @media (max-width: 600px) {
        font-size: 35px;
    }
`

const Text = styled.p`
    font-family: 'Arial';
    font-weight: 400;
    font-size: 18px;
    text-align: justify;
    text-overflow: ellipsis;

    color: #FFFFFF;

    text-shadow: 0px 4px 2px #000000;


    @media (max-width: 600px) {
        font-size: 15px;
    }
`

const ImageFlexItem = styled.div`
    flex-grow: 1;

    @media (max-width: 600px) {
        flex-shrink: 1;
    }
`

const Img = styled.img`
    @media (max-width: 600px) {
        flex-shrink: 1;
        width: 100%;
    }
`