import styled from "styled-components"

const BustripPage = () => {
    return (
        <>
            <FireWall></FireWall>
            <CDDiskImg src='/images/bustrip-disk.png' alt='автобусный тур в автобусе весело музыка альбом диск' />
            <Audio
                controls
                src="/audio/autobus-tour-song.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
            </Audio>s
            <Words>
                {words}
                {words}
                {words}
                {words}
                {words}
                {words}
                {words}
            </Words>
        </>
    )
}

export default BustripPage

const FireWall = styled.div`
    width: 100%;
    height: 200px;
    position: fixed;
    left: 0;
    bottom: 0;
    background-image: url("/images/fire.gif");
    mix-blend-mode: lighten;
    pointer-events: none;
`

const CDDiskImg = styled.img`
    margin-top: -30px;
    width: 520px;

    @media (max-width: 540px) {
        width: 360px;
        margin-top: -20px;
    }
`

const Audio = styled.audio`
    width: 512px;
    margin-top: -40px;

    @media (max-width: 540px) {
        width: 90%;
        margin-top: -30px;
    }
`

const Words = styled.pre`
    color: white;
    font-size: 16px;
    font-family: monospace;
    margin-top: 50px;
    margin-bottom: 100px;

    @media (max-width: 540px) {
        margin-top: 30px;
    }
`

const words = 
`Автоооо-буу-сный тур
Тутуту-тутуту-тутутут

В Автоооо-буу-се весело
Тутуту-тутуту-тутутут

Автоооо-буу-сный тур
Тутуту-тутуту-тутутут

В Автоооо-буу-се весело
Тутуту-тутуту-тутутут

Автоооо-буу-сный тур
Тутуту-тутуту-тутутут

В Автоооо-буу-се весело
Тутуту-тутуту-тутутут

Автоооо-буу-сный тур
Тутуту-тутуту-тутутут

В Автоооо-буу-се весело
Тутуту-тутуту-тутутут

Автоооо-буу-сный тур
Тутуту-тутуту-тутутут

В Автоооо-буу-се весело
Тутуту-тутуту-тутутут

Автоооо-буу-сный тур
Тутуту-тутуту-тутутут

В Автоооо-буу-се весело
Тутуту-тутуту-тутутут

Автоооо-буу-сный тур
Тутуту-тутуту-тутутут

В Автоооо-буу-се весело
Тутуту-тутуту-тутутут

Автоооо-буу-сный тур
Тутуту-тутуту-тутутут

В Автоооо-буу-се весело
Тутуту-тутуту-тутутут

Автоооо-буу-сный тур
Тутуту-тутуту-тутутут

В Автоооо-буу-се весело
Тутуту-тутуту-тутутут
`