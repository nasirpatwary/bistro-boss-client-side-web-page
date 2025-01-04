
const MenuCard = ({item}) => {
    const {category, image, recipe} = item
    return (
        <div className="card rounded-none bg-base-100 shadow-xl">
          <img
            src={image}
            alt="Shoes"
            className="" />
        <div className="card-body bg-[#f3f3f3] items-center text-center">
          <h2 className="card-title">Caeser {category}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline bg-[#e8e8e8] border-b-2 border-0 uppercase border-[#BB8506] text-[#BB8506] px-5">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default MenuCard;