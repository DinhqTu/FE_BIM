import { useEffect, useState } from 'react';
import TreeNestedNode from './TreeNode/TreeNestedNode';

function TreeMenu(props) {
    const { root } = props;
    const [ children, setChildren ] = useState([]);

    useEffect(() => {
        setChildren(root.children);
        // console.log(children);
    }, [root])

  return (
    <div className='ifc-tree-view'> 
        <ul>
            <li>
                <span> Name</span>
                {children && children.length > 0 ? children.map((component, index) => {
                    return (<TreeNestedNode key={index} node={component} />);
                        
                }) : <span className="caret">Hello</span>}
            </li>
        </ul>

    </div>
  );
}

export default TreeMenu;
