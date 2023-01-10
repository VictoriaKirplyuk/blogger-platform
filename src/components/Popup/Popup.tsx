import { ReactElement, ReactNode } from 'react';

import './Popup.scss';
import { Transition } from 'react-transition-group';

interface IPopup {
  title: string;
  description: string;
  isActive: boolean;
  setIsActive?: (isActive: boolean) => void;
  children: ReactNode;
  setDisabled?: (disabled: boolean) => void;
  clearFields?: () => void;
}

const Popup = ({
  title,
  description,
  isActive,
  setIsActive,
  children,
  setDisabled,
  clearFields,
}: IPopup): ReactElement => {
  const onPopupExited = (): void => {
    if (clearFields) clearFields();
    if (setDisabled) setDisabled(false);
  };

  const onPopupClick = (): void => {
    if (setIsActive) setIsActive(false);
  };

  return (
    <Transition
      in={isActive}
      timeout={1000}
      mountOnEnter
      unmountOnExit
      onExited={onPopupExited}
    >
      {state => (
        <div role="presentation" className={`popup ${state}`} onClick={onPopupClick}>
          <div
            role="presentation"
            className={`popupContent ${state}`}
            onClick={e => e.stopPropagation()}
          >
            <div
              role="dialog"
              aria-labelledby="dialogTitle"
              aria-describedby="dialogDesc"
            >
              <div className="popupHeader">
                {title && (
                  <div id="dialogTitle" className="popupTitle">
                    {title}
                  </div>
                )}
                {description && (
                  <div id="dialogDesc" className="popupDescription">
                    {description}
                  </div>
                )}
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Popup;
