import Link from "next/link"

export default function ButtonOutline({ text, height = 34, onClick }) {
  var fontSize = "14px"
  var padding = (height - 14) / 2
  padding = padding + "px 24px"
  // console.log(padding)

  function handleClick(e){
    if(onClick) onClick(e)
  }

  return (
    <div className="btn-outline" onClick={handleClick}>
      <style jsx>{`
        $color: #979797;
        $colorActive: black;

        .btn-outline {
          cursor: pointer;
          display: inline-block;
          line-height: ${fontSize};
          border-radius: 5px;
          border: 1px solid $color;
          padding: ${padding};
          font-family: "Cabin";
          font-size: ${fontSize};
          color: $color;

          transition: all .25s;

          span {
            display: inline-block;
          }

          &:hover, &.active {
            color: $colorActive;
            border: 1px solid $colorActive;
          }
        }
      `}</style>
      <span>{text}</span>
    </div>
  )
}
