import {IMinifig, IMinifigPart} from '../../pages/OrderPage/types';

interface Props {
    minifig: IMinifig | null
    parts: IMinifigPart[]
}

export const FigureSidebar: React.FC<Props> = ({minifig, parts}) => {
    return (
        <div>
            {minifig && <img src={minifig.set_img_url} />}
            {parts.map((part) => (
                <img src={part.part.part_img_url} key={part.part.part_num} />
            ))}
        </div>
    )
}
