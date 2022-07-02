import styled from "styled-components"
import AgeTimer from "../components/AgeTimer"
import Ivan3D from "../components/Ivan3D"

export default function HomePage() {
	return (
		<>
			<Ivan3D />
			<CelebrateLentGroup>
				<BirthdayGoldCircleImg src='/images/happy-birthday-circle.png' alt='ваня юницкий миллионы денег с днем рождения' />
				<CelebrateLent>
					Празднуем 30-летие Ивана Юницкого!
				</CelebrateLent>
				<BirthdayGoldCircleImg src='/images/happy-birthday-circle.png' alt='ваня юницкий миллионы денег с днем рождения' />
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
	padding: 10px 36px;
	margin: 0 -20px;
	border: 4px #ebc25b68 double;
	background: linear-gradient(0deg, #000000 -29.44%, #31200C 100%);
	color: #EBC35B;
	font-family: 'SignPainter';
	font-style: normal;
	font-weight: 400;
	font-size: 46px;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 32px;
	}
`

const BirthdayGoldCircleImg = styled.img`
	width: 167px;
	z-index: 1;
`