import styles from "./Card.module.scss";
import Image from "@/components/Image";
import Heading from "@/components/Heading";


const Card = ({ 
    breed,
    image
}) => {
    return (
    <>
        <div className={styles.dog}>
            <Image type='card' src={image} alt={`Image of an ${breed}`}/>
            <div>
            <Heading color="white" size="sm" align="center">{breed}</Heading>
            </div>   
        </div>
    </>
    );
};

export default Card;