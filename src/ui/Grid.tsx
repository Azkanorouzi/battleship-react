import { CSSProperties } from "react";
import { ship } from "../data/ships";
import alphabet from "../data/alphabet";
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
        if (text === `${alphabet[rowCount - 1]}1` && headName) return <><HeadBoardVertical rowCount={rowCount} /> <Cell text={text} customCellStyles={customCellStyles}/> </>
        return <Cell text={text} customCellStyles={customCellStyles} />
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
function Cell({text, customCellStyles} : {text: string, customCellStyles?: string, ship? : ship}) {

  return (

      <div className={` border border-secondary flex-1 relative  grid place-content-center w-full h-full overflow-visible ${customCellStyles} `} data-cellid={text} key={text} >
          
      </div>
      
    )
  
}
