
const Cover = ({heading, subHeading}) => {
    return (
        <div className='md:w-10/12 md:px-12 space-y-2 bg-white py-8 mx-auto text-center'>
            <h2 className='text-3xl'>{heading}</h2>
            <p>{subHeading}</p>
        </div>
    );
};

export default Cover;