export class BrandInfo {
  name: string = '';
  iconUrl: string = '';
}


export class MenuItem {
  id: string = '';
  iconClass: string = '';
  title: string = '';
  route: string = '';
  children: MenuItem[] = [];
}

