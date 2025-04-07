import { IRol } from '../../users/models/rol/rol.model';
import { IResponseBase } from '../../core/models/base/response.model';

export interface MenuItem {
  id_menu: number;
  icon: string;
  link: string;
  order: number;
  title: string;
  expanded: boolean;
  children: MenuItem[];
}

interface dataResponse {
    items: MenuItem[];
    rol: IRol;
}

export type GetMenuResponse = Omit<IResponseBase<MenuItem>, 'data'> & {
  data: dataResponse;
};

export type GetMenusResponse = Omit<IResponseBase<MenuItem[]>, 'data'> & {
    data: dataResponse[];
}

export type GetMenuRequest = Pick<IRol, 'id_rol'>;