import styled from 'styled-components'
import Image from '../node_modules/next/image'
import LinkA from './LinkA'
import NavBar, { NavBarItem } from './NavBar'

const navBarItems: NavBarItem[] = [
    {
        label: 'Биография',
        href: '/biography'
    },
    {
        label: 'Творчество',
        href: '/creative'
    },
    {
        label: 'Автобусный тур',
        href: '/bustrip'
    },
    {
        label: 'Галерея',
        href: '/gallery'
    },
    {
        label: 'Пресса',
        href: '/press'
    },
    {
        label: 'Сувениры',
        href: '/souvenirs'
    },
]

const MainLayout = ({ children }: { children: JSX.Element}) => {
    return (
        <>
            <FlexColumnCenter>
                <BackgroundContainer>
                    <Image src={'/images/cosmos.jpg'} layout='fill' objectFit='cover' alt='ваня юницкий космос' />
                </BackgroundContainer>
                <SubHeader>ФАН-ВЕБСАЙТ</SubHeader>
                <LinkA href='/'>
                    <Header>
                        <SmileContainer>
                            <Image src='/images/smile.png' width={44} height={44} alt='ваня улыбака смайл' />
                        </SmileContainer>
                        <HeaderImageContainer>
                            <Image src='/images/vanya-rainbow.png' layout='fill' objectFit='contain' alt='ваня юницкий гей' />
                        </HeaderImageContainer>
                    </Header>
                </LinkA>
                <NavBar items={navBarItems}></NavBar>
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
`

const BackgroundContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`

const SubHeader = styled.div`
    margin-top: 12px;
    color: white;
    font-family: 'Courier New';
    font-style: italic;
    font-weight: 700;
    font-size: 35px;
`

const Header = styled.div`
    position: relative;
    margin-top: 24px;
    padding: 20px 32px;
    background-color: #414450;
    border: 6px ridge #535665;
`

const HeaderImageContainer = styled.div`
    position: relative;
    width: 400px;
    height: 54px;
`

const SmileContainer = styled.div`
    position: absolute;
    top: -26px;
    left: calc(50% - 22px);
`