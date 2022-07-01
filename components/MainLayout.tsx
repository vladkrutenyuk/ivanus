import styled from 'styled-components'
import LinkA from './LinkA'
import NavBar, { NavBarItem } from './NavBar'

const MainLayout = ({ children, items }: 
    { children: JSX.Element, items: NavBarItem[] }) => {
    return (
        <>
            <FlexColumnCenter>
                <BackgroundCosmos src='/images/cosmos.jpg' alt='ваня юницкий космос' />
                <SubHeader>ФАН-ВЕБСАЙТ</SubHeader>
                <LinkA href='/'>
                    <Header>
                        <SmileImage src='/images/smile.png' alt='ваня улыбака смайл' />
                        <HeaderImage src='/images/vanya-rainbow.png' alt='ваня юницкий гей' />
                    </Header>
                </LinkA>
                <NavBar items={items}></NavBar>
                {children}
            </FlexColumnCenter>
        </>
    )
}

export default MainLayout

const FlexColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
`

const BackgroundCosmos = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
`

const SubHeader = styled.div`
    margin-top: 12px;
    color: white;
    font-family: 'Courier New';
    font-style: italic;
    font-weight: 700;
    font-size: 35px;

    @media (max-width: 1000px) {
        font-size: 23px;
        margin-top: 8px;
    }
`

const Header = styled.div`
    position: relative;
    margin-top: 24px;
    padding: 20px 32px;
    background-color: #414450;
    border: 6px ridge #535665;

    @media (max-width: 1000px) {
        padding: 10px 16px;
        margin-top: 18px;
    }
`

const HeaderImage = styled.img`
    position: relative;
    width: 400px;
    height: 54px;
    object-fit: contain;

    @media (max-width: 1000px) {
        width: calc(400px*0.8);
        height: calc(54px*0.8);
    }
`

const SmileImage = styled.img`
    position: absolute;
    top: -26px;
    left: calc(50% - 22px);
    width: 44px;
    height: 44px;

    @media (max-width: 1000px) {
        width: 30px;
        height: 30px;
        top: -20px;
        left: calc(50% - 15px); 
    }
`