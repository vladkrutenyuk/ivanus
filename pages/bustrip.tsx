import Image from "next/image"
import styled from "styled-components"

const BustripPage = () => {
    return (
        <>
            <FireWall></FireWall>
            <Image style={{marginTop: '-40px'}} src='/images/bustrip-disk.png' width={520} height={520} alt='автобусный тур в автобусе весело музыка альбом диск' />
            <audio
                style={{width: '512px', marginTop: '-40px', zIndex: 1}}
                controls
                src="/audio/cc0-audio/bustrip.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
            </audio>
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

const Words = styled.pre`
    color: white;
    font-size: 16px;
    font-family: monospace;
    margin-top: 50px;
    margin-bottom: 100px;
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