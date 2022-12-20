import { ReactElement, ReactNode, useState } from 'react';

import { Dialog } from '@headlessui/react';

import Button from '../Button/Button';

import s from './Popup.module.scss';

interface IModal {
  title?: string;
  description?: string;
  isShow: boolean;
  modalBtnTitle?: string;
  onModalBtnClick?: () => void;
  children: ReactNode;
}

const Popup = ({
  title,
  description,
  isShow,
  modalBtnTitle,
  onModalBtnClick,
  children,
}: IModal): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(isShow);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className={s.popupBackground}>
        <Dialog.Panel className={s.popup}>
          <div className={s.popupHeader}>
            <Dialog.Title className={s.popupTitle}>{title}</Dialog.Title>
            <Dialog.Description className={s.popupDescription}>
              {description}
            </Dialog.Description>
          </div>
          <div className={s.popupBody}>{children}</div>
          {modalBtnTitle && <Button onClick={onModalBtnClick}>{modalBtnTitle}</Button>}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Popup;
