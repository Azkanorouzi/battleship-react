import { CSSProperties } from "react";
import { useDrop } from "react-dnd";



interface GridPropsInterface {
    row?: number;
    col?: number;
    type?: string;
    customStyles?: string;
    customCellStyles?: string;
}
interface TitleStyle {
    className: string, style: CSSProperties,
}
interface Styles {
    [key:string]: TitleStyle;
}
export default function Grid({row = 3, col = 3, type = 'neon', customStyles = '', customCellStyles} : GridPropsInterface) {
    const [{isOver}, drop] = useDrop({
        accept: 'ITEM',
        drop: (item) => {
            const { name } = item;
            console.log(item)
        },
        collect: (monitor) => {
          return { isOver: monitor.isOver()}
        }
      })
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
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
    <section className={`${styles[type]?.className} lg:w-[650px] lg:h-[650px] relative`} style={styles[type].style} ref={drop}>
        {boardRows.map(rowNum => <h3 className="flex-1  justify-end items-center pr-3 text-lg text-accent flex ">{rowNum == 0 ? '' : rowNum}</h3>)}
        {board.map((cellNum) => {
        const text = rowCount === 1 ? `${alphabet[rowCount - 1]}${cellNum == 10 ?  '0' :  String(cellNum)[0] }` : `${alphabet[rowCount - 1]}${String(cellNum)[1]}`
        // Increases the row num by 1 when it's divisible by 10
        if (cellNum % col == 0) rowCount += 1;
        if (text === `${alphabet[rowCount - 1]}1`) return <><h3 className="flex-1  justify-end items-center pr-3 text-lg text-accent flex " key={alphabet[rowCount - 1].toUpperCase()}>{alphabet[rowCount - 1].toUpperCase()}</h3> <div className={` border border-secondary flex-1 relative  grid place-content-center w-full h-full  ${customCellStyles}`} data-cellid={text} key={text}></div></>
        return <div className={` border border-secondary flex-1 relative  grid place-content-center w-full h-full  ${customCellStyles}`} data-cellid={text} key={text}></div>
        })}
    </section>
  )
}
