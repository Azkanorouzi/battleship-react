import { CSSProperties, Dispatch, SetStateAction, useEffect, useState } from "react";
import alphabet from "../data/alphabet";
import { useUIControl } from "../contexts/UIControlCotext";
import { checkCollision, checkRoom, createTargetCells } from "../utils/gameChecks";
import { useGameControlContext } from "../contexts/GameControlContext";

interface GridPropsInterface {
    row?: number;
    col?: number;
    type?: string;
    customStyles?: string;
    customCellStyles?: string;
    rowName?: boolean;
    headName?:boolean
}
interface TitleStyle {
    className: string, style: CSSProperties,
}
interface Styles {
    [key:string]: TitleStyle;
}

export default function Grid({row = 3, col = 3, type = 'neon', customStyles = '', customCellStyles, rowName= true, headName = true} : GridPropsInterface) {
    const NumberOfCells = col * row;
    const board = Array.from({length: NumberOfCells }, (_,i) => i + 1)
    const boardRows = Array.from({length: row + 1}, (_,i) => i)
    const styles : Styles= {
        neon: {className: `grid grid-cols-${col + 1}  ${customStyles}`, style: {
            textShadow: `2px 2px 10px currentColor`,
        }}
    }
    const {data: gameData} = useGameControlContext()
    const [activeCells, setActiveCells] = useState<string[]>([])
    const [haveRoom, setHaveRoom] = useState<boolean>(true)

    useEffect(() => {
      setHaveRoom(checkRoom({targetCells: activeCells, lastCellAlpha: 'j', lastCellNum: 10}) && !checkCollision({cells: activeCells, fills: gameData.fills}))
    }, [activeCells, gameData.fills])

    let rowCount = 1;
  return (
    <section className={`lg:w-[650px] lg:h-[650px] relative text-lg ${styles[type]?.className}`} style={styles[type].style} >
      {/* Mapping over rows to generate horizontal headers */}
        {rowName ? boardRows.map(rowNum => <HeadBoard rowNum={rowNum} />) : ''}
        {/* Mapping over board to generate cells & vertical headers */}
        {board.map((cellNum) => {
        // 
        const text = rowCount === 1 ? `${alphabet[rowCount - 1]}${cellNum === 10  ?  '10' :  String(cellNum)[0] }` : `${alphabet[rowCount - 1]}${cellNum % 10 == 0 ? '10' : String(cellNum)[1]}`
        // Increases the row num by 1 when it's divisible by 10
        if (cellNum % col == 0) rowCount += 1;
        // Returning the cells
        if (text === `${alphabet[rowCount - 1]}1` && headName) return <><HeadBoardVertical rowCount={rowCount} /> <Cell text={text} customCellStyles={customCellStyles} activeCells={activeCells} hovered={activeCells.includes(text)} setActiveCells={setActiveCells} haveRoom={haveRoom}/> </>
        return <Cell text={text} customCellStyles={customCellStyles} hovered={activeCells.includes(text)} setActiveCells={setActiveCells} haveRoom={haveRoom } activeCells={activeCells}/>
        })}
    </section>
  )
}
// ======= Horizontal headers ======= //
function HeadBoard({rowNum} : {rowNum: number}) {

  return <h3 className="flex-1  justify-end items-center pr-3  text-accent flex ">{rowNum == 0 ? '' : rowNum}</h3>
}
// ======= Vertical headers ======= //
function HeadBoardVertical({rowCount} : {rowCount: number}) {
  return <h3 className="flex-1  justify-end items-center pr-3 text-lg text-accent flex " key={alphabet[rowCount - 1].toUpperCase()}>{alphabet[rowCount - 1].toUpperCase()}</h3>
}

// ======= Each individual cell ======= //
function Cell({text, customCellStyles, setActiveCells, hovered, haveRoom, activeCells} : {text: string, customCellStyles?: string,  hovered: boolean, setActiveCells: Dispatch<SetStateAction<string[]>>, haveRoom: boolean, activeCells: string[]}) {
  const {data, dispatch} = useUIControl()
  const {dispatch:gameDispatch, data: gameData} = useGameControlContext()

  const shipHovered = <div className={` top-0 left-0 bottom-0 right-0 absolute ${!haveRoom ? 'bg-accent' : 'bg-secondary'}`}></div>
  console.log(gameData.fills)
  return (
      <div className={` border border-secondary flex-1 relative  grid place-content-center w-full h-full overflow-visible ${customCellStyles} relative `} data-cellid={text} key={text} onMouseEnter={() => {
        if(data.selectedShip?.length) 
          setActiveCells(createTargetCells({direction: data.dir, length: data.selectedShip?.length, firstCell: text }))
      }}  onMouseLeave={() => {setActiveCells(() => [])}}
      onClick={() => {
        if(data.selectedShip && haveRoom ) {
          dispatch({type: 'ships/set', payLoad: data.selectedShip?.id})
          gameDispatch({type:'fills/set', payLoad: activeCells})
        }
      }}
      >
        {hovered && shipHovered}
        {gameData.fills.includes(text) && shipHovered}
      </div>
      
    )
  
}
