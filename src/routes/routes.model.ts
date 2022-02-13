import Detail from '../pages/Detail';
import Main from '../pages/Main';

interface PathItem {
  path: string;
  component: React.ComponentClass<any> | React.FunctionComponent<any>;
  exact: boolean;
}

export const appRoutes: PathItem[] = [
  {
    path: '/main',
    component: Main,
    exact: true,
  },
  {
    path: '/detail/:id',
    component: Detail,
    exact: true,
  },
];
