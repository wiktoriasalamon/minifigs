import {FigureSidebar} from './FigureSidebar';
import {IMinifig, IMinifigPart} from '../../pages/OrderPage/types';

interface Props {
    minifig: IMinifig | null
    parts: IMinifigPart[]
}

export const FigureSidebarContainer: React.FC<Props> = ({minifig, parts}) => {
    return (
        <FigureSidebar minifig={minifig} parts={parts}/>
    )
}
