import styled from "styled-components"
import AgeTimer from "../components/AgeTimer"
import Ivan3D from "../components/Ivan3D"

export default function HomePage() {
	return (
		<>
			<Ivan3D />
			<CelebrateLentGroup>
				<img src='/images/happy-birthday-circle.png' width={167} height={167} alt='ваня юницкий миллионы денег с днем рождения' />
				<CelebrateLent>
					Празднуем 30-летие Ивана Юницкого!
				</CelebrateLent>
				<img src='/images/happy-birthday-circle.png' width={167} height={167} alt='ваня юницкий миллионы денег с днем рождения' />
			</CelebrateLentGroup>
			<AgeTimer></AgeTimer>
		</>
	)
}

const CelebrateLentGroup = styled.div`
	display: flex;
	align-items: center;
`

const CelebrateLent = styled.div`
	background: linear-gradient(0deg, #000000 -29.44%, #31200C 100%);
	padding: 10px 36px;
	font-family: 'SignPainter';
	font-style: normal;
	font-weight: 400;
	font-size: 46px;
	color: #EBC35B;
	border: 4px #ebc25b68 double;
	position: relative;
	display: inline;
	margin: 0 -20px;
	z-index: -1;
`