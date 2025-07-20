import React, { useEffect, useRef, useState } from 'react';

/**
 * @title TagEllipsis
 */
export interface TagEllipsisProps {
  children?: React.JSX.Element[];
  maxTag: 'responsive' | number;
}

function TagEllipsis(props: TagEllipsisProps) {
  const { maxTag, children } = props;

  const outerRef = useRef(null);
  const [overflow, setOverflow] = useState(0);
  // const index = useRef(null);

  useEffect(() => {
    if (!outerRef?.current || !outerRef?.current.children) return;
    if (maxTag !== 'responsive') {
      setOverflow(children.length - maxTag);
      return;
    }
    let innerWidth = 0;
    const outerWidth = outerRef.current.offsetWidth;
    const childrenDom = [...outerRef.current.children];
    for (let index = 0; index < childrenDom.length; index++) {
      innerWidth += childrenDom[index].offsetWidth;
      if (innerWidth > outerWidth) {
        setOverflow(childrenDom.length - index);
        break;
      }
    }
  }, [outerRef, props.children, props.maxTag]);

  function renderShowTag() {
    if (overflow > 0) {
      return children.map((item, index) => {
        if (children.length - index - 1 < overflow) return;
        return item;
      });
    }
    return children;
  }

  return (
    <div style={{ width: '100px', overflow: 'hidden', display: 'flex', flexWrap: 'nowrap' }}>
      <div
        ref={outerRef}
        style={{ display: 'flex', flexWrap: 'nowrap', flexShrink: 1, width: '100%' }}
      >
        {renderShowTag()}
      </div>
      <div className="overflow" style={{ width: '20px', flexShrink: 0 }}>
        +{overflow}
      </div>
    </div>
  );
}

export default TagEllipsis;
