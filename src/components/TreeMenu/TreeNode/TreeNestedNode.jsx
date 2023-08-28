import { useEffect, useState } from 'react';
import TreeNode from "./TreeNode";

function TreeNestedNode(props) {
    const { node } = props;
    const [ children, setChildren ] = useState([]);

    useEffect(() => {
        setChildren(node.children);
    }, [node])
    
    return (
        <ul className='nested'>
            <li>
                <span>{node.expressID}</span>
                {node ? <TreeNestedNode content={children} /> : <TreeNode content={node}/> }
            </li>
        </ul>

    );
}

export default TreeNestedNode;