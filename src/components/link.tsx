import * as React from "react";

const Link = React.forwardRef<HTMLAnchorElement, JSX.IntrinsicElements["a"]>(
  function IconLink(props, ref) {
    return (
      <a {...props} className="underlined-link text-gray-400 font-semibold" ref={ref}>
        {props.children}
      </a>
    );
  }
);

export { Link };
