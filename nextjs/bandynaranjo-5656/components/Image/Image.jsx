import styles from "./Image.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles); 

const Image = ({ type, src, alt }) => {
    return (
    <>
        <img src={src} alt={alt} className={cx({
                [`${type}`]: type,
            })}/>
    </>
    );
}

export default Image;