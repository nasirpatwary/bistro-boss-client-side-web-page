import { Parallax } from "react-parallax";
const SectionCover = ({title, subTitle, menuImg}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={menuImg}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className="hero mb-10 md:h-[550px]">
            <div className="bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="md:w-11/12 py-4 md:p-10 lg:px-20 space-y-3 bg-black/30">
                    <h2 className="text-3xl uppercase">{title}</h2>
                    <p>{subTitle}</p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default SectionCover;