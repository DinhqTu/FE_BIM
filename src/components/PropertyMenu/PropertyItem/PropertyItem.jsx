function PropertyItem(props) {
    const { name, value } = props;
    return (
        <div className="ifc-property-item" key={name}>
            <div className="uppercase font-bold pr-2">{name}</div>
            <div className="ifc-property-value">
                {value}
            </div>  
        </div>
    );
}

export default PropertyItem;