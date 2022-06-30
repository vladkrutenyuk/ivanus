import { GetStaticProps } from "next"
import styled from "styled-components"
import TalantItem, { TalantData } from "../components/TalantItem"
import fs from 'fs'

const BiographyPage = ({ talants }: { talants: TalantData[] }) => {
    return (
        <>
            <IvanCar>
                <BoomImage src='/images/boom.jpg' width={757} height={539} alt='иван воин оружия стрельба тачки форсаж'></BoomImage>
                <IvanImage src='/images/danger.png' width={464} height={549} alt='иван воин оружия стрельба тачки форсаж'></IvanImage>
            </IvanCar>
            <Biography>
                <BiographyTitle>ИВАН ЮНИЦКИЙ</BiographyTitle>
                <TextDecor src='/images/text-decor.jpg' />
                <BiographyText>
                    Иван родился 1992 года 1 июля.
                    <br/>
                    Родился он в России.
                    <br/>
                    Отучился в школе, а после поступил в университет в Москве.
                    <br/>
                    Окончил университет.
                    <br/>
                    Дальнейшую свою деятельность
                    он посветил цифровым технологиям.
                    <br/>
                    Успел основать немало кампаний не только по стране, но и по всмеу миру.
                    Паралллельно активно развивал свои творческий навык такие как поэзия, 
                    пение, живопись и лепка из глины.
                    Также не мало важную часть его жизни играет рыбалка.
                </BiographyText>
                <TextDecor width='324px' src='/images/text-decor.jpg' />
            </Biography>
            <TalantsTitle src='/images/talants-title.svg'/>
            <TalantsTitleDecor src='/images/text-decor-2.jpg' />
            <Talants>
                {talants.map(talantData => 
                    <TalantItem key={talantData.title} data={talantData}/>)}
            </Talants>
            <Title>Художник.</Title>
            <Text>«Интеллектуал обьясняет простые вещи сложным языком. Художник обьясняет сложные простым» - Иван Юницкий</Text>
            <video style={{marginBottom: '100px'}} controls>
                <source src="/videos/ivan-tricks.webm" type="video/webm"/>
                Your browser does not support the video tag.
            </video>
            
        </>
    )
}

export const getStaticProps: GetStaticProps = () => {
    const files = fs.readdirSync('public/talants')

    const images = files.filter(file => file.split('.')[1] !== 'txt')

    const talants: TalantData[] = images.map(imageName => {
        let title = ''
        let text = ''

        try {
            const txt = fs.readFileSync(`public/talants/${imageName.split('.')[0]}.txt`).toString()
            let splitted = txt.split('@')
            if (splitted.length > 1) {
                title = splitted[0]
                text = splitted[1]
            } else {
                text = txt
            }
        } catch {

        }

        return {
            imageUrl: `/talants/${imageName}`,
            text,
            title
        } as TalantData
    })

    return {
        props: {
            talants
        }
    }
}

export default BiographyPage

const IvanCar = styled.div`
    position: relative;
    width: 757px;
    height: 539px;
`

const IvanImage = styled.img`
    position: absolute;
    width: 610px;
    height: 622px;
    left: 53px;
    top: -31px;
    filter: drop-shadow(0px -41px 95px -66px #FFFFFF);
`

const BoomImage = styled.img`
    mix-blend-mode: lighten;
`

const Biography = styled.div`
    max-width: 600px;
    margin-top: 40px;
    padding: 44px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0D1832;
    color: white;
`

const BiographyTitle = styled.div`
    font-family: 'Times New Roman', serif;
    font-weight: 700;
    font-size: 37px;
`

const TextDecor = styled.img`
    mix-blend-mode: lighten;
`

const BiographyText = styled.p`
    font-family: 'Times New Roman', serif;
    font-size: 22px;
    text-align: center;
    margin: 16px 0;
    max-width: 450px;
`

const TalantsTitle = styled.img`
    margin-top: 80px;
`

const TalantsTitleDecor = styled.img`
    margin-bottom: 80px;
    mix-blend-mode: lighten;
` 

const Talants = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    margin-bottom: 100px;
`

const Title = styled.h2`
    margin-top: 0;
    margin-bottom: 30px;
    font-family: 'Arial', sans-serif;
    font-weight: 400;
    font-size: 47px;
    color: white;
    text-shadow: 0px 4px 2px #000000;
`
const Text = styled.p`
    max-width: 400px;
    margin-bottom: 40px;
    font-family: 'Arial', sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-align: justify;
    text-overflow: ellipsis;

    color: #FFFFFF;

    text-shadow: 0px 4px 2px #000000;
`