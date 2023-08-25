import TreeNode from "./TreeNode";

function TreeNestedNode(props) {
    const { node } = props;
    
    return (
        <li>
            <ul className="nested">
                <div>
                    {/* {node.children.length > 0 ? <TreeNestedNode content={node.children} /> : <TreeNode content={node.children}/> } */}
                    {node.children.length > 0 ? Object.keys(node.children).map((index) => {
                        // <span className="caret">{node.children[index].type}</span>
                        <TreeNestedNode node={node.children[index]}/>   
                        
                    }) : <TreeNode content={node}/>}
                    {/* <TreeNestedNode node={node.children}/> */}
                </div>
            </ul>
        </li>
    );
}

export default TreeNestedNode;