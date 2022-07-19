export interface IMinifig {
  name: string
  num_parts: number
  set_img_url: string
  set_num: string
}

export interface IMinifigPart {
  part: {
    name: string
    part_img_url: string
    part_num: string
  }
}

export interface IOrderFormData {
  name?: string;
  surname?: string;
  phoneNumber?: string;
  email?: string;
  dateOfBirth?: Date;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: number;
}
