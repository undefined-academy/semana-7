import styles from "./Heading.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles); 

const Heading = ({ children, color, size, align="left" }) => {
    return (
    <>
        <h4 className={cx('font-bold',  {
                [`color-${color}`]: color,
                [`heading-${size}`]: size,
                [`heading-align-${align}`]: align,
            })}>{children}</h4>
    </>
    );
}

export default Heading;