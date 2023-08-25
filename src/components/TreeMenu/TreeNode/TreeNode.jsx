function TreeNode(props) {
    const { node } = props;
    
    function nodeToString(node) {
        return `${node.type} - ${node.expressID}`;
    }
    return (
        <li>
            <ul className="leaf-node">
                <div>
                    {nodeToString(node)}
                </div>
            </ul>
        </li>
        // <div className="ifc-property-item" key={name}>
        //     <div className="uppercase font-bold pr-2">{name}</div>
        //     <div className="ifc-property-value">
        //         {value}
        //     </div>  
        // </div>
    );
}

export default TreeNode;