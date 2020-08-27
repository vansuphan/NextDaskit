// /**
//  * fix: "Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?"
//  * https://github.com/vercel/next.js/issues/7915
//  */

import { forwardRef } from "react";
import Link from "next/link";

const CustomComponent = forwardRef((props, ref) => (
  <a ref={ref} {...props}>
    {props.children}
  </a>
));

export default (props) => (
  <Link href={props.href} passHref>
    <CustomComponent {...props} />
  </Link>
);
