import Board from "./page"
const RED: number = 0;
const BLUE: number = 1;
export default function BoardLayout()
{
    return (
        <>
            <div>
                <Board name="내꺼" color={RED}></Board>
            </div>

            <div>
                <Board name="니꺼" color={BLUE}></Board>
            </div>
        </>
    )
}