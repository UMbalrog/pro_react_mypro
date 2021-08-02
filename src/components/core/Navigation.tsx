import { Menu } from 'antd';
import { Link } from "react-router-dom"
import { HomeOutlined, ShopOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { RouterState } from 'connected-react-router';

function useActive(curPath: string, path: string) {
  return curPath === path ? 'ant-menu-item-selected' : '';
}

const Navigation = () => {
  const router = useSelector<AppState, RouterState>(state => state.router)
  const pathname = router.location.pathname;
  const isHome = useActive(pathname, '/');
  const isShop = useActive(pathname, '/shop');
  const isSignin = useActive(pathname, '/signin');
  const isSignup = useActive(pathname, '/signup');

  return (
    <Menu mode="horizontal" selectable={true}>
      <Menu.Item className={isHome} key="/" icon={<HomeOutlined />}>
        <Link to="/" >首页</Link>
      </Menu.Item>
      <Menu.Item className={isShop} key="/shop" icon={<ShopOutlined />}>
        <Link to="/shop">商城</Link>
      </Menu.Item>
      <Menu.Item className={isSignin} key="/signin" icon={<HomeOutlined />}>
        <Link to="/signin">登录</Link>
      </Menu.Item>
      <Menu.Item className={isSignup} key="/signup" icon={<ShopOutlined />}>
        <Link to="/signup">注册</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Navigation;