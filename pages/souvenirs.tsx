import { GetStaticProps } from "next"
import styled from "styled-components"
import ShopItem, { ShopItemData } from "../components/ShopItem"
import fs from 'fs'

const SouvenirsPage = ({ items }: { items: ShopItemData[] }) => {
    return (
        <Container>
            {items.map(item => 
                <ShopItem key={item.name} data={item} />)}
        </Container>
    )
}

export const getStaticProps: GetStaticProps = () => {
    const files = fs.readdirSync('public/shop')

    const images = files.filter(file => file.split('.')[1] !== 'txt')

    const items: ShopItemData[] = images.map(imageName => {
        let name = ''
        let price = ''

        try {
            const txt = fs.readFileSync(`public/shop/${imageName.split('.')[0]}.txt`).toString()
            let splitted = txt.split('@')
            if (splitted.length > 1) {
                name = splitted[0]
                price = splitted[1]
            }
        } catch {

        }

        return {
            imageUrl: `/shop/${imageName}`,
            name,
            price
        } as ShopItemData
    })

    return {
        props: {
            items
        }
    }
}

export default SouvenirsPage

const Container = styled.div`
    max-width: 1000px;
    margin-top: 60px;
    margin-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;

    @media (max-width: 850px) {
        gap: 40px;
        margin-top: 20px;
        margin-bottom: 50px;
    }
`