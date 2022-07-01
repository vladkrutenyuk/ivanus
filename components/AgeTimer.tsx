import { sub } from "date-fns"
import { useEffect, useState } from "react"
import styled from "styled-components"

const AgeTimer = () => {
    const [ivanAge, setIvanAge] = useState<Date>()
    const [currentDate, setCurrentDate] = useState<Date>()

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
            setCurrentDate(new Date())
        }, 1000)
        
        return () => {
            interval && clearInterval(interval)
        }
    }, [])

    return (
        <>
            {currentDate &&
                <FlexRow>
                    <div>
                        <Digits>{30}</Digits>
                        y
                    </div>
                    <div>
                        <Digits>{`0`}</Digits>
                        m
                    </div>
                    <div>
                        <Digits>{currentDate.getDate() - 1}</Digits>
                        d
                    </div>
                    <div>
                        <Digits>{currentDate.getHours()}</Digits>
                        h
                    </div>
                    <div>
                        <Digits>{currentDate.getMinutes()}</Digits>
                        min
                    </div>
                    <div>
                        <Digits>{currentDate.getSeconds()}</Digits>
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
    background-color: #101010;
    color: #00c90085;
    margin-bottom: 60px;
`

const Digits = styled.span`
    font-size: 30px;
    font-family: 'Courier New', monospace;
    font-weight: 700;
    color: #00c900;
    background-color: black;
    padding: 2px;
`