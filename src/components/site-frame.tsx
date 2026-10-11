import { Header, Footer, CartDrawer } from './site';
export function SiteFrame({children}:{children:React.ReactNode}){return <><Header/><main id="main">{children}</main><Footer/><CartDrawer/></>;}
