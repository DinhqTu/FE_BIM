import TreeNestedNode from './TreeNode/TreeNestedNode';

function TreeMenu(props) {
  const { root } = props;
  if (!root) return;
//   const cLength = root.children.length;

  return (
    <>
        <li>
            <ul className="nested">
                <div className="display: inline-block; padding: 0 5px">
                    {/* {root.children !== [] ? Object.keys(root.children).map((index) => {
                        // <span className="caret">{root.children[index].type}</span>
                        <TreeNestedNode node={root.children[index]}/>   
                        
                    }) : <span className="caret">Hello</span>} */}
                    {/* <span className="caret">{root.type}</span> */}
                    {/* {root.children.map((child) => {
                        return (
                            <TreeNestedNode node={child}/>   
                        );
                    })} */}
                </div>
            </ul>
        </li>
    </>

  );
}

export default TreeMenu;
