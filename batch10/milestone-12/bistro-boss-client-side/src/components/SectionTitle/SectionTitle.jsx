
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="md:w-1/3 mx-auto text-center">
            <p className="text-yellow-500">--- {subHeading} ---</p>
            <hr />
            <h2 className="text-2xl py-2">{heading}</h2>
            <hr />
        </div>
    );
};

export default SectionTitle;