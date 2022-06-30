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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;
    margin-top: 60px;
    margin-bottom: 100px;
`