import React, { useState, useEffect } from 'react'
import './App.scss'

export const App: React.FC = ():JSX.Element => {
	const [isDesktop, setIsDesktop] = useState<boolean | null>(null)

	useEffect(() => {
		updateDimensions()
		window.addEventListener('resize', updateDimensions)
		return () => window.removeEventListener('resize', updateDimensions)
	}, [])

	const updateDimensions = ():void => {
		const width: number = window.innerWidth
		setIsDesktop(width >= 812)
	}

	return (
		<main>
			{isDesktop ? <TitleDesktop /> : <TitleMobile />}
			{isDesktop ? <InfosDesktop /> : <InfosMobile />}
		</main>
	)
}

const TitleDesktop: React.FC = ():JSX.Element => (
	<div className='title-name'>
		{/*yarn cfonts "teresapelinski" -f slick -c "#4af626",white -e browser*/}
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭╮</span>
		<span className='color1'>╱╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭╮╭━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━╮</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color2'>┃╭╮╭╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰┫┣╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃╰╮┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃┃╭╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰┫┣╯</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color2'>╰╯┃┃╰╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱╱╱</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭╮╰╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰╯╯</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color1'>╱╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭╮╭╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭╮</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃╰╮┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭╮┃</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color1'>╱╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃┃╰╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭┫┣╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃┃╰╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭┫┣╮</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color1'>╱╱</span>
		<span className='color2'>╰╯</span>
		<span className='color1'>╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯╰━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯</span>
		<span className='color1'>╱╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯╰━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━╯</span>
		<span className='color1'>╱</span>
	</div>
)

const TitleMobile: React.FC = ():JSX.Element => (
	<div className='title-name'>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color2'>┃╭╮╭╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color2'>╰╯┃┃╰╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color1'>╱╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭╮╭╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color1'>╱╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃┃╰╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color1'>╱╱</span>
		<span className='color2'>╰╯</span>
		<span className='color1'>╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯╰━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯</span>
		<span className='color1'>╱</span>
		<br />
		<br />
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭╮</span>
		<span className='color1'>╱╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭╮╭━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭━━╮</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰┫┣╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃╰╮┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃┃╭╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰┫┣╯</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱╱╱</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭╮╰╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰╯╯</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭╮</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃╰╮┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━╮┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╭╮┃</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━━╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭┫┣╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃╰━╯┃</span>
		<span className='color1'>╱</span>
		<span className='color2'>┃┃┃╰╮</span>
		<span className='color1'>╱</span>
		<span className='color2'>╭┫┣╮</span>
		<span className='color1'>╱</span>
		<br />
		<span className='color1'>╱</span>
		<span className='color2'>╰╯</span>
		<span className='color1'>╱╱╱</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰╯╰━╯</span>
		<span className='color1'>╱</span>
		<span className='color2'>╰━━╯</span>
		<span className='color1'>╱</span>
	</div>
)

const InfosDesktop: React.FC = ():JSX.Element => (
	<div className='infos'>
		-- phd researcher in artificial intelligence and music (aim cdt) | augmented instruments lab
		-- <br />
		-- centre for digital music (c4dm) | queen mary university of london --
	</div>
)

const InfosMobile: React.FC = ():JSX.Element => (
	<div className='infos'>
		phd researcher in ai and music (aim cdt) <br />
		augmented instruments lab <br />
		centre for digital music (c4dm) <br />
		queen mary university of london
	</div>
)
