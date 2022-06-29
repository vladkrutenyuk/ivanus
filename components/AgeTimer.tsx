import { sub } from "date-fns"
import { useEffect, useState } from "react"
import styled from "styled-components"

const AgeTimer = () => {
    const [ivanAge, setIvanAge] = useState<Date>()

    useEffect(() => {
        let interval = setInterval(() => {
            let diff = sub(Date.now(), {
                years: 1992,
                months: 6,
                weeks: 0,
                days: 1,
                hours: 0,
                minutes: 0,
                seconds: 0
            })
            setIvanAge(diff)
        }, 1000)
        
        return () => {
            interval && clearInterval(interval)
        }
    }, [])

    return (
        <>
            {ivanAge &&
                <FlexRow>
                    <div>
                        <Digits>{ivanAge.getFullYear()}</Digits>
                        y
                    </div>
                    <div>
                        <Digits>{ivanAge.getMonth()}</Digits>
                        m
                    </div>
                    <div>
                        <Digits>{ivanAge.getDate()}</Digits>
                        d
                    </div>
                    <div>
                        <Digits>{ivanAge.getHours()}</Digits>
                        h
                    </div>
                    <div>
                        <Digits>{ivanAge.getMinutes()}</Digits>
                        min
                    </div>
                    <div>
                        <Digits>{ivanAge.getSeconds()}</Digits>
                        sec
                    </div>
                </FlexRow>}
        </>

    )
}

export default AgeTimer

const FlexRow = styled.div`
    display: flex;
    gap: 10px;
    color: white;

    font-size: px;
    font-family: 'Courier New', monospace;
    font-weight: 700;
    background-color: black;
    color: #00c90085;

`

const Digits = styled.span`
    font-size: 30px;
    font-family: 'Courier New', monospace;
    font-weight: 700;
    color: #00c900;
    background-color: black;
    padding: 2px;
`

