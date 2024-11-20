'use client'
import Image from "next/image";
import dice_logo from "../../image/logo.png";
import blue1 from "../../image/dice-blue-1.svg";
import blue2 from "../../image/dice-blue-2.svg";
import blue3 from "../../image/dice-blue-3.svg";
import blue4 from "../../image/dice-blue-4.svg";
import blue5 from "../../image/dice-blue-5.svg";
import blue6 from "../../image/dice-blue-6.svg";
import red1 from "../../image/dice-red-1.svg";
import red2 from "../../image/dice-red-2.svg";
import red3 from "../../image/dice-red-3.svg";
import red4 from "../../image/dice-red-4.svg";
import red5 from "../../image/dice-red-5.svg";
import red6 from "../../image/dice-red-6.svg";

import { useState } from "react";

const blueArray: string[] = [dice_logo, blue1, blue2, blue3, blue4, blue5, blue6];
const redArray: string[] = [dice_logo, red1, red2, red3, red4, red5, red6];
const colorArray = [redArray, blueArray];
let num: number = 0;
let color: string[] = []

interface MyProps
{
    name: string;
    color: number;
}

function Board(props: MyProps)
{
    const [num, setNum] = useState<number>(1);
    const [history, setHistory] = useState<number[]>([])
    const handleRollClick = () =>
    {
        setNum(() => Math.floor(Math.random() * 6) + 1);
        setHistory(() => [...history, num]);
    }
    return (
        <>
            <Image
                src={colorArray[props.color][history.at(-1) || 0]}
                alt='주사위'
                priority
            >
            </Image>
            <button onClick={handleRollClick}>{props.name} = {history.at(-1) || '시작로고'}</button>
            <div>
                {history.join(',')}
            </div>
        </>
    )
}
export default Board;
