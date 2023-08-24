import PropertyItem from './PropertyItem/PropertyItem';

function PropertyMenu(props) {
  const { properties } = props;
  if (!properties) return;
  return (
    <>
        {Object.keys({ ...properties }).map((key) => {
            console.log(`${key}: ${{...properties[key]}.value}`);
            return (
                <PropertyItem
                key={key}
                name={key}
                value = {{...properties[key]}.type ? {...properties[key]}.value : ""}
                />
            );
        })}
    </>

  );
}

export default PropertyMenu;
