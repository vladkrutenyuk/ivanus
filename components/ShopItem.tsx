import styled from "styled-components"

export type ShopItemData = {
    imageUrl: string,
    name: string,
    price: string
}

const ShopItem = ({ data }: { data:ShopItemData }) => {
    return (
        <Item>
            <Cover src={data.imageUrl} alt='' />
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

    @media (max-width: 850px) {
        max-width: 300px;
    }
`

const Cover = styled.img`
    width: 400px;
    height: 400px;

    @media (max-width: 850px) {
        width: 300px;
        height: 300px;
    }
`

const Name = styled.span`
    font-size: 20px;

    @media (max-width: 850px) {
        font-size: 16px;
    }
`

const Price = styled.span`
    font-size: 18px;

    @media (max-width: 850px) {
        font-size: 14px;
    }
`

const BuyButton = styled.img`
    width: 192px;
    height: 68px;
    border-radius: 31px;
    background: url('/images/buy-btn.jpg');
    background-size: contain;
    cursor: pointer;

    @media (max-width: 850px) {
        width: calc(192px*0.7);
        height: calc(68px*0.7);
        border-radius: calc(31px*0.7);
    }
`