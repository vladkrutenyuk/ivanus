import styled from "styled-components"

export type ShopItemData = {
    imageUrl: string,
    name: string,
    price: string
}

const ShopItem = ({ data }: { data:ShopItemData }) => {
    return (
        <Item>
            <img src={data.imageUrl} width={400} height={400} alt='' />
            <Name>{data.name}</Name>
            <Price>{data.price} руб</Price>
            <BuyButton onClick={() => alert('Товар распродан.')} />
        </Item>
    )
}

export default ShopItem

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    font-family: 'Arial', sans-serif;
    font-weight: 400;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 4px 2px #000000;
`

const Name = styled.span`
    font-size: 20px;
`

const Price = styled.span`
    font-size: 18px;
`

const BuyButton = styled.img`
    width: 192px;
    height: 68px;
    border-radius: 31px;
    background: url('/images/buy-btn.jpg');
    cursor: pointer;
`