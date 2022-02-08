export class BrandInfo {
  name: string = '';
  iconUrl: string = '';
}


export class MenuItem {
  id: number = 0;
  iconClass: string = '';
  title: string = '';
  link: string = '';
  children: MenuItem[] = [];
}

