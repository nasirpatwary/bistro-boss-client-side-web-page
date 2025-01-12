import { RotatingLines } from "react-loader-spinner";

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-324px)]">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /> 
        </div>
    );
};

export default LoadingSpinner;