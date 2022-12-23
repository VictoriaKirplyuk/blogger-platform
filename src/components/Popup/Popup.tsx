import { ReactElement, ReactNode } from 'react';

import s from './Popup.module.scss';

interface IPopup {
  title: string;
  description: string;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
  children: ReactNode;
}

const Popup = ({
  title,
  description,
  isActive,
  setIsActive,
  children,
}: IPopup): ReactElement => {
  const popupStyle: string = isActive ? `${s.popup} ${s.active}` : `${s.popup}`;
  const popupContentStyle: string = isActive
    ? `${s.popupContent} ${s.active}`
    : `${s.popupContent}`;

  return (
    <div role="presentation" className={popupStyle} onClick={() => setIsActive(false)}>
      <div
        role="presentation"
        className={popupContentStyle}
        onClick={e => e.stopPropagation()}
      >
        <div role="dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">
          <div className={s.popupHeader}>
            {title && (
              <div id="dialogTitle" className={s.popupTitle}>
                {title}
              </div>
            )}
            {description && (
              <div id="dialogDesc" className={s.popupDescription}>
                {description}
              </div>
            )}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
