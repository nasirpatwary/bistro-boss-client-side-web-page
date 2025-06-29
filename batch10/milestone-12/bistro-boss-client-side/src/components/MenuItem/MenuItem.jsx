
const MenuItem = ({item}) => {
    console.log(item);
    const {name, image, recipe, price} = item
    return (
        <div className="flex flex-col md:flex-row space-x-3">
            <img className="w-16 md:w-24" style={{borderRadius: "0 150px 150px 150px"}} src={image} alt="" />
            <div>
                <h2 className="uppercase">{name} -----------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
}
export default MenuItem;